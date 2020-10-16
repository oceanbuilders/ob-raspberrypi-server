const express = require('express');
const events = require('../services/db');
const router = express.Router();

const auth = require('../middleware/auth');

router.get('/', auth, events.getAllTopics)

module.exports = router;