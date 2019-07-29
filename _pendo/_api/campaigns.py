import requests
import json
from monetate.retailer.models import Retailer, Account
from monetate.campaign.models import CampaignGroup



# ===========================================
# Variables
# ===========================================
pendoAPI = "5508000e-d2f6-492f-622f-fbe620a9a4f4";
headers = {
    'x-pendo-integration-key': pendoAPI,
    'content-type': "application/json",
}
debug = True
dryRun = True


accounts = Account.objects.filter(archived=False, instance="p", retailer="249");
for account in accounts:
    if(debug):
        print("-------------------------------")
        print("ACCOUNT")
        print("-------------------------------")
    print("{}, {}, {}::{}".format(account.retailer.name, account.domain, account.retailer.id, account.id))



    # ===========================================
    # Campaigns (Experiences)
    # ===========================================
    if(debug):
        print(" ")
        print("-------------------------------")
        print("CAMPAIGNS/EXPERIENCES")
        print("-------------------------------")
    predictive_count = 0
    split_count = 0
    experience_count = 0
    predictive_exp_count = 0

    cgs = CampaignGroup.objects.filter(account=account, active=True, archived=False)
    for cg in cgs:
        cgt = cg.campaign_type
        status = cg.get_status()
        if(status == "active"):
            if cgt == "predictive":
                predictive_count += 1;
            elif cgt == "experience":
                experience_count += 1;
            elif cgt == "split":
                split_count += 1;
            elif cgt == "predictive_exp":
                predictive_exp_count += 1;

    if(debug):
        print("predictive: {}".format(predictive_count))
        print("experience: {}".format(experience_count))
        print("split: {}".format(split_count))
        print("predictive_exp: {}".format(predictive_exp_count))


    # ===========================================
    # Recommendation Sets
    # ===========================================
    if(debug):
        print(" ")
        print("-------------------------------")
        print("RECOMMENDATIONS")
        print("-------------------------------")
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

    if(debug):
        print("client_onboarded: {}".format(client_onboarded))
        print("most_viewed: {}".format(most_viewed))
        print("newest: {}".format(newest))
        print("purchase_also_purchase: {}".format(purchase_also_purchase))
        print("recently_viewed: {}".format(recently_viewed))
        print("top_selling_count: {}".format(top_selling_count))
        print("top_selling_revenue: {}".format(top_selling_revenue))
        print("view_also_view: {}".format(view_also_view))
        print("view_later_purchase: {}".format(view_later_purchase))



    # ===========================================
    # Data object to be sent to Pendo API
    # ===========================================
    if(debug):
        print(" ")
        print("-------------------------------")
        print("PENDO DATA")
        print("-------------------------------")
    metadata = {
        "accountId":"{}::{}".format(account.retailer.id, account.id),
        "values": {
            "campaignsPredictive":"{}".format(predictive_count),
            "campaignsSplit":"{}".format(split_count),
            "campaignsExperience":"{}".format(experience_count),
            "campaignsPredictiveExp":"{}".format(predictive_exp_count),
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
    data = json.dumps(metadata)
    data = '[' + data + ']'
    if(debug):
        print(data)

    # Send data to Pendo
    url = "https://app.pendo.io/api/v1/metadata/account/custom/value"
    if not dryRun:
        response = requests.post(url, data = data, headers = headers)
        print(response)
    print("------------------------------- End of Account -------------------------------\r\n\r\n")
