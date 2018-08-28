var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://10.1.75.71')
client.on('connect', function () {
    client.subscribe('myTopic')
    
})
client.on('message', function (topic, message) {
context = message.toString();
console.log(context)
})
