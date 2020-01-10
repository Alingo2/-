import cv2
import numpy as np
 
cap = cv2.VideoCapture(0)
 
# set blue thresh 设置HSV中蓝色、天蓝色范围
lower_blue = np.array([78,43,46])
upper_blue = np.array([110,255,255])
 
while(1):
    # get a frame and show 获取视频帧并转成HSV格式, 利用cvtColor()将BGR格式转成HSV格式，参数为cv2.COLOR_BGR2HSV。
    ret, frame = cap.read()
    cv2.imshow('Capture', frame)
    # change to hsv model
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
 
    # get mask 利用inRange()函数和HSV模型中蓝色范围的上下界获取mask，mask中原视频中的蓝色部分会被弄成白色，其他部分黑色。
    mask = cv2.inRange(hsv, lower_blue, upper_blue)
    cv2.imshow('Mask', mask)
 
    # detect blue 将mask于原视频帧进行按位与操作，则会把mask中的白色用真实的图像替换：
    res = cv2.bitwise_and(frame, frame, mask=mask)
    cv2.imshow('Result', res)
 
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
 
cap.release()
cv2.destroyAllWindows()