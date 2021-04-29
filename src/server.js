if( process.env.NODE_ENV !== "production" ){
    require("dotenv").config();
}
//importing core modules


//importing npm modules
const express = require('express');

//importing project modules
const defaultController = require('./controllers/default');

const app = express();

//setup middlewares
app.use( express.urlencoded({ extended: false }));
app.use( express.json() );


//importing routers
const productCategoryRouter = require( './routes/productCategory' );

//setting Up routes
app.use('/products-category', productCategoryRouter );

app.get('/',(req, res, next)=>{
    console.log( 'a' )
    try {
        let error = new Error('made up error');
        error.status = 401;
        throw error;
    } catch ( error ) {
        next( error )
    }
});


//not found route handler
app.use( defaultController.notFound );

//error route handler
app.use( defaultController.error );

app.listen( process.env.PORT, ()=> console.log(`Server Listening on PORT ${ process.env.PORT }.`));