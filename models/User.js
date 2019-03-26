const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item_model_export = 
    mongoose.model('user', UserSchema);