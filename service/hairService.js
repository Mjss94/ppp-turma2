const db = require('../model/db');

const hairService = {
  getTypes: () => db.hairTypes,
  getUserHairType: (userId) => {
    const user = db.users.find(u => u.id === userId);
    return user ? user.hairType : null;
  },
  setUserHairType: (userId, hairType) => {
    if (!db.hairTypes.includes(hairType)) throw new Error('Tipo de cabelo inválido');
    const user = db.users.find(u => u.id === userId);
    if (!user) throw new Error('Usuário não encontrado');
    user.hairType = hairType;
    return user.hairType;
  }
};

module.exports = hairService;
