const db = require('../model/db');

const creamService = {
  addCream: (name, usage) => {
    if (db.creams.find(c => c.name === name)) throw new Error('Creme já cadastrado');
    const cream = { id: db.creams.length + 1, name, usage };
    db.creams.push(cream);
    return cream;
  },
  getCreams: () => db.creams,
  getCream: (id) => db.creams.find(c => c.id === id),
  searchCream: (name) => db.creams.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
};

module.exports = creamService;
