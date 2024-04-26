#if defined(ESP32)
#include <WiFi.h>
#include <FirebaseESP32.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#endif

//Provide the token generation process info.
#include <addons/TokenHelper.h>

//Provide the RTDB payload printing info and other helper functions.
#include <addons/RTDBHelper.h>

/* 1. Define the WiFi credentials */
/* 1. Define the WiFi credentials */
#define WIFI_SSID "8bitAquaa"
#define WIFI_PASSWORD "Aqua9200"

//For the following credentials, see examples/Authentications/SignInAsUser/EmailPassword/EmailPassword.ino

/* 2. Define the API Key */
#define API_KEY "UsjmuW3b5GzMC67EtAMqPvhcyIyVElZgzsLXZQlz"

/* 3. Define the RTDB URL */
#define DATABASE_URL "https://accidentpreventionsystem-509bc-default-rtdb.firebaseio.com/" //<databaseName>.firebaseio.com or <databaseName>.<region>.firebasedatabase.app

const int trigPin = 23;
const int echoPin = 22;

//define sound speed in cm/uS
#define SOUND_SPEED 0.034
#define CM_TO_INCH 0.393701

long duration;
float distanceCm;
float distanceInch;

//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;


String main="";

int a, b, x, y;


void setup()
{

  Serial.begin(115200);
delay(2000);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  config.database_url = DATABASE_URL;



  //////////////////////////////////////////////////////////////////////////////////////////////
  //Please make sure the device free Heap is not lower than 80 k for ESP32 and 10 k for ESP8266,
  //otherwise the SSL connection will fail.
  //////////////////////////////////////////////////////////////////////////////////////////////

  Firebase.begin(DATABASE_URL, API_KEY);

  //Comment or pass false value when WiFi reconnection will control by your code or third party library
 // Firebase.reconnectWiFi(true);

  Firebase.setDoubleDigits(5);
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
}

void loop()
{
 
  
  //  x=random(0,9);
   // y=random(10,19);
     digitalWrite(trigPin, LOW);
   delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  
  // Calculate the distance
  distanceCm = duration * SOUND_SPEED/2;
  
  // Convert to inches
  distanceInch = distanceCm * CM_TO_INCH;
  
  // Prints the distance in the Serial Monitor
  Serial.print("Distance (cm): ");
  Serial.println(distanceCm);
 float capacity=distanceCm-2;
 x=distanceCm;
 y=capacity;
  if (Firebase.ready()) 
  {
    
    //Firebase.setInt(fbdo, main, 5);
    Firebase.setInt(fbdo, "/test/a", x);
    Firebase.setInt(fbdo, "/test/b", y);
    delay(200);

    Serial.printf("Get int a--  %s\n", Firebase.getInt(fbdo, "/test/a") ? String(fbdo.to<int>()).c_str() : fbdo.errorReason().c_str());
    a=fbdo.to<int>();
    Serial.printf("Get int b--  %s\n", Firebase.getInt(fbdo, "/test/b") ? String(fbdo.to<int>()).c_str() : fbdo.errorReason().c_str());
    b=fbdo.to<int>();

  Serial.println();  
  Serial.print("a:");
  Serial.print(a);
  Serial.print("  b: ");
  Serial.print(b);  
  Serial.println();
  Serial.println("------------------");
  Serial.println();
 
  delay(2500);
  }
}
