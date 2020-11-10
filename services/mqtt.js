const { response } = require('express');
const mqtt = require('mqtt');

let ack;

class MqttHandler {
    constructor() {
        this.mqttClient = null;
        this.host = 'mqtt://seapod.technoid.info';
        this.username = '';
        this.password = '';
    }

    connect() {
        this.mqttClient = mqtt.connect(this.host, {
            port: 1883,
            clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
            username: this.username,
            password: this.password
        });

        this.mqttClient.on('error', (err) => {
            console.log(err);
            this.mqttClient.end();
        });

        this.mqttClient.on('connect', () => {
            console.log(`mqtt client connected`);
        });

        this.mqttClient.subscribe('test/message/status', { qos: 0 });

        this.mqttClient.on('message', function (topic, message) {
            // console.log(message.toString());
        });

        this.mqttClient.on('close', () => {
            console.log(`mqtt client disconnected`);
        });
    }

    sendMessage(message) {
        this.mqttClient.publish('test/message', message);
        this.mqttClient.on('message', function (topic, message) {
            ack = message.toString();            
        });
        return ack;
    }
}

module.exports = MqttHandler;