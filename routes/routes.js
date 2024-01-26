const express = require('express');
const router = express.Router();
const {} = require('../controllers/auth/user.controller');

router.get('/', (req,res) => {
  res.render('../views/home.ejs');
});

module.exports = router;