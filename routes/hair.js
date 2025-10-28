const hairService = require('../service/hairService');
const express = require('express');
const router = express.Router();

router.get('/types', (req, res) => {
  res.json(hairService.getTypes());
});

router.get('/', (req, res) => {
  const userId = req.user.id;
  const hairType = hairService.getUserHairType(userId);
  if (!hairType) return res.status(404).json({ error: 'Tipo de cabelo não encontrado' });
  res.json({ hairType });
});

router.put('/', (req, res) => {
  const userId = req.user.id;
  const { hairType } = req.body;
  try {
    const updated = hairService.setUserHairType(userId, hairType);
    res.json({ hairType: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
