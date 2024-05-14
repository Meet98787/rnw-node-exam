const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    // subCategoryId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "subCategory"
    // }
})

const category = mongoose.model('category', categorySchema);

module.exports = category;