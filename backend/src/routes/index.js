const express = require('express');
const { addProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API is running...');
});

router.post('/products', addProduct);

module.exports = router;