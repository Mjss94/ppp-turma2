const db = require('../model/db');

const treatmentService = {
  getTreatments: () => db.treatments,
  getTreatment: (name) => db.treatments.find(t => t.name.toLowerCase() === name.toLowerCase()),
  getTypes: () => [
    'Tradicional',
    'Crescimento',
    'Cacheados e Crespos'
  ]
};

module.exports = treatmentService;
