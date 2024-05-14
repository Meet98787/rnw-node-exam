const mongoose = require('mongoose');

const extraCategorySchema = new mongoose.Schema({
    name: String,
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subCategory"
    }
})

const extraCategory = mongoose.model('extracategory', extraCategorySchema);

module.exports = extraCategory;