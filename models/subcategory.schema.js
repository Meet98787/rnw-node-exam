const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
});

const subCat = mongoose.model('subCategory', subCategorySchema);

module.exports = subCat;