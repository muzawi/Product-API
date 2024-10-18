const express = require('express');
const router = express.Router();

const {getProduct,getProducts,createProduct,updateProduct,deleteProduct } = require('../controllers/products');


router.get('/', getProducts)

router.post('/', createProduct)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;