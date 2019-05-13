import requests
import json
from monetate.retailer.models import Retailer, Account, SalesforceAccount

debug = True
dryRun = False

retailers = Retailer.objects.filter(id=249)
for retailer in retailers:
    print("{}, {}".format(retailer, retailer.id))







accounts = Account.objects.filter(archived=False, instance="p");
for account in accounts:
    if(debug):
        print(" ")
        print(" ")
        print("-------------------------------")
        print("ACCOUNT")
        print("-------------------------------")
    print("{}, {}, {}::{}".format(account.retailer.name, account.domain, account.retailer.id, account.id))


    # ===========================================
    # Salesforce
    # ===========================================
    if(debug):
        print(" ")
        print("-------------------------------")
        print("SALESFORCE")
        print("-------------------------------")
        #print("salesforce_id: {}".format(account.salesforce_id))
    salesforce_id = account.salesforce_id
    salesforce_accountNumber = ''
    salesforce_name = ''
    if(salesforce_id):
        salesforce = SalesforceAccount.objects.filter(salesforce_id=salesforce_id)
        for s in salesforce:
            salesforce_name = s.name
            salesforce_accountNumber = s.account_number

    else:
        salesforce_id = ''

    print("salesforce_id: {}".format(salesforce_id))
    print("salesforce_name: {}".format(salesforce_name))
    print("salesforce_accountNumber: {}".format(salesforce_accountNumber))






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
            "salesforceAccountId": "{}".format(salesforce_id),
            "salesforceAccountNumber":"{}".format(salesforce_accountNumber)
        }
    }
    data = json.dumps(metadata)
    data = '[' + data + ']'
    if(debug):
        print(data)

    # Send data to Pendo
    url = "https://app.pendo.io/api/v1/metadata/account/custom/value"
    #data = "[{\"accountId\":\"{0}\",\"values\":{\"firstname\":\"Quam\",\"lastname\":\"Quis\"}},{\"visitorId\":\"45\",\"values\":{\"firstname\":\"Vel\",\"lastname\":\"Quam\"}},{\"visitorId\":\"63\",\"values\":{\"firstname\":\"Eros\",\"lastname\":\"Nam\"}}]"
    if not dryRun:
        headers = {
            'x-pendo-integration-key': "5508000e-d2f6-492f-622f-fbe620a9a4f4",
            'content-type': "application/json",
        }
        response = requests.post(url, data = data, headers = headers)
        print(response)

        print("-------------------------------")
        print(" ")
