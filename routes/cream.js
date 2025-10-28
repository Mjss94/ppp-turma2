const creamService = require('../service/creamService');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, usage } = req.body;
  try {
    const cream = creamService.addCream(name, usage);
    res.status(201).json(cream);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', (req, res) => {
  res.json(creamService.getCreams());
});

router.get('/:id', (req, res) => {
  const cream = creamService.getCream(Number(req.params.id));
  if (!cream) return res.status(404).json({ error: 'Creme não encontrado' });
  res.json(cream);
});

router.get('/search/:name', (req, res) => {
  res.json(creamService.searchCream(req.params.name));
});

module.exports = router;
