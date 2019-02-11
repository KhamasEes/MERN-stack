const express = require('express');
const router = express.Router();

// Person Model

const Person_api_model    = require('../../models/Persons');

// @route   GET api/persons
// @desc    Get All Persons
// @access  Public


router.get('/', (req, res) => {
    Person_api_model.find()
    .sort({ date: -1})
    .then(personFetch => res.json(personFetch))
}); 

// @route   POST api/persons
// @desc    Create a person
// @access  Public


router.post('/', (req, res) => {

    const newPerson = new Person_api_model({     
        firstName: req.body.firstName,
        lastName: req.body.lastName,
         address: {   
            streetAddress: req.body.address.streetAddress,
            postalCode: req.body.address.postalCode,
            city: req.body.address.city,
            state: req.body.address.state,
            country: req.body.address.country
         }   
    });
    
    newPerson.save().then(personAdding => res.json(personAdding));
}); 

// @route   DELETE api/item/:id
// @desc    Delete a person
// @access  Public


router.delete('/:id', (req, res) => {
        Person_api_model.findById(req.params.id)
        .then(iteminPoisto => iteminPoisto.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false})); 
});


module.exports = router;
