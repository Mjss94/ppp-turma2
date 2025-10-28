const treatmentService = require('../service/treatmentService');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(treatmentService.getTreatments());
});

router.get('/types', (req, res) => {
  res.json(treatmentService.getTypes());
});

router.get('/:name', (req, res) => {
  const treatment = treatmentService.getTreatment(req.params.name);
  if (!treatment) return res.status(404).json({ error: 'Tratamento não encontrado' });
  res.json(treatment);
});

module.exports = router;
