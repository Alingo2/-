# -*- coding: utf-8 -*-
import matplotlib.pyplot as plt
from matplotlib.pyplot import plot, savefig
import numpy as np
import math
import re

plt.rcParams['font.sans-serif'] = ['SimHei']  # 显示中文字体
plt.rcParams['axes.unicode_minus'] = False  # 显示负号

# 打开文件
f = open("README.md", encoding='utf-8')
print("文件名为: ", f.name)

match_obj = re.match("^\d.*\d$", "4hello4")
group = {'fyl':0,'zjh':0,'fxa':0,'lhs':0,'tyh':0}
team_working_time = 0

for line in f.readlines():  # 依次读取每行
    line = line.strip()  # 去掉每行头尾空白
    obj = line.split()
    if (obj):
        temp_time = 0
        worker = re.match(".*hour.?",obj[1])
        if  worker:
            temp_name = obj[2]
        for i in obj:
            match_obj = re.match("[0-9/]{8,10}", i)
            if match_obj:
                # 获取匹配结果
                print(match_obj.group())
            # if(i == 'lhs' or i=='fxa' or i == 'fyl' or i == 'zjh' or i=='tyh' ):
            #     temp_num += 1
            match_obj = re.match("[0-9]\.?[0-9]?hours?", i)
            if match_obj:                   #还得乘上
                # 人数 算总时间
                # 获取匹配结果
                temp_time = match_obj.group()
                match_obj = re.match("[0-9]\.?[0-9]?",temp_time)
                temp_time = float(match_obj.group())
                print(temp_name,temp_time)
                if  temp_name != '全体成员':
                    group[temp_name] = round(group[temp_name]+ temp_time,2)
                else:
                    for i in group:
                        group[i] += temp_time
                print(group)
for i in group:
    team_working_time += group[i]
print(team_working_time)
# 关闭文件
f.close()
