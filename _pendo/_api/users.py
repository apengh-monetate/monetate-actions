import requests
import json
from monetate.retailer.models import Retailer, Account, UserProfileV2



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


accounts = Account.objects.filter(archived=False, instance="p", retailer="1107");
for account in accounts:
    if(debug):
        print("===============================")
        print("ACCOUNT")
        print("===============================")
    print("{}, {}, {}::{}".format(account.retailer.name, account.domain, account.retailer.id, account.id))

users = UserProfileV2.objects.filter(retailers="480")
for user in users:
    if(debug):
        print("{}, {}".format(user, user.id))
