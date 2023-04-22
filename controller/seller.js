// const path = require('path')
// const sellerData = require('../model/sellerModel')

// exports.sellerPage = (req, res, next) => {
//     sellerData.findAll()
//       .then(data => {
//         res.sendFile(path.join(__dirname, '../view/index.html'))
//       })
//       .catch(err => console.log(err))
//   }
  
// exports.postProducts = (req,res)=>{
//     const Detail = req.body.name;
//     const Price = req.body.price;
//     sellerData.create({
//        Product_Detail: Detail,
//         Product_Price: Price
//     })
//     .then(() => {
//         res.redirect('/seller-page')
//     })
//     .catch(err => console.log(err))
// }

// exports.deleteUploadedProducts = (req,res)=>{
//     const id = req.params.id;
//     sellerData.findByPk(id)
//       .then(row => {
//         row.destroy()
//       })
//       .catch(error => {
//         console.log(error);
//       });
// }

const path = require('path');
const sellerData = require('../model/sellerModel');

exports.getUploadedProducts = (req, res) => {
    sellerData.findAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err))
};

exports.sellerPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../view/index.html'));
}


exports.postProducts = (req, res) => {
  const Detail = req.body.name;
  const Price = req.body.price;
  sellerData
    .create({
      Product_Detail: Detail,
      Product_Price: Price,
    })
    .then(() => {
      res.redirect('/seller-page');
    })
    .catch((err) => console.log(err));
};

exports.deleteUploadedProducts = (req, res) => {
  const id = req.params.id;
  sellerData
    .findByPk(id)
    .then((row) => {
      row.destroy();
      res.send('Product deleted successfully');
    })
    .catch((error) => {
      console.log(error);
    });
};


