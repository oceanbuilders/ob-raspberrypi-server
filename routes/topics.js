const express = require('express');
const events = require('../services/db');
const router = express.Router();

const auth = require('../middleware/auth');

router.get('/', auth, events.getAllTopics)
router.get('/values', auth, events.getAllTopicsHasValue)

module.exports = router;