const express = require('express');
const events = require('../services/db');
const router = express.Router();

const auth = require('../middleware/auth');

router.get('/', auth, events.findAll);
router.get('/:eventId', auth, events.findById);
router.get('/:startDate/to/:endDate', auth, events.findByDate);
router.get('/:topic', auth, events.getTopicData)
router.get('/:topic/:startDate/to/:endDate', auth, events.getTopicDatawithDates)

module.exports = router;