const express = require('express');
const events = require('../services/db');
const router = express.Router();

const auth = require('../middleware/auth');

router.get('/', auth, events.findAll);
router.get('/:eventId', auth, events.findById);
router.get('/:startDate/to/:endDate', auth, events.findByDate);

module.exports = router;