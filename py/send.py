import requests
import json
import sys
 
 
 
 
DEVICEID = '505097327'
 
SENSORID = 'humidity'
 
VALUE = 1
 
APIKEY = '7kpQoeShWyd250SXd0MpHDY2Sz8='
 
url = 'http://api.heclouds.com/devices/%s/datapoints'%(DEVICEID)

dict = {"datastreams":[{"id":"TEMP","datapoints":[{"value":50}]}]}
dict['datastreams'][0]['id'] = SENSORID
dict['datastreams'][0]['datapoints'][0]['value'] = VALUE
s = json.dumps(dict)
headers = {
                "api-key":APIKEY,
                "Connection":"close"
 
           }
r = requests.post(url,headers=headers,data = s)