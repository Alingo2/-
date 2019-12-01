# -*- coding:utf-8 -*-
import cv2
import numpy as np
import time
my_color_Hmin = [156, 11, 26, 35, 78, 100, 125]
my_color_Hmax = [10, 25, 34, 77, 99, 124, 155]

data=[[my_color_Hmin[0], my_color_Hmax[0], 43, 255, 46, 255, 'Red'],
[my_color_Hmin[1], my_color_Hmax[1], 43, 255, 46, 255, 'Ori'],
[my_color_Hmin[2], my_color_Hmax[2], 43, 255, 46, 255, 'Yel'],
[my_color_Hmin[3], my_color_Hmax[3], 43, 255, 46, 255, 'Gre'],
[my_color_Hmin[4], my_color_Hmax[4], 43, 255, 46, 255, 'Cya'],
[my_color_Hmin[5], my_color_Hmax[5], 43, 255, 46, 255, 'Blu'],
[my_color_Hmin[6], my_color_Hmax[6], 43, 255, 46, 255, 'Pur'],
[0, 180, 0, 255, 0, 45, 'Bla'],
[0, 180, 0, 43, 46, 220, 'Gra'],
[0, 180, 0, 30, 221, 255, 'Whi']

]
def color_judge(H, S, V):
    result = []
    if (V >= 46 and S >= 43):
        if (H >= my_color_Hmin[0] or H <= my_color_Hmax[0]):
            result = [my_color_Hmin[0], my_color_Hmax[0], 43, 255, 46, 255, 'Red']
        elif (H >= my_color_Hmin[1] and H <= my_color_Hmax[1]):
            result = [my_color_Hmin[1], my_color_Hmax[1], 43, 255, 46, 255, 'Ori']
        elif (H >= my_color_Hmin[2] and H <= my_color_Hmax[2]):
            result = [my_color_Hmin[2], my_color_Hmax[2], 43, 255, 46, 255, 'Yel']
        elif (H >= my_color_Hmin[3] and H <= my_color_Hmax[3]):
            result = [my_color_Hmin[3], my_color_Hmax[3], 43, 255, 46, 255, 'Gre']
        elif (H >= my_color_Hmin[4] and H <= my_color_Hmax[4]):
            result = [my_color_Hmin[4], my_color_Hmax[4], 43, 255, 46, 255, 'Cya']
        elif (H >= my_color_Hmin[5] and H <= my_color_Hmax[5]):
            result = [my_color_Hmin[5], my_color_Hmax[5], 43, 255, 46, 255, 'Blu']
        elif (H >= my_color_Hmin[6] and H <= my_color_Hmax[6]):
            result = [my_color_Hmin[6], my_color_Hmax[6], 43, 255, 46, 255, 'Pur']
    elif (S < 43 and V >= 46 and V <= 220):
        result = [0, 180, 0, 43, 46, 220, 'Gra']
    elif (S < 30 and V >= 221 and V <= 25):
        result = [0, 180, 0, 30, 221, 255, 'Whi']
    elif (V < 46):
        result[0, 180, 0, 255, 0, 45, 'Bla']
    print(result)


def rgb_tran_hsv(R, G, B):
    R_ = R / 255
    G_ = G / 255
    B_ = B / 255
    H = 0
    S = 0
    Cmax = max(R_, G_, B_)
    Cmin = min(R_, G_, B_)
    difference = Cmax - Cmin
    if (difference == 0):
        H = 0;
    elif (Cmax == R_):
        H = int(30 * (G_ - B_) / difference)
    elif (Cmax == G_):
        H = int(30 * ((B_ - R_) / difference + 2))
    elif (Cmax == B_):
        H = int(30 * ((R_ - G_) / difference + 4))
    if (Cmax == 0):
        S = 0
    else:
        S = int(255 * difference / Cmax)
    V = int(Cmax * 255)
    a = [H, S, V]
    print(a)
    return a


def pic_find(C,img):
    if __name__ == '__main__':
        Img = img  # 读入一幅图像
        #Img = cv2.imread('image2.jpg')   #读入一幅图像
        kernel_2 = np.ones((2, 2), np.uint8)  # 2x2的卷积核
        kernel_3 = np.ones((3, 3), np.uint8)  # 3x3的卷积核
        kernel_4 = np.ones((4, 4), np.uint8)  # 4x4的卷积核
        if Img is not None:  # 判断图片是否读入
            HSV = cv2.cvtColor(Img, cv2.COLOR_BGR2HSV)  # 把BGR图像转换为HSV格式
            '''
            HSV模型中颜色的参数分别是：色调（H），饱和度（S），明度（V）
            下面两个值是要识别的颜色范围
            '''
            k=0
            for j in C:
                if(j!=0):
                    print(k)
                    if(k!=0):
                        Lower=np.array([data[k][0],data[k][2],data[k][4]])
                        Upper=np.array([data[k][1],data[k][3],data[k][5]])
                        mask = cv2.inRange(HSV, Lower, Upper)
                        erosion = cv2.erode(mask, kernel_4, iterations=1)
                        erosion = cv2.erode(erosion, kernel_4, iterations=1)
                        dilation = cv2.dilate(erosion, kernel_4, iterations=1)
                        dilation = cv2.dilate(dilation, kernel_4, iterations=1)
                        target = cv2.bitwise_and(Img, Img, mask=dilation)
                        ret, binary = cv2.threshold(dilation, 127, 255, cv2.THRESH_BINARY)
                        contours, hierarchy = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
                        for i in contours:  # 遍历所有的轮廓
                            x, y, w, h = cv2.boundingRect(i)  # 将轮廓分解为识别对象的左上角坐标和宽、高
                            # 在图像上画上矩形（图片、左上角坐标、右下角坐标、颜色、线条宽度）
                            if(w>30and h>30):
                                cv2.rectangle(Img, (x, y), (x + w, y + h), (0, 255,255), 3)
                                # 给识别对象写上标号
                                font = cv2.FONT_HERSHEY_SIMPLEX
                                cv2.putText(Img, str('1'), (x - 10, y + 10), font, 1, (255, 0, 255), 2)  # 加减10是调整字符位置
                k+=1
            #cv2.imshow('Img', Img)
           # cv2.imwrite('Img.png', Img)  # 将画上矩形的图形保存到当前目录
    #while True:
        #Key = chr(cv2.waitKey(15) & 255)
        #if Key == 'q':
            #cv2.destroyAllWindows()
            #break
    return Img

cap = cv2.VideoCapture(0)
 
# set blue thresh 设置HSV中蓝色、天蓝色范围
lower_blue = np.array([78,43,46])
upper_blue = np.array([110,255,255])
 
while(1):
    # get a frame and show 获取视频帧并转成HSV格式, 利用cvtColor()将BGR格式转成HSV格式，参数为cv2.COLOR_BGR2HSV。
    ret, frame = cap.read()
    cv2.imshow('Capture', frame)
    res = pic_find([0, 1, 1, 1, 1, 1, 1, 1, 1, 1], frame)
    print(frame)

    # change to hsv model
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
 
    # get mask 利用inRange()函数和HSV模型中蓝色范围的上下界获取mask，mask中原视频中的蓝色部分会被弄成白色，其他部分黑色。
    mask = cv2.inRange(hsv, lower_blue, upper_blue)
    cv2.imshow('Mask', mask)
 
    # detect blue 将mask于原视频帧进行按位与操作，则会把mask中的白色用真实的图像替换：

    #res = cv2.bitwise_and(frame, frame, mask=mask)
    cv2.imshow('Result', res)
 
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
 
cap.release()
cv2.destroyAllWindows()