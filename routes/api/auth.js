const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth');

// Item Model

const User    = require('../../models/User');

// @route   POST api/auth
// @desc    Auth user
// @access  Public


router.post('/', (req, res) => {
    const { userEmail, userPassword } = req.body;

    // Simple validation
    if(!userEmail || !userPassword ) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    User.findOne({ userEmail })
    .then(user => {
        if(!user) return res.status(400).json({ msg: 'User does not exists'});
  

        // Validate password
        bcrypt.compare(userPassword, user.userPassword)
            .then(isMatch => {
                if(!isMatch) return res.status(400).json( {msg: 'Ivalid credentials'} );

                jwt.sign(
                    { id: user.id },
                    config.get('jwtSecret'),
                    { expiresIn: 3600 },
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                userName: user.userName,
                                userEmail: user.userEmail
    
                            }
                        });

                    }
                );

            } );



    })

}); 

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-userPassword')
        .then(user => res.json(user));
});

module.exports = router;

