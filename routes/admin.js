const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

//const product = require('product');
const Product = require('../models/product');

dotenv.config();




router.get('/addproduct', function (req, res, next) {
    const messages = req.flash('error');
    res.render('admin/addproduct');
});


// router.post('/addproduct', product.authenticate('local.addproduct', {
//     failureRedirect: '/admin/addproduct',
//     failureFlash: true
// }), function (req, res, next) {
//     if(req.session.oldUrl) {
//         const oldUrl = req.session.oldUrl;
//         req.session.oldUrl = null;
//         res.redirect(oldUrl);
//         alert("here");
//     } else {
//         res.redirect('/user/profile');
//         alert("there");
//     }
// });

router.post("/addproduct",(req,res)=>{
    var imagePath = req.body.imagePath;
   req.body.imagePath = imagePath = "productimages/"+ req.body.imagePath;

     console.log(imagePath);
    var myData = new Product(req.body);
    console.log(myData);
    myData.save().then(()=>{
        res.send("Saved")
    }).catch(()=>{
        res.status(400).send("not saved");    
    })
    
});   


module.exports = router;