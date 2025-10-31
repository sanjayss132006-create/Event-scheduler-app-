const express = require('express');
const router = express.Router();

// Import your Event model (make sure you have it defined)
const Event = require('../models/Event'); // adjust path as needed

// Sample GET route to fetch events by date range
router.get('/events', async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    // Query database for events within the date range
    const events = await Event.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) }
    });

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events' });
  }
});

module.exports = router;
