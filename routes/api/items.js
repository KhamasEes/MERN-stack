const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model

const Item_api_model    = require('../../models/Items');

// @route   GET api/items
// @desc    Get All Items
// @access  Public


router.get('/', (req, res) => {
    Item_api_model.find()
    .sort({ date: -1})
    .then(itemienHaku => res.json(itemienHaku))    
}); 

// @route   POST api/items
// @desc    Create an item
// @access  Private


router.post('/', auth, (req, res) => {

    const newItem = new Item_api_model({
        esineenNimi: req.body.esineenNimi // Tän pitää vastata validointia
    });

    newItem.save().then(iteminLisays => res.json(iteminLisays));
}); 

// @route   DELETE api/items/:id
// @desc    Delete an item
// @access  Private


router.delete('/:id', auth, (req, res) => {
        Item_api_model.findById(req.params.id)
        .then(iteminPoisto => iteminPoisto.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false})); 
});


module.exports = router;

