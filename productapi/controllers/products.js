let products = [{id:1, title: "iPhone 9", "price": 5549,image:"https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_SX148_SY213_QL70_.jpg"},
    { id:2, title: "iPhone x", "price": 10000,image:"https://m.media-amazon.com/images/I/61wbbsxq49L.jpg"},
    { id:3, title: "samsung universe 9", "price": 5490,image:"https://m.media-amazon.com/images/I/8189mzscM6L._AC_UY327_FMwebp_QL65_.jpg"},
    { id:4, title: "Samsung Galaxy M15", "price": 8849,image:"https://m.media-amazon.com/images/I/81LJaRu0cZL._AC_UY327_FMwebp_QL65_.jpg"},
    { id:5, title: "Apple iPhone 16 (128 GB) - Ultramarine", "price": 11549,image:"https://m.media-amazon.com/images/I/713SsA7gftL._AC_UY327_FMwebp_QL65_.jpg"},
    { id:6, title: "realme NARZO N61 ", "price": 10549,image:"https://m.media-amazon.com/images/I/71r0Ysx+oVL._AC_UY327_FMwebp_QL65_.jpg"},
    { id:7, title: "realme NARZO N61", "price": 7549,image:"https://m.media-amazon.com/images/I/71EN6N9kUEL._AC_UY327_FMwebp_QL65_.jpg"},
    { id:8, title: "POCO C65", "price": 5449,image:"https://m.media-amazon.com/images/I/51Zjp5fq1EL._AC_UY327_FMwebp_QL65_.jpg"},
    { id:9, title: "Apple iPhone 15 Pro Max", "price": 12549,image:"https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UY327_FMwebp_QL65_.jpg"},
    { id:10, title: "realme NARZO 70x 5G", "price": 3549,image:"https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_SX148_SY213_QL70_.jpg"},

]

// @desc  Get all Products
// @route  GET/api/v1/products
// @access public

const getProducts = (req, res, next) => {
    res.status(200).json(products);
}

// @desc  Get Products by id
// @route GET /api/v1/products/:id
// @access public

const getProduct = (req, res, next) => {const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(products);
}


// @desc  Create new Products
// @route POST /api/v1/products
// @access public

const createProduct = (req, res, next) => {
    res.status(200).json({success:true, data:{id:11,title: "realme NARZO 70x 5G", "price": 3549,image:"https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_SX148_SY213_QL70_.jpg"}});
}

// @desc  Update Products by id
// @route PUT /api/v1/products/:id
// @access public

const updateProduct = (req, res, next) => {
    res.status(200).json({success:true, data:{id: req.params.id, title: "Apple iPhone 16 (128 GB) - Ultramarine", "price": 11549,image:"https://m.media-amazon.com/images/I/713SsA7gftL._AC_UY327_FMwebp_QL65_.jpg"}});  
}


// @desc  Delete Products by id
// @route DELETE /api/v1/products/:id
// @access public

const deleteProduct = (req, res, next) => {
    res.status(200).json({success:true, message: `successfully deleted products with id:${req.params.id}`});
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}



