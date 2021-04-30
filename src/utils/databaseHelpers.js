const { Model } = require( 'mongoose' );

/**
 * check if a doc who contains a given field value already exists on database
 * @param { Object } queryFilter
 * @param { Model } Model
 * @returns a boolean value that indicates if the document exists or not 
 */
 exports.documentExists = async function( queryFilter, Model ){
    try {        
        let model = await Model.findOne( queryFilter );
        if( !model ) return false;
        return true;        
    } catch ( error ) {
        throw error
    };
};