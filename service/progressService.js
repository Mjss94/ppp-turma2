const db = require('../model/db');

const progressService = {
  getProgress: (userId) => {
    const washes = db.washes.filter(w => w.userId === userId);
    const treatments = db.treatments.map(t => t.name);
    const progress = {};
    treatments.forEach(t => {
      progress[t] = washes.filter(w => w.treatment === t).length;
    });
    return { totalWashes: washes.length, byTreatment: progress };
  }
};

module.exports = progressService;
