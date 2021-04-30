const Model = require( '../models/productCategory' );
const { documentExists } = require( '../utils/databaseHelpers' );
const { httpStatusCodes } = require( '../utils/constants' );

exports.create = async categoryData =>{
    try {
        const queryFilter = { title: new RegExp( categoryData.title, 'i' )};
        
        if( await documentExists( queryFilter, Model )){
            return {
                status: httpStatusCodes.CONFLICT,
                message: 'Category Already Exists',
                content: categoryData,
            };
        };  

        const category = await Model.create( categoryData );
        return {
            status: httpStatusCodes.CREATED,
            message: 'Category created successfully.',
            content: category,
        };
    } catch (error) {
        throw error
    };
};

exports.readAll = async () => {
    try {
        const categories = await Model.find();
        let message = categories.length <= 0 ? 'No Category Registered' : 'Category List Retrivied';        

        return {
            status: httpStatusCodes.OK,
            message,
            content: categories,
        }        
    } catch ( error ) {
        throw error;  
    };
};

exports.readById = async( id )=>{
    try {
        const category = await Model.findById( id );
        if( !category ){
            return {
                status: httpStatusCodes.NOT_FOUND,
                message: 'Category does no exist.',
                content: null
            }
        }

        return {
            status: httpStatusCodes.OK,
            message: 'Category found.',
            content: category
        }
        
    } catch ( error ) {
        throw error;
    };
};

exports.update = async ( id, data ) => {
    const updatedCategory = await Model.findByIdAndUpdate( id, data, {
        new: true,
        omitUndefined: true,
        lean: true,
        runValidators: true
    })
    
    if( !updatedCategory ){
        return {
            status: httpStatusCodes.NOT_FOUND,
            message: 'Category does no exist.',
            content: null
        }
    }
    
    return {
        status: httpStatusCodes.ACCEPTED,
        message: 'Category updated.',
        content: updatedCategory
    };
};

exports.delete = async id => {
    let deletedCategory = await Model.findByIdAndDelete( id );
    
    if( !deletedCategory ){
        return {
            status: httpStatusCodes.NOT_FOUND,
            message: 'Category does no exist.',
            content: null
        }
    }
    
    return {
        status: httpStatusCodes.ACCEPTED,
        message: 'Category deleted.',
        content: deletedCategory
    };
}

