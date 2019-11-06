# Script to load account level data into Pendo on a weekly basis via Pendo API

import json
import requests
from monetate.retailer.models import UserProfileV2

# ===========================================
# Retailer
# ===========================================
users = UserProfileV2.objects.filter(user_id=23610)
for user in users:
    print(dir(user))
    print(user)
    print(user.user_id)



# # ===========================================
# # Data object to be sent to Pendo API
# # ===========================================
# metadata = {
#     "accountId":"{}".format(retailer_id),
#     "values": {
#         "salesforceAccountId": "{}".format(salesforce_id)
#     }
# }
# data = '['+json.dumps(metadata)+']'
#
# # Send data to Pendo
# url = "https://app.pendo.io/api/v1/metadata/account/custom/value"
# headers = {
#     'x-pendo-integration-key': "5508000e-d2f6-492f-622f-fbe620a9a4f4",
#     'content-type': "application/json",
# }
# response = requests.post(url, data=data, headers=headers)
