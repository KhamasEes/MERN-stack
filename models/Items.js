const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    esineenNimi: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item_model_export = 
    mongoose.model('item_niminen_collectio_tietokannassa', ItemSchema);
    // 'item' näkyy tietokannassa