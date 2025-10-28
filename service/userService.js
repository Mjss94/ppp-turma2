const db = require('../model/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middleware/auth');

const userService = {
  register: async (username, password, hairType) => {
    if (db.users.find(u => u.username === username)) {
      throw new Error('Usuário já existe');
    }
    if (!db.hairTypes.includes(hairType)) {
      throw new Error('Tipo de cabelo inválido');
    }
    const hash = await bcrypt.hash(password, 10);
    const user = { id: db.users.length + 1, username, password: hash, hairType };
    db.users.push(user);
    return user;
  },
  login: async (username, password) => {
    const user = db.users.find(u => u.username === username);
    if (!user) throw new Error('Usuário não encontrado');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Senha incorreta');
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '1d' });
    return { token };
  },
  getUser: (id) => db.users.find(u => u.id === id)
};

module.exports = userService;
