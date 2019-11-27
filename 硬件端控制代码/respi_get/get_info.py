import jsonpath
import json
info = json.loads('{"errno":0,"data":{"update_at":"2019-10-04 12:21:21","unit":"","id":"switch0","unit_symbol":"","current_value":"false"},"error":"succ"}')
data = jsonpath.jsonpath(info,'$..current_value')
print(data[0])