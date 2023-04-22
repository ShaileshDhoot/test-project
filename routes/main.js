const express = require('express');
const router = express.Router();

const { getUploadedProducts,sellerPage, postProducts, deleteUploadedProducts  } = require('../controller/seller');

router.get('/seller-products', getUploadedProducts)

router.get('/seller-page', sellerPage);

router.post('/seller-page', postProducts);

router.delete("/seller-page/:id", deleteUploadedProducts);


  module.exports = router;