import requests
import json
from monetate.retailer.models import Retailer, Account, SalesforceAccount


# ===========================================
# Retailer
# ===========================================
retailers = Retailer.objects.filter(id=249)
for retailer in retailers:


    # ===========================================
    # Accounts (by Retailer)
    # ===========================================
    accounts = Account.objects.filter(archived=False, retailer=retailer);
    for account in accounts:
        salesforce_id = account.salesforce_id

        # ===========================================
        # Salesforce
        # ===========================================
        if(salesforce_id):
            salesforce = SalesforceAccount.objects.filter(salesforce_id=salesforce_id)
            for s in salesforce:
                salesforce_name = s.name
                salesforce_accountNumber = s.account_number


        # ===========================================
        # Account level data object to be sent to Pendo API
        # ===========================================
        print("{}, {}, {}::{}, {}".format(account.retailer.name, account.domain, account.retailer.id, account.id, salesforce_accountNumber))
        metadata = {
            "accountId":"{}::{}".format(account.retailer.id, account.id),
            "values": {
                #"salesforceAccountId": "{}".format(salesforce_id),
                "salesforceAccountNumber":"{}".format(salesforce_accountNumber)
            }
        }
        data = json.dumps(metadata)
        data = '[' + data + ']'
        print(data)


        # ===========================================
        # Send data to Pendo
        # ===========================================
        url = "https://app.pendo.io/api/v1/metadata/account/custom/value"
        #data = "[{\"accountId\":\"{0}\",\"values\":{\"firstname\":\"Quam\",\"lastname\":\"Quis\"}},{\"visitorId\":\"45\",\"values\":{\"firstname\":\"Vel\",\"lastname\":\"Quam\"}},{\"visitorId\":\"63\",\"values\":{\"firstname\":\"Eros\",\"lastname\":\"Nam\"}}]"
        headers = {
            'x-pendo-integration-key': "5508000e-d2f6-492f-622f-fbe620a9a4f4",
            'content-type': "application/json",
        }
        response = requests.post(url, data = data, headers = headers)
        print(response)

        print("-------------------------------")
        print(" ")


# ===========================================
# Parent account level data object to be sent to Pendo API
# ===========================================
print("{}, {}".format(retailer, retailer.id))
metadata = {
    "accountId":"{}".format(account.retailer.id, account.id),
    "values": {
        "salesforceAccountId": "{}".format(salesforce_id)
    }
}
data = json.dumps(metadata)
data = '[' + data + ']'
print(data)

# ===========================================
# Send data to Pendo
# ===========================================
url = "https://app.pendo.io/api/v1/metadata/account/custom/value"
headers = {
    'x-pendo-integration-key': "5508000e-d2f6-492f-622f-fbe620a9a4f4",
    'content-type': "application/json",
}
response = requests.post(url, data = data, headers = headers)
print(response)

print("-------------------------------")
print(" ")
