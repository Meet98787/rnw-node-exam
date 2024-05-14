const express = require('express');
const db = require('./config/database');
const catRouter = require('./routers/category.router');
const subCatRouter = require('./routers/subCategory.router');
const extraCatRouter = require('./routers/extracategory.router');
const P_router = require('./routers/product.router');
const product = require('./models/product.schema');

const port = 8081;

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use('/category', catRouter);
app.use('/subcategory', subCatRouter);
app.use('/extracategory', extraCatRouter);
app.use('/product', P_router);

app.get('/showproduct', async (req, res) => {
    
    const products = await product.find().populate({
        path:"extraCategoryId",
        populate:{
            path:"subCategoryId",
            populate:{
                path:"categoryId"
            }
        }
    })
  
    res.render('showproduct' ,{productlist:products})
  });

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/signup', (req, res) => {
    res.render('signup');
})

app.listen(port, (err) => {
    db();
    if (err) {
        console.log("server not start.");
        return false;
    }
    console.log("server start in http://localhost:" + port);
});