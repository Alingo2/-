void setup ()
{
    Serial.begin(115200);    //设置串口波特率
    pinMode(10,OUTPUT);  //设置输出口
}
void loop()
{   
    double n=0;
    double liangdu1;
    while(n<=1023)
    {
      n++;
     liangdu1=n/4;
     analogWrite(10,0);
     analogWrite(11,liangdu1);
     analogWrite(9,255-liangdu1);
     delay(2);
     Serial.println(liangdu1);
     }
         while(n>=0)
    {
      n--;
     liangdu1=n/4;
     analogWrite(10,0);
     analogWrite(11,liangdu1);
     analogWrite(9,255-liangdu1);
     delay(2);
     Serial.println(liangdu1);
     }

     
         while(n<=1023)
    {
      n++;
     liangdu1=n/4;
     analogWrite(11,0);
     analogWrite(10,liangdu1);
     analogWrite(9,255-liangdu1);
     delay(2);
     Serial.println(liangdu1);
     }
         while(n>=0)
    {
      n--;
     liangdu1=n/4;
     analogWrite(9,0);
     analogWrite(10,liangdu1);
     analogWrite(11,255-liangdu1);
     delay(2);
     Serial.println(liangdu1);
     }

     
         while(n<=1023)
    {
      n++;
     liangdu1=n/4;
     analogWrite(9,liangdu1);
     analogWrite(11,255-liangdu1);
     analogWrite(10,0);
     delay(2);
     Serial.println(liangdu1);
     }
         while(n>=0)
    {
      n--;
     liangdu1=n/4;
     analogWrite(10,255-liangdu1);
     analogWrite(11,0);
     analogWrite(9,liangdu1);
     delay(2);
     Serial.println(liangdu1);
     }

    Serial.println(n);               // 用于IDE串口观察窗
    delay(2);       //防止串口写入速度过快
}
