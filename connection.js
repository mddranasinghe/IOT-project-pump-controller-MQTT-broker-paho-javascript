var protocol = window.location.protocol;
 var client  = null;

 function connectMQTT(onConnectcallback) {
     console.log(excuteTime()+" mqtt connecting...");
 var mqttBroker='home.onesmartapi.com';
 var userName='dinuka';
 var password='dinuka'
 var port = protocol === 'https:' ? 8084 : 1884;
var mqttClientId = Math.random();
var mqttUseSSL = protocol === 'https:';

if(protocol === 'https')
{
    var mqttClientId ='wss/'+Math.random();
}else{
 
    var mqttClientId ='ws/'+Math.random();
}

try {
    client = new Paho.MQTT.Client(mqttBroker,port,mqttClientId);
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.onMessageDelivered = onMessageDelivered;
    client.disconnectedPublishing = true;

    client.connect({
        onSuccess: onConnectcallback,
        useSSL: mqttUseSSL,
        userName : userName,
        password : password, 
        timeout : 900,
        keepAliveInterval : 600
    });
    console.log(excuteTime()+" mqtt connected");
}catch (error){
    console.log(excuteTime()+" "+error);
}
 }


function onMessageArrived(message) 
{
  
  var payloadString = JSON.parse(message.payloadString);
  console.log(excuteTime()+" onMessageArrived : "+payloadString);
}

function onMessageDelivered(message) {
  console.log(excuteTime()+" onMessageDelivered : "+message._getDestinationName());
}

function onConnectionLost(message) {
  console.log(excuteTime()+" onConnectionLost : "+ message.errorMessage);
}


function sendCommandToDevice(topic , callbackfun) {
    
    if(client.isConnected()){
        console.log(excuteTime()+" sendCommandToDevice : "+topic);
        client.subscribe(topic);
        var message = new Paho.MQTT.Message(JSON.stringify(''));
        message.destinationName = topic;
        client.send(message);
    }
    
}

function getDataFromDevice(topic , callbackfun) {
    if(client.isConnected()){
        console.log(excuteTime()+" getDataFromDevice : "+topic);
        client.onMessageArrived = callbackfun;
        client.subscribe(topic);
        var message = new Paho.MQTT.Message(JSON.stringify(''));
        message.destinationName = topic;
        client.send(message);
    }
    
}

function excuteTime() {
    return new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo'});
}