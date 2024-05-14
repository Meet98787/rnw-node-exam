const mongoose = require('mongoose');
const category = require('./category.schema');

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    img: String,
    extraCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "extracategory"
    }
})

const product = mongoose.model('product', productSchema);

module.exports = product;