const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const PersonSchema = new Schema({
    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        streetAddress: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: false
        },
        country: {
            type: String,
            required: true
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});


module.exports = Person_model_export = 
    mongoose.model('person_niminen_collectio_tietokannassas', PersonSchema);
    // 'person' näkyy tietokannassa