import json
import requests

from monetate.retailer.models import Retailer, Account, UserProfileV2



# ===========================================
# Variables
# ===========================================
headers = {
    'x-pendo-integration-key': "5508000e-d2f6-492f-622f-fbe620a9a4f4",
    'content-type': "application/json",
}
debug = True
dryRun = True

userIds = [24068,24074,24086];

for i in range(len(userIds)):
    userId = userIds[i]
    users = UserProfileV2.objects.filter(user_id=userId)
    for user in users:
        print("{}, {}".format(user.user_id, user))

        currentUser = {
            "values":{
                "email":"{}".format(user)
            },
            "visitorId":"{}".format(user.user_id)
        }
        data = json.dumps(currentUser)
        data = '[' + data + ']'
        print(data)

        url = "https://app.pendo.io/api/v1/metadata/visitor/agent/value"
        response = requests.post(url, data = data, headers = headers)
        if(response.status_code == 200):
            print(response.text)
        else:
            print(response.text)




accounts = Account.objects.filter(archived=False, instance="p", retailer="564");
for account in accounts:
    if(debug):
        print("===============================")
        print("ACCOUNT")
        print("===============================")
    print("{}, {}, {}::{}".format(account.retailer.name, account.domain, account.retailer.id, account.id))

    users = UserProfileV2.objects.filter(retailers=account.retailer.id)
    usersList = list()
    for user in users:
        print("{}, {}".format(user.user_id, user))

        currentUser = {
            "values":{
                "email":"{}".format(user)
            },
            "visitorId":"{}".format(user.user_id)
        }
        data = json.dumps(currentUser)
        data = '[' + data + ']'

        usersList.append(data)
    print(usersList)

    url = "https://app.pendo.io/api/v1/metadata/visitor/agent/value"
    response = requests.post(url, data = data, headers = headers)
    if(response.status_code == 200):
        print(response.text)
    else:
        print(response.text)
