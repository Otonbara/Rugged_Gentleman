const Product = require('../models/Product');

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, imageUrl } = req.body;

    const product = new Product({
      name,
      description,
      price,
      category,
      imageUrl,
    });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product', error });
  }
};

module.exports = {
  addProduct,
};