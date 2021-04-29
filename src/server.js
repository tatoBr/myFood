if( process.env.NODE_ENV !== "production" ){
    require("dotenv").config();
}

//importing core modules
const path = require('path');

//importing npm modules
const express = require('express');

//importing project modules
const defaultController = require('./controllers/default');

const app = express();

//setup middlewares
app.use( express.urlencoded({ extended: false }));
app.use( express.json() );


//importing routers
const userRouter = require( './routes/user' );
const productCategoryRouter = require( './routes/productCategory' );
const productRouter = require( './routes/product' );

//setting Up routes
app.use('/users', userRouter );
app.use('/products-category', productCategoryRouter );
app.use('/products', productRouter );


//not found route handler
app.use( defaultController.notFound );

//error route handler
app.use( defaultController.error );

app.listen( process.env.PORT, ()=> console.log(`Server Listening on PORT ${ process.env.PORT }.`));