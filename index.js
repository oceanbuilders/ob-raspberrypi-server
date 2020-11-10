const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const winston = require('winston');

require('dotenv').config();
require('./startup/logging')();
require('./startup/routes')(app);

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const port = process.env.PORT || 8000;
const host = '0.0.0.0';
let server;

if(process.env.NODE_ENV=='development'){
    server = app.listen(port, () => {
        console.log(`Listening at ${port}`);
        winston.info(`Listening at ${port}`);
    });
} else {
    const privateKey = fs.readFileSync(process.env.SSH_PRIVATE_KEY, 'utf8');
    const certificate = fs.readFileSync(process.env.SSH_CERTIFICATE, 'utf8');
    const ca = fs.readFileSync(process.env.SSH_CA, 'utf8');

    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
    }

    server = https.createServer(credentials, app);
    server.listen(port , host, () => {
        console.log(`HTTPS Server running on ${host} at port ${port}`);
        winston.info(`HTTPS Server running on ${host} at port ${port}`);
    });
}

module.exports = server;
