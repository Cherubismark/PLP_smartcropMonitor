const express = require('express');
const router = express.Router();
const Crop = require('../models/Crop');
const getWeather = require('../services/weatherService');


router.post('/', async (req, res) => {
  try {
    const crop = await Crop.create(req.body);
    res.status(201).json(crop);
  } catch (err) {
    res.status(500).json({ error: 'Error creating crop.' });
  }
});


// Get all crops
router.get('/', async (req, res) => {
  try {
    const crops = await Crop.findAll();
    res.json(crops);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching crops.' });
  }
});


// Get weather info
router.get('/weather/:location', async (req, res) => {
  try {
    const data = await getWeather(req.params.location);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching weather.' });
  }
});

module.exports = router;
