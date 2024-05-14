const { Router } = require('express');
const { create, update, getCat } = require('../controllers/category.controller');


const catRouter = Router();

catRouter.post('/', create);
// catRouter.patch('/update/:id', update);
catRouter.get('/', getCat);


module.exports = catRouter;