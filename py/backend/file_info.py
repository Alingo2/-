
import os, time
result = []
files = os.listdir('./static/uploads')
for filename in files:
    file_attr = os.stat('./static/uploads/' + filename)
    result.append({'name':filename,'size': file_attr.st_size/1000,'time':time.strftime("%x(%a) %X", time.localtime(file_attr.st_mtime))})  #%y%m%d(%a)-%H:%M
print(result)