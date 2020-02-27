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


def rgb_tran_hsv(R, G, B, C):
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

if __name__ == '__main__':
    Img = cv2.imread('image2.jpg')  # 读入一幅图像
    kernel_2 = np.ones((2, 2), np.uint8)  # 2x2的卷积核
    kernel_3 = np.ones((3, 3), np.uint8)  # 3x3的卷积核
    kernel_4 = np.ones((4, 4), np.uint8)  # 4x4的卷积核
    if Img is not None:  # 判断图片是否读入
        HSV = cv2.cvtColor(Img, cv2.COLOR_BGR2HSV)  # 把BGR图像转换为HSV格式
        '''
        HSV模型中颜色的参数分别是：色调（H），饱和度（S），明度（V）
        下面两个值是要识别的颜色范围
        '''
        for j in range(10):
            if(C[j]!=0):
                if(j!=0):
                    Lower=np.array([data[j][0],data[j][2],data[j][4]])
                    Upper=np.array(data[j][1],data[j][3],data[j][5])
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
                            print(w,h)
                            font = cv2.FONT_HERSHEY_SIMPLEX
                            cv2.putText(Img, str(p), (x - 10, y + 10), font, 1, (255, 0, 255), 2)  # 加减10是调整字符位置
        Lower = np.array([26,43,46])  # 要识别颜色的下限
        Upper = np.array([34, 255, 255])  # 要识别的颜色的上限
        Lower1 = np.array([35,43,46])  # 要识别颜色的下限
        Upper1 = np.array([77, 255, 255])  # 要识别的颜色的上限
        # mask是把HSV图片中在颜色范围内的区域变成白色，其他区域变成黑色
        mask = cv2.inRange(HSV, Lower, Upper)
        mask1 = cv2.inRange(HSV, Lower1, Upper1)
        # 下面四行是用卷积进行滤波
        erosion = cv2.erode(mask, kernel_4, iterations=1)
        erosion = cv2.erode(erosion, kernel_4, iterations=1)
        dilation = cv2.dilate(erosion, kernel_4, iterations=1)
        dilation = cv2.dilate(dilation, kernel_4, iterations=1)
        erosion1 = cv2.erode(mask1, kernel_4, iterations=1)
        erosion1 = cv2.erode(erosion1, kernel_4, iterations=1)
        dilation1 = cv2.dilate(erosion1, kernel_4, iterations=1)
        dilation1 = cv2.dilate(dilation1, kernel_4, iterations=1)
        # target是把原图中的非目标颜色区域去掉剩下的图像
        target = cv2.bitwise_and(Img, Img, mask=dilation)
        # 将滤波后的图像变成二值图像放在binary中
        ret, binary = cv2.threshold(dilation, 127, 255, cv2.THRESH_BINARY)
        # 在binary中发现轮廓，轮廓按照面积从小到大排列
        contours, hierarchy = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        # 将滤波后的图像变成二值图像放在binary中
        ret1,binary1 = cv2.threshold(dilation1, 127, 255, cv2.THRESH_BINARY)
        # 在binary中发现轮廓，轮廓按照面积从小到大排列
        contours1,hierarchy1= cv2.findContours(binary1, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        p = 0
        for i in contours:  # 遍历所有的轮廓
            x, y, w, h = cv2.boundingRect(i)  # 将轮廓分解为识别对象的左上角坐标和宽、高
            # 在图像上画上矩形（图片、左上角坐标、右下角坐标、颜色、线条宽度）
            if(w>30and h>30):
                cv2.rectangle(Img, (x, y), (x + w, y + h), (0, 255,255), 3)
                # 给识别对象写上标号
                print(w,h)
                font = cv2.FONT_HERSHEY_SIMPLEX
                cv2.putText(Img, str(p), (x - 10, y + 10), font, 1, (255, 0, 255), 2)  # 加减10是调整字符位置
                p += 1
        print('黄色方块的数量是', p, '个')  # 终端输出目标数量
        for i in contours1:  # 遍历所有的轮廓
            x, y, w, h = cv2.boundingRect(i)  # 将轮廓分解为识别对象的左上角坐标和宽、高
            # 在图像上画上矩形（图片、左上角坐标、右下角坐标、颜色、线条宽度）

            if(w>30and h>30):
                cv2.rectangle(Img, (x, y), (x + w, y + h), (0, 255,), 3)
                # 给识别对象写上标号
                font = cv2.FONT_HERSHEY_SIMPLEX
                cv2.putText(Img, str(p), (x - 10, y + 10), font, 1, (0, 255, 0), 2)  # 加减10是调整字符位置
        cv2.imshow('target', target)
        cv2.imshow('Mask', mask)
        cv2.imshow("prod", dilation)
        cv2.imshow('Img', Img)
        cv2.imwrite('Img.png', Img)  # 将画上矩形的图形保存到当前目录
    while True:
        Key = chr(cv2.waitKey(15) & 255)
        if Key == 'q':
            cv2.destroyAllWindows()
            break
