const progressService = require('../service/progressService');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const userId = req.user.id;
  res.json(progressService.getProgress(userId));
});

module.exports = router;
