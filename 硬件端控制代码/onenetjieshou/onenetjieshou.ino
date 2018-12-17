
#include <ESP8266.h>

#ifdef ESP32
#error "This code is not recommended to run on the ESP32 platform! Please check your Tools->Board setting."
#endif


#if defined(__AVR_ATmega32U4__) || defined(__AVR_ATmega1284P__) || defined (__AVR_ATmega644P__) || defined(__AVR_ATmega128RFA1__)
#define EspSerial Serial1
#define UARTSPEED  9600
#endif


#if defined (__AVR_ATmega168__) || defined (__AVR_ATmega328__) || defined (__AVR_ATmega328P__)
#include <SoftwareSerial.h>
SoftwareSerial mySerial(2, 3); /* RX:D3, TX:D2 */

#define EspSerial mySerial
#define UARTSPEED  9600
#endif

#define SSID        F("fyl")
#define PASSWORD    F("fylfylfyl")
#define HOST_NAME   F("api.heclouds.com")
#define HOST_PORT   (80)

static const byte  GETDATA[]  PROGMEM = {
  "GET https://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch0,switch1,switch2,switch3,switch4,switch5,switch6,&limit=1 HTTP/1.1\r\nHost:api.heclouds.com\r\napi-key:D2QKW7MF1POUXWyPxk5BbRX=F=M=\r\nConnection: close\r\n\r\n"
};
static const byte  POSTDATA[]  PROGMEM = {
  "POST /devices/504877625/datapoints?type=3 HTTP/1.1\r\nHost:api.heclouds.com\r\napi-key:D2QKW7MF1POUXWyPxk5BbRX=F=M=\r\nConnection: close\r\nContent-Length: 16\r\n\r\n{\"switch2\":\"0\"}\r\n\r\n"
};
ESP8266 wifi(&EspSerial);
  int lasttime=5;
  int weishi=0;
  int tiaojian=0;
void setup(void)
{
  pinMode(12,OUTPUT);
  pinMode(13,OUTPUT);
  pinMode(11,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(9,OUTPUT);
  pinMode(8,OUTPUT);
  pinMode(7,OUTPUT);
  Serial.begin(9600);
  while (!Serial); // wait for Leonardo enumeration, others continue immediately
  Serial.print(F("setup begin\r\n"));
  delay(100);

  WifiInit(EspSerial, UARTSPEED);

  Serial.print(F("FW Version:"));
  Serial.println(wifi.getVersion().c_str());

  if (wifi.setOprToStationSoftAP()) {
    Serial.print(F("to station + softap ok\r\n"));
  } else {
    Serial.print(F("to station + softap err\r\n"));
  }

  if (wifi.joinAP(SSID, PASSWORD)) {
    Serial.print(F("Join AP success\r\n"));

    Serial.print(F("IP:"));
    Serial.println( wifi.getLocalIP().c_str());
  } else {
    Serial.print(F("Join AP failure\r\n"));
  }

  if (wifi.disableMUX()) {
    Serial.print(F("single ok\r\n"));
  } else {
    Serial.print(F("single err\r\n"));
  }

  Serial.print(F("setup end\r\n"));
}

void loop(void)
{
  if (wifi.createTCP(HOST_NAME, HOST_PORT)) {
    Serial.print(F("create tcp ok\r\n"));
  } else {
    Serial.print(F("create tcp err\r\n"));
  }

  //char *hello = "GET /testwifi/index.html HTTP/1.0\r\nHost: www.adafruit.com\r\nConnection: close\r\n\r\n";
  //wifi.send((const uint8_t*)hello, strlen(hello));  //直接发送

  wifi.sendFromFlash(GETDATA, sizeof(GETDATA)); //从Flash读取发送内容，节约内存

  uint8_t buffer[1024] = {0};
  uint32_t len = wifi.recv(buffer, sizeof(buffer), 20000);
  if (len > 0) {
    Serial.print(F("Received:["));
    for (uint32_t i = 0; i < len; i++) {
      Serial.print((char)buffer[i]);
    }
    Serial.print(F("]\r\n"));

     for (uint32_t i = 0; i < len; i++) 
     {
      if((char)buffer[i]=='v'&&(char)buffer[i+1]=='a'&&(char)buffer[i+2]=='l'&&(char)buffer[i+3]=='u'&&(char)buffer[i+4]=='e')
      {
         if((char)buffer[i+8]=='a')
        {
          digitalWrite(13,LOW);
          }
         if((char)buffer[i+8]=='A')
        {
          digitalWrite(13,HIGH);
          }
         if((char)buffer[i+8]=='b')
        {
          digitalWrite(12,LOW);
          }
        if((char)buffer[i+8]=='B')
        {
          digitalWrite(12,HIGH);
          }
         if(((char)buffer[i+8]!=lasttime&&((char)buffer[i+8]=='C')))
        {
          analogWrite(10,150);
          delay(200);
          digitalWrite(10,LOW);
          lasttime=(char)buffer[i+8];
          }
         if(((char)buffer[i+8]!=lasttime&&((char)buffer[i+8]=='c')))
        {
          analogWrite(10,150);
          delay(3550);
          digitalWrite(10,LOW);
          lasttime=(char)buffer[i+8];
          }
         if((char)buffer[i+8]=='d')
        {
          digitalWrite(9,LOW);
          }
         if((char)buffer[i+8]=='D')
        {
          digitalWrite(9,HIGH);
          }
         if((char)buffer[i+8]=='e')
        {
          digitalWrite(8,LOW);
          }
         if((char)buffer[i+8]=='E')
        {
          digitalWrite(8,HIGH);
          }
         if((char)buffer[i+8]=='f')
        {
          digitalWrite(7,LOW);
          }
         if((char)buffer[i+8]=='F')
        {
          digitalWrite(7,HIGH);
          }
         
         if((char)buffer[i+8]=='1')
        {
          analogWrite(11,130);
          delay(4700);
          digitalWrite(11,LOW);
          tiaojian=1;
          }
          if((char)buffer[i+8]=='2')
        {
          analogWrite(11,130);
          delay(8500);
          digitalWrite(11,LOW);
          tiaojian=1;
          }
          if((char)buffer[i+8]=='3')
        {
          
          analogWrite(11,130);
          delay(12750);
          digitalWrite(11,LOW);
          tiaojian=1;
          }
         if((char)buffer[i+8]=='4')
        {
          analogWrite(11,130);
          delay(17000);
          digitalWrite(11,LOW);
          tiaojian=1;
          }
         if((char)buffer[i+8]=='5')
        {
          analogWrite(11,130);
          delay(21250);
          digitalWrite(11,LOW);
          tiaojian=1;
          }
          if((char)buffer[i+8]=='6')
        {
          analogWrite(11,130);
          delay(25500);
          digitalWrite(11,LOW);
          tiaojian=1;
          }
          if((char)buffer[i+8]=='7')
        {
          analogWrite(11,130);
          delay(29750);
          digitalWrite(11,LOW);
          tiaojian=1;
          }
          if((char)buffer[i+8]=='8')
        {
          analogWrite(11,130);
          delay(34000);
          digitalWrite(11,LOW);
          tiaojian=1;
          }
          if((char)buffer[i+8]=='9')
        {
          analogWrite(11,130);
          delay(38250);
          digitalWrite(11,LOW);
          tiaojian=1;
          }
       }
    }
  }
  if (wifi.releaseTCP()) {
    Serial.print(F("release tcp ok\r\n"));
  } else {
    Serial.print(F("release tcp err\r\n"));
  }
while(tiaojian==1){
  if (wifi.releaseTCP()) {
    Serial.print(F("release tcp ok\r\n"));
  } else {
    Serial.print(F("release tcp err\r\n"));
  }
  if (wifi.createTCP(HOST_NAME, HOST_PORT)) {
    Serial.print(F("create tcp ok\r\n"));
  } else {
    Serial.print(F("create tcp err\r\n"));
  }
  wifi.sendFromFlash(POSTDATA, sizeof(POSTDATA));
  if (wifi.releaseTCP()) {
    Serial.print(F("release tcp ok\r\n"));
  } else {
    Serial.print(F("release tcp err\r\n"));
  }
  tiaojian=0;
}
  //while (1);
  delay(100);
}
