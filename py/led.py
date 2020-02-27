#-*-coding:UTF-8-*-
import RPi.GPIO as GPIO
import time

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