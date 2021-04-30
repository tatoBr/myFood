const services = require( '../services/productCategory' )
const { documentExists } = require( '../utils/databaseHelpers' )

module.exports = class ProductCategoryController{
    post = async ( req, res, next )=>{
        try {
            const serviceResponse = await services.create( req.body )
            const { message, content, status } = serviceResponse;

            return res.status( status ).json({ message, content });
        } catch ( error ) {
            next( error );
        }
    };

    get = async( req, res, next )=>{
        try {
            const serviceResponse = await services.readAll();
            const { message, content, status } = serviceResponse;

            return res.status( status ).json({ message, content });

        } catch ( error ) {
            next( error );
        }
    };

    getById = async ( req, res, next )=>{
        try {          
            const { id } = req.params;

            const serviceResponse = await services.readById( id );
            const { message, content, status } = serviceResponse;

            return res.status( status ).json({ message, content });      
        } catch (error) {
            next( error );
        }
    };
    
    patch = async ( req, res, next )=>{
        try {          
            const { id } = req.params;
            const data  = req.body;

            const serviceResponse = await services.update( id, data );
            const { message, content, status } = serviceResponse;

            return res.status( status ).json({ message, content });      
        } catch (error) {
            next( error );
        }
    };

    delete = async ( req, res, next )=>{
        try {          
            const { id } = req.params;            

            const serviceResponse = await services.delete( id );
            const { message, content, status } = serviceResponse;

            return res.status( status ).json({ message, content });      
        } catch (error) {
            next( error );
        };
    };
}