# Script to load account level data into Pendo on a daily basis via Pendo API

import requests
import json
from django.utils import timezone
from monetate.account_metrics.api.v0.views.account_metrics_view import get_experience_summary_results
from monetate.account_metrics.queries import get_tabbed_metrics_query
from monetate.campaign.models import CampaignGroup
from monetate.recs.models import RecommendationSet
from monetate.retailer.models import Account
from monetate.retailer.multitenant import tenant_context


# ===========================================
# Variables
# ===========================================
DEFAULT_METRICS = [
    'conversion_rate', 'new_customer_conversion_rate', 'cart_rate',
    'abandon_cart_rate', 'bounce_rate', 'avg_order_value', 'revenue_per_session',
    'avg_time_on_site', 'avg_page_views'
]


# ===========================================
# Retailer
# ===========================================
retailers = Retailer.objects.filter()
for retailer in retailers:


    # ===========================================
    # Accounts (by Retailer)
    # ===========================================
    accounts = Account.objects.filter(archived=False, instance="p", retailer=retailer);
    for account in accounts:


        # ===========================================
        # Account Metrics
        # ===========================================
        a = Account.objects.get(id=account.id)
        with tenant_context({"account": a}):
            tabbed_metrics = get_tabbed_metrics_query(a, "all", "P1D", "P1D", DEFAULT_METRICS, timezone.now())[0]['result']

            # Add to Cart Rate
            add_to_cart = tabbed_metrics[u'm_cart_rate']
            add_to_cart = round((add_to_cart * 100), 2)

            # Abandon Cart Rate
            abandon_cart_rate = tabbed_metrics[u'm_abandon_cart_rate']
            abandon_cart_rate = round((abandon_cart_rate * 100), 2)

            # Average Order Value
            avg_order_value = tabbed_metrics[u'm_avg_order_value']
            avg_order_value = round(avg_order_value, 2)

            # Bounce Rate
            bounce_rate = tabbed_metrics[u'm_bounce_rate']
            bounce_rate = round((bounce_rate * 100), 2)

            # Conversion Rate
            conversion_rate = tabbed_metrics[u'm_conversion_rate']
            conversion_rate = round((conversion_rate * 100), 2)

            # New Visitor Conversion
            new_customer_conversion_rate = tabbed_metrics[u'm_new_customer_conversion_rate']
            new_customer_conversion_rate = round((new_customer_conversion_rate * 100), 2)

            # Page Views
            page_views = tabbed_metrics[u'page_views_sum']
            sessions = tabbed_metrics[u'sessions_sum']
            cart_sessions = tabbed_metrics[u'cart_sessions_sum']
            purchases = tabbed_metrics[u'purchase_sessions_sum']


        # ===========================================
        # Campaigns (Experiences)
        # ===========================================
        with tenant_context({"account": a}):
            experience_summary_results = get_experience_summary_results(a, "P1D", timezone.now())

            predictive = experience_summary_results['active_experiences']['predictive']
            split = experience_summary_results['active_experiences']['split']
            experience = experience_summary_results['active_experiences']['experience']
            predictive_exp = experience_summary_results['active_experiences']['predictive_exp']


        # ===========================================
        # Recommendation Sets
        # ===========================================
        recs = RecommendationSet.objects.filter(account=account, archived=False)
        client_onboarded = 0
        most_viewed = 0
        newest = 0
        purchase_also_purchase = 0
        recently_viewed = 0
        top_selling_count = 0
        top_selling_revenue = 0
        view_also_view = 0
        view_later_purchase = 0

        for rec in recs:
            algorithm = rec.algorithm
            if algorithm == "onboarded":
                client_onboarded += 1;
            elif algorithm == "view":
                most_viewed += 1;
            elif algorithm == "newest":
                newest += 1;
            elif algorithm == "purchase_also_purchase":
                purchase_also_purchase += 1;
            elif algorithm == "recent":
                recently_viewed += 1;
            elif algorithm == "purchase":
                top_selling_count += 1;
            elif algorithm == "purchase_value":
                top_selling_revenue += 1;
            elif algorithm == "view_also_view":
                view_also_view += 1;
            elif algorithm == "view_later_purchase":
                view_later_purchase += 1;


        # ===========================================
        # Send data to Pendo
        # ===========================================
        metadata = {
            "accountId":"{}::{}".format(account.retailer.id, account.id),
            "values": {
                "addtocartrate": add_to_cart,
                "abandoncartrate": abandon_cart_rate,
                "averageordervalue": avg_order_value,
                "bouncerate": bounce_rate,
                "conversionrate": conversion_rate,
                "newvisitorconversionrate": new_customer_conversion_rate,
                "pageviews": page_views,
                "sessions": sessions,
                "cartsessions": cart_sessions,
                "purchases": purchases,
                "campaignsexperience": experience,
                "campaignspredictive": predictive,
                "campaignspredictiveexp": predictive_exp,
                "campaignssplit": split,
                "recommendationsetclientonboarded": client_onboarded,
                "recommendationsetmostviewed": most_viewed,
                "recommendationsetnewest": newest,
                "recommendationsetpurchasealsopurchase": purchase_also_purchase,
                "recommendationsetrecentlyviewed": recently_viewed,
                "recommendationsettopsellingcount": top_selling_count,
                "recommendationsettopsellingrevenue": top_selling_revenue,
                "recommendationsetviewalsoview": view_also_view,
                "recommendationsetviewlaterpurchase": view_later_purchase
            }
        }

        data = '[' + json.dumps(metadata) + ']'
        headers = {
            'x-pendo-integration-key': "5508000e-d2f6-492f-622f-fbe620a9a4f4",
            'content-type': "application/json",
        }

        url = "https://app.pendo.io/api/v1/metadata/account/custom/value"
        response = requests.post(url, data = data, headers = headers)
