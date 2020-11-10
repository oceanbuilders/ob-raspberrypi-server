const express = require ('express');
const events = require('../routes/events');
const topics = require('../routes/topics');
const publisher = require('../routes/publisher');

module.exports = function (app){
    app.use(express.json());
    app.use(express.static('assests'));

    app.use('/api/events', events);
    app.use('/api/topics', topics);
    app.use('/api/puplish', publisher)
}