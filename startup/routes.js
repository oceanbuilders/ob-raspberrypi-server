const express = require ('express');
const db = require('../routes/db');

module.exports = function (app){
    app.use(express.json());
    app.use(express.static('assests'));

    app.use('/api/events', db);
}