module.exports = class Controller{
    constructor( _name ){
        this.name = _name || 'Nameless';
    };

    post = ( req, res, next )=>{
        res.status( 201 ).json({
            message: `POST ${this.name}.`,
            content: null
        });
    };

    get = ( req, res, next )=>{
        let { id } = req.params;        
        let message = `GET ${ this.name }${ id ? ' by ID.':'.' }`;

        res.status( 200 ).json({
            message,
            content: null
        });        
    };

    patch = ( req, res, next )=>{
        res.status( 201 ).json({
            message: `PATCH ${this.name}.`,
            content: null
        });
    };

    delete = ( req, res, next )=>{
        res.status( 201 ).json({
            message: `DELETE ${this.name}.`,
            content: null
        });
    }
}