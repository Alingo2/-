#!/usr/bin/python3
# -*- coding: UTF-8 -*-
from flask import Flask,jsonify,request,send_from_directory
from flask import render_template
import os, time

UPLOAD_FOLDER = './static/uploads'
app = Flask(__name__, static_url_path='')
app.config['MAX_CONTENT_LENGTH'] = 64 * 1024 * 1024 #上传文件限制为最大 64 MB
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

#f = open('message.json','')

def dirData():
    result = []
    files = os.listdir('./static/uploads')
    for filename in files:
        file_attr = os.stat(app.config['UPLOAD_FOLDER'] + '/' + filename)
        result.append({'name':filename,'size': file_attr.st_size/1000,'time':time.strftime("%x(%a) %X", time.localtime(file_attr.st_mtime))})  #%y%m%d(%a)-%H:%M
    return result

@app.route('/')
def hello_world():
    return render_template('fileBoard.html', files=dirData())
    # return send_from_directory('./static','fileBoard.html')

@app.route('/upload', methods = ['GET','POST'])
def upload():
    if request.method == 'POST':
        print(request.form)
        file = request.files['file']
        if file:
            filename = file.filename
            file.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
            return '上传成功！文件名为：' + filename  #jsonify({'status':'OK','filename':'filename'})
        return '文件不存在'
    else:
        return send_from_directory('./static','upload.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)