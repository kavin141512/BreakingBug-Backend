const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware.js');

//wrong controller imported
const {
    sellerRegister,
    sellerLogIn
} = require('../controllers/sellerController.js');
//imported unimported searchproductbysubcategory
const {
    searchProductbySubCategory,
    productCreate,
    getProducts,
    getProductDetail,
    searchProductbyCategory,
    getSellerProducts,
    updateProduct,
    deleteProduct,
    deleteProducts,
    deleteProductReview,
    deleteAllProductReviews,
    addReview,
    getInterestedCustomers,
    getAddedToCartProducts,
} = require('../controllers/productController.js');

const {
    customerRegister,
    customerLogIn,
    getCartDetail,
    cartUpdate
} = require('../controllers/customerController.js');

//imported getorderedproductsbycustomer function
const {
    newOrder,
    getOrderedProductsBySeller,
    getOrderedProductsByCustomer
} = require('../controllers/orderController.js');



router.post('/SellerRegister', sellerRegister);
router.post('/SellerLogin', sellerLogIn);
// authorisation middleware applied
router.post('/ProductCreate', authMiddleware,productCreate);
router.get('/getSellerProducts/:id', getSellerProducts);
router.get('/getProducts', getProducts);
router.get('/getProductDetail/:id', getProductDetail);
router.get('/getInterestedCustomers/:id', getInterestedCustomers);
router.get('/getAddedToCartProducts/:id', getAddedToCartProducts);
// authorisation middleware applied
router.put('/ProductUpdate/:id', authMiddleware,updateProduct);
// authorisation middleware applied
router.put('/addReview/:id', authMiddleware,addReview);

router.get('/searchProduct/:key', searchProductbyCategory);
router.get('/searchProductbyCategory/:key', searchProductbyCategory);
//incorrect searchProductbyCategory function callled 
router.get('/searchProductbySubCategory/:key', authMiddleware,searchProductbySubCategory);
// authorisation middleware applied
router.delete('/DeleteProduct/:id', authMiddleware,deleteProduct);
// authorisation middleware applied
router.delete('/DeleteProducts/:id', authMiddleware,deleteProducts);
// authorisation middleware applied
router.delete ('/deleteProductReview/:id',authMiddleware, deleteProductReview);
// authorisation middleware applied
router.put ('/deleteAllProductReviews/:id',authMiddleware, deleteAllProductReviews);

// Customer
router.post('/CustomerRegister', customerRegister);
router.post('/CustomerLogin', customerLogIn);
// authorisation middleware applied
router.get('/getCartDetail/:id', authMiddleware,getCartDetail);
// authorisation middleware applied
router.put('/CustomerUpdate/:id',authMiddleware, cartUpdate);

// Order
// authorisation middleware applied
router.post('/newOrder',authMiddleware, newOrder);

// authorisation middleware applied
//changed the get orderbyseller fucntion to getorderedproductsbycustomer
router.get('/getOrderedProductsByCustomer/:id', getOrderedProductsByCustomer);
// authorisation middleware applied
router.get('/getOrderedProductsBySeller/:id', getOrderedProductsBySeller);


//exports is not done
module.exports = router;