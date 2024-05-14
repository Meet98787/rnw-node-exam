const { Router } = require('express');
const { subcreate, getSubCat, update } = require('../controllers/subCategory.controller');

const subCatRouter = Router();

subCatRouter.post('/', subcreate);
subCatRouter.get('/', getSubCat);
subCatRouter.patch('/update/:id', update);

module.exports = subCatRouter;