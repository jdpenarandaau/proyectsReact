const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: Number ,
        required: true,
       
    },
    year: {
        type: Number ,
        required: true,
        
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        
    },
    registro: {
        type: Date,
        default: Date.now()
    }

});

module.exports=mongoose.model('Book',BookSchema);