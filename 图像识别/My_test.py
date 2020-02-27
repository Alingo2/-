my_color_Hmin = [0, 11, 26, 35, 78, 100, 125]
my_color_Hmax = [10, 25, 34, 77, 99, 124, 155]


def color_judge(H, S, V):
    result = []
    if (V >= 46 and S >= 43):
        if (H >= my_color_Hmin[0] and H <= my_color_Hmax[0]):
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

print(rgb_tran_hsv(150, 200, 250)[0], rgb_tran_hsv(150, 200, 250)[1], rgb_tran_hsv(150, 200, 250)[2])
color_judge(rgb_tran_hsv(150, 200, 250)[0], rgb_tran_hsv(150, 200, 250)[1], rgb_tran_hsv(150, 200, 250)[2])
