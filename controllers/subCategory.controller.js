const category = require("../models/category.schema");
const subCat = require("../models/subcategory.schema");

const subcreate = async (req, res) => {

    try {
        
        const newSubCategory = new subCat(req.body);

        const result = await newSubCategory.save();

        console.log("SubCategory saved successfully:", result);

        res.redirect('/');
    } catch (error) {
        console.error("Error saving category:", error);
        res.status(500).send("Error saving category to the database");
    }
}

const getSubCat = async (req, res) => {

    let subdata = await subCat.find({}).populate("categoryId")
    let catdata = await category.find({})
    res.render('subcategory',{subdata:subdata,catdata:catdata});
}

const update = async (req, res) => {
    let { id } = req.params;
    let data = await subCat.findById(id);
    data.extraCategoryId = req.body.extraId;
    data.save();
    res.send(data);
}

module.exports = { subcreate, getSubCat, update };