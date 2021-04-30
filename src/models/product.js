const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const schema = new Schema({
    title: {
        required: true,
        type: Schema.Types.String,
        trim: true,
        uppercase: true
    },
    description: {
        required: true,
        type: Schema.Types.String,
        trim: true
    },
    price: {
        required: true,
        type: Schema.Types.Number,
        default: 999999999
    },
    image: {
        required: true,
        type: Schema.Types.String
    },
    active: {
        required: true,
        type: Schema.Types.Boolean,
        default: true
    }
});

module.exports = mongoose.model('Product', schema );