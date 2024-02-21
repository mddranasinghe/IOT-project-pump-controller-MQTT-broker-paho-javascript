<script src="paho.javascript-1.0.3/paho-mqtt.js"></script>

var disconnect = document.getElementById('disconnect');
var green = document.getElementById('green');

var protocol = window.location.protocol; // Include the colon in the protocol

console.log(protocol);

if (protocol === "https:") { // Compare with the colon included
    var client = new Paho.MQTT.Client('broker.hivemq.com', 8884, 'dinuka');

    client.onConnectionLost = onConnectionLost;

    client.connect({
        onSuccess: onConnect,
        useSSL: true
    });
} else {
    var client = new Paho.MQTT.Client('broker.hivemq.com', 8000, 'dinuka');

    client.onConnectionLost = onConnectionLost;

    client.connect({
        onSuccess: onConnect
    });
}

function onConnect() {
    console.log("onConnect");
    client.subscribe("World");
    var message = new Paho.MQTT.Message("Hello");
    message.destinationName = "World";
    client.send(message);
    green.style.display = "inline";
    disconnect.style.display = "none";
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
        green.style.display = "none";
        disconnect.style.display = "inline";
    }
}


