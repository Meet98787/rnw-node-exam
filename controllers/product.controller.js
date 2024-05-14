
const category = require("../models/category.schema");
const extraCategory = require("../models/extracategory.schema");
const product = require("../models/product.schema");
const subCat = require("../models/subcategory.schema");

const createProduct = async (req, res) => {
    const { title, price, description, img, catId, subCatId, extrCatId } = req.body;
    let data = await product.create({
        title: title,
        price: price,
        description: description,
        img: img,
        categoryID: catId,
        subCategoryId: subCatId,
        extraCategoryId: extrCatId
    }).then((data) => {
        console.log(data);
        return res.redirect('back');
    }).catch((err) => {
        console.log(err);
        return false;
    })
}

const getProData = async (req, res) => {
    let data = await product.find().populate("categoryID").populate("subCategoryId").populate("extraCategoryId");

    res.send(data);
}

const proForm = async (req, res) => {
    let extaradata = await extraCategory.find().populate({
        path: "subCategoryId",
        populate: {
            path:"categoryId"
        }
    })    


    res.render('product',{extaradata:extaradata});


}

const proHome = async (req, res) => {
    await product.find({}).then((data) => {
        console.log(data);
        return res.render('home', {
            data
        });
    }).catch((err) => {
        console.log(err);
        return false;
    }).populate("categoryID").populate("subCategoryId").populate("extraCategoryId")
}

module.exports = { createProduct, getProData, proForm, proHome }