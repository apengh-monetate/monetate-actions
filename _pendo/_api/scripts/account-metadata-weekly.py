# Script to load account level data into Pendo on a weekly basis via Pendo API

import json
import requests
from monetate.retailer.models import Retailer, Account, SalesforceAccount


headers = {
    'x-pendo-integration-key': "5508000e-d2f6-492f-622f-fbe620a9a4f4",
    'content-type': "application/json",
}


# ===========================================
# Retailer
# ===========================================
retailers = Retailer.objects.filter(id=165)
for retailer in retailers:


    # ===========================================
    # Accounts (by Retailer)
    # ===========================================
    accounts = Account.objects.filter(archived=False, instance="p", retailer=retailer);
    for account in accounts:

        # ===========================================
        # Salesforce
        # ===========================================
        salesforce_id = account.salesforce_id
        salesforce_account_number = ''
        if(salesforce_id):
            salesforce = SalesforceAccount.objects.filter(salesforce_id=salesforce_id)
            for s in salesforce:
                salesforce_account_number = s.account_number

            # ===========================================
            # Data object to be sent to Pendo API
            # ===========================================
            metadata = {
                "accountId":"{}::{}".format(account.retailer.id, account.id),
                "values": {
                    "salesforceAccountId": "{}".format(salesforce_id),
                    "salesforceAccountNumber":"{}".format(salesforce_account_number)
                }
            }
            data = '['+json.dumps(metadata)+']'
            print(data)

            # # Send data to Pendo
            # url = "https://app.pendo.io/api/v1/metadata/account/custom/value"
            # response = requests.post(url, data=data, headers=headers)
