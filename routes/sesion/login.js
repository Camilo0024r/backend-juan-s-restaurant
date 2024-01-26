const express = require('express');
const router = express.Router();

router.post('/submit', (req,res) => {
 const { username, password} = req.body;

 res.send('Datos recibidos correctamente')
})

module.exports = router;