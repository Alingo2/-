#-*-coding:UTF-8-*-
import RPi.GPIO as GPIO
import time
import requests
import json
import jsonpath
import requests
import sys
def get():
    url = "http://api.heclouds.com/devices/504877625/datastreams/switch4"
    API_KEY = "s1XeGJPJSFgZslYpXCnFPG81V1w="
    headers = {'api-key':API_KEY}

    r = requests.get(url, headers=headers)
    info = json.loads(r.text)
    data = jsonpath.jsonpath(info,'$..current_value')
    print(data[0])


def led():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(18,GPIO.OUT)
    while True:
        GPIO.output(18,GPIO.HIGH)
        print("Pin 18 is HIGH\n")
        time.sleep(5)
        print('1+1')
        GPIO.output(18,GPIO.LOW)
        print("Pin 18 is LOW\n")
        time.sleep(5)


def send():
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


def temprature():
    #/home/pi/temperature.py
    #打开温度传感器文件
    tfile = open("/sys/bus/w1/devices/28-00000494cb79/w1_slave")
    #读取文件所有内容
    text = tfile.read()
    #关闭文件
    tfile.close()
    #用换行符分割字符串成数组，并取第二行
    secondline = text.split("\n")[1]
    #用空格分割字符串成数组，并取最后一个，即t=23000
    temperaturedata = secondline.split(" ")[9]
    #取t=后面的数值，并转换为浮点型
    temperature = float(temperaturedata[2:])
    #转换单位为摄氏度
    temperature = temperature / 1000
    #打印值
    print (temperature)
