import requests
import json
from django.utils import timezone
from monetate.account_metrics.queries import get_tabbed_metrics_query
from monetate.recs.models import RecommendationSet
from monetate.retailer.models import Account
from monetate.retailer.multitenant import tenant_context


# ===========================================
# Variables
# ===========================================
headers = {
    'x-pendo-integration-key': "5508000e-d2f6-492f-622f-fbe620a9a4f4",
    'content-type': "application/json",
}

DEFAULT_METRICS = [
    'conversion_rate', 'new_customer_conversion_rate', 'cart_rate',
    'abandon_cart_rate', 'bounce_rate', 'avg_order_value', 'revenue_per_session',
    'avg_time_on_site', 'avg_page_views',
]


# ===========================================
# Retailer
# ===========================================
retailers = Retailer.objects.filter(id=414)
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
            conversion_rate = get_tabbed_metrics_query(a, "all", "P1D", "P1D", DEFAULT_METRICS, timezone.now())[0]['result'][u'm_conversion_rate']
            conversion_rate = round((conversion_rate * 100), 2);
            print(conversion_rate)


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
                "conversionRate": conversion_rate,
                "recommendationSetClientOnboarded":"{}".format(client_onboarded),
                "recommendationSetMostViewed":"{}".format(most_viewed),
                "recommendationSetNewest":"{}".format(newest),
                "recommendationSetPurchaseAlsoPurchase":"{}".format(purchase_also_purchase),
                "recommendationSetRecentlyViewed":"{}".format(recently_viewed),
                "recommendationSetTopSellingCount":"{}".format(top_selling_count),
                "recommendationSetTopSellingRevenue":"{}".format(top_selling_revenue),
                "recommendationSetViewAlsoView":"{}".format(view_also_view),
                "recommendationSetViewLaterPurchase":"{}".format(view_later_purchase)
            }
        }
        data = '[' + json.dumps(metadata) + ']'
        print(data)

        url = "https://app.pendo.io/api/v1/metadata/account/custom/value"
        response = requests.post(url, data = data, headers = headers)
        print(response)

        print("-------------------------------")
        print(" ")
