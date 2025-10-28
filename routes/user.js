const userService = require('../service/userService');
const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, hairType } = req.body;
  try {
    const user = await userService.register(username, password, hairType);
    res.status(201).json({ message: 'Usuário registrado', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await userService.login(username, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
