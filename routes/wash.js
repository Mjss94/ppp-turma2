const washService = require('../service/washService');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const userId = req.user.id;
  const { creamId, treatment, date, result } = req.body;
  try {
    const wash = washService.addWash(userId, creamId, treatment, date, result);
    res.status(201).json(wash);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/last', (req, res) => {
  const userId = req.user.id;
  const wash = washService.getLastWash(userId);
  if (!wash) return res.status(404).json({ error: 'Nenhuma lavagem encontrada' });
  res.json(wash);
});

router.get('/', (req, res) => {
  const userId = req.user.id;
  res.json(washService.getWashes(userId));
});

module.exports = router;
