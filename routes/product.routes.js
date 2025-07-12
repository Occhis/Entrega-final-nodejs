import express from 'express';
import {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/create', createProduct);
router.delete('/:id', deleteProduct);

export default router;
