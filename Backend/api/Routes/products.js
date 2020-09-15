const express = require("express");
const Router = express.Router();
const productController = require('../Controllers/Products');
const multer= require("multer");



Router.get('/',productController.getProducts);


Router.get('/:id',productController.getProduct);


Router.put('/:id',productController.updateProduct);


Router.delete('/:id',productController.removeProduct);
    

// SETTING STORAGE
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log(file);
//         cb(null, 'public/uploads');
        
//     },

//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, file.originalname)
//     }
// });

// const imageFileFilter = (req, file, cb) => {
//     if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//         return cb(new Error('You can upload only image files!'), false);
//     }
//     cb(null, true);
// };

// const upload = multer({ storage: storage, fileFilter: imageFileFilter});



Router.post('/create',productController.createProduct);


module.exports=Router;