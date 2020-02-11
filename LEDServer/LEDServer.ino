#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "kale";
const char* password = "4087339152";
int i;
void setup () {
 
Serial.begin(115200,SERIAL_8N1,SERIAL_TX_ONLY);


WiFi.begin(ssid, password);
int i=0;
while (WiFi.status() != WL_CONNECTED) {
 
delay(1000);
Serial.print("Connecting..");
 
}
 
}
 
void loop() {

if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
 
HTTPClient http;  //Declare an object of class HTTPClient
 
http.begin("http://fishtankled.herokuapp.com");  //Specify request destination
int httpCode = http.GET();                                                                  //Send the request
 
if (httpCode > 0) { //Check the returning code
 
String payload = http.getString();   //Get the request response payload
int str_len = payload.length() + 1; 

// Prepare the character array (the buffer) 
char json[str_len];


// Copy it over 
 StaticJsonDocument<200> doc;
payload.toCharArray(json, str_len);
Serial.println(i++);
Serial.println(payload);                     //Print the response payload

  DeserializationError error = deserializeJson(doc, json);

  // Test if parsing succeeds.
  if (error) {
    Serial.print(F("deserializeJson() failed: "));
    Serial.println(error.c_str());
    return;
  }
Serial.println(WiFi.localIP()); 
  Serial.println(doc["r"].as<int>());
  Serial.println(doc["g"].as<int>());
  Serial.println(doc["b"].as<int>());
 analogWrite(0, doc["r"].as<int>());
 analogWrite(2, doc["g"].as<int>());
 analogWrite(3, doc["b"].as<int>());

  
}
 
http.end();   //Close connection
 
}
 
 
}
