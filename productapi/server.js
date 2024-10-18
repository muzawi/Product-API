const dotenv = require('dotenv');
const express = require('express');

dotenv.config({path:'./config/config.env'});
const app = express();
const PORT = process.env.PORT
const products = require('./routes/products');
app.use('/api/v1/products',products);
app.get('/', (req, res) =>{
    res.status(200).json({success:true, message:"welcome to node.js"});
})

app.listen(PORT, () => {
    console.log(`Runnung in ${process.env.NODE_ENV} ${PORT}`);
})