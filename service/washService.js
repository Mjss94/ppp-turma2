const db = require('../model/db');

const washService = {
  addWash: (userId, creamId, treatment, date, result) => {
    const wash = { id: db.washes.length + 1, userId, creamId, treatment, date, result };
    db.washes.push(wash);
    return wash;
  },
  getLastWash: (userId) => {
    const washes = db.washes.filter(w => w.userId === userId);
    return washes.length ? washes[washes.length - 1] : null;
  },
  getWashes: (userId) => db.washes.filter(w => w.userId === userId)
};

module.exports = washService;
