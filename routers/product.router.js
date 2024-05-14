const { Router } = require('express');
const { createProduct, getProData, proForm, proHome } = require('../controllers/product.controller');

const P_router = Router();

P_router.post('/create', createProduct);
P_router.get('/product', getProData)
P_router.get('/', proForm);
P_router.get('/home', proHome)


module.exports = P_router;