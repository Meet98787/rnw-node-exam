const category = require("../models/category.schema")

const create = async (req, res) => {
    try {
        
        const newCategory = new category(req.body);

        const result = await newCategory.save();

        console.log("Category saved successfully:", result);

        res.redirect('/');
    } catch (error) {
        console.error("Error saving category:", error);
        res.status(500).send("Error saving category to the database");
    }
};



const getCat = async (req, res) => {

    let data = await category.find({})
    res.render('category',{data:data});
}

module.exports = { create, getCat };