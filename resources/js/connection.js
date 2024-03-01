var protocol = window.location.protocol;
 
 var mqttBroker='broker.hivemq.com';
 var userName='admin';
 var password='obs'
 var port = protocol === 'https:' ? 8884 : 8000;
var mqttClientId = Math.random();
var mqttUseSSL = protocol === 'https:';

if(protocol === 'https')
{
    var mqttClientId ='wss/'+Math.random();
}else{

    var mqttClientId ='ws/'+Math.random();
}




