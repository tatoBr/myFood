const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const schema = new mongoose.Schema({
    title: {
        required: true,
        unique: true,
        index: true,
        type: Schema.Types.String,
        trim: true,
        uppercase: true
    },
    description: {
        required: true,
        type: Schema.Types.String,
        trim: true
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

module.exports = mongoose.model('Category', schema );