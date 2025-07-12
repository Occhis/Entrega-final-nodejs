import * as ProductService from '../services/product.service.js';

export const getAllProducts = async (req, res) => {
  const products = await ProductService.getAll();
  res.json(products);
};

export const getProduct = async (req, res) => {
  const product = await ProductService.getById(req.params.id);
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) return res.status(400).json({ error: 'Faltan campos requeridos' });
  const product = await ProductService.create({ name, price });
  res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
  await ProductService.remove(req.params.id);
  res.status(204).end();
};
