module.exports = class ProductController{
    getProduct( req, res, next ){
        let message = 'GET Product'

        if( req.params.id )  message+= ' by Id.'
        return res.status( 200 ).json({
            message,
            content: null
        });
    }

    postProduct( req, res, next){
        return res.status( 201 ).json({
            message: 'POST Product',
            content: null
        });
    }

    patchProduct( req, res, next ){
        return res.status( 202 ).json({
            message: 'PATCH Product',
            content: null
        });
    }

    deleteProduct( req, res, next ){
        return res.status( 200 ).json({
            message: 'DELETE Product',
            content: null
        });
    }
}