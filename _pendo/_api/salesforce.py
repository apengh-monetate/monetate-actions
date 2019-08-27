import json
import requests
from monetate.retailer.models import Retailer, Account, SalesforceAccount



# ===========================================
# Variables
# ===========================================
headers = {
    'x-pendo-integration-key': "5508000e-d2f6-492f-622f-fbe620a9a4f4",
    'content-type': "application/json",
}
debug = True
dryRun = True


accounts = Account.objects.filter(archived=False, instance="p");
for account in accounts:
    if(debug):
        print("===============================")
        print("ACCOUNT")
        print("===============================")
    print("{}, {}, {}::{}".format(account.retailer.name, account.domain, account.retailer.id, account.id))

    # ===========================================
    # See if Salesforce Account ID exists at Pendo
    # ===========================================
    id = "{}::{}".format(account.retailer.id, account.id)
    url = "https://app.pendo.io/api/v1/metadata/{}/{}/value/{}/{}".format("account", "custom", id, "salesforceaccountid");
    response = requests.get(url, headers = headers)
    if(response.status_code == 200):
        print("Success - Record Found")
        print(response.text)
    else:
        print(response.text)

        # ===========================================
        # Salesforce
        # ===========================================
        if(debug):
            print("\r\nSALESFORCE")
            print("-------------------------------")
            #print("salesforce_id: {}".format(account.salesforce_id))
        salesforce_id = account.salesforce_id
        salesforce_account_number = ''
        if(salesforce_id):
            salesforce = SalesforceAccount.objects.filter(salesforce_id=salesforce_id)
            for s in salesforce:
                salesforce_account_number = s.account_number

            if(debug):
                print("salesforce_id: {}".format(salesforce_id))
                print("salesforce_account_number: {}".format(salesforce_account_number))


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
