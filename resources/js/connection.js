var protocol = window.location.protocol;
 
 var mqttBroker='home.onesmartapi.com';
 var userName='dinuka';
 var password='dinuka'
 var port = protocol === 'https:' ? 8084 :  1884;
var mqttClientId = Math.random();
var mqttUseSSL = protocol === 'https:';

if(protocol === 'https')
{
    var mqttClientId ='wss/'+Math.random();
}else{
 
    var mqttClientId ='ws/'+Math.random();
}

var client = new Paho.MQTT.Client(mqttBroker, port,mqttClientId);




