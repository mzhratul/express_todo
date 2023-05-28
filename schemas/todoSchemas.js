const mongoose = require('mongoose');

const todoSchemas = mongoose.Schema({
    title:{
        type : String,
        required: true,
    },
    description:String,
    status:{
        type:String,
        enum: ['active', 'inactive'],
    },
    date: {
        type:Date,
        default:Date.now
    }
})

exports.default = todoSchemas;