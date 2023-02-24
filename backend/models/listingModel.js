const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const listingSchema = new Schema({

    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    image: {
        type: String
    },
    user: {
        type: String,
        required: true
    }
},{timestamps : true});

module.exports = mongoose.model('Listing', listingSchema);