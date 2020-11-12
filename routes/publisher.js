const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const mqttHandler = require('../services/mqtt');

var mqttClient = new mqttHandler();
mqttClient.connect();

router.post('/:topic/:message', (req, res) => {
    const ack = mqttClient.sendMessage(req.params.topic, req.params.message);
    res.status(200).send({message: ack});
});

module.exports = router;