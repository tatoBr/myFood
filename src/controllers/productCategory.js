module.exports = class ProductCategoryController{
    getProductCategory( req, res, next ){
        let message = 'GET Product Category'
        if( req.params.id )  message+= ' by Id.'

        return res.status( 200 ).json({
            message,
            content: null
        });
    };

    postProductCategory( req, res, next){
        return res.status( 201 ).json({
            message: 'POST Product Category',
            content: null
        });
    };

    patchProductCategory( req, res, next ){
        return res.status( 202 ).json({
            message: 'PATCH Product Category',
            content: null
        });
    };

    deleteProductCategory( req, res, next ){
        return res.status( 200 ).json({
            message: 'DELETE Product Category',
            content: null
        });
    };
}