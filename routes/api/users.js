const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken')

// Item Model

const User    = require('../../models/User');

// @route   POST api/users
// @desc    Register new user
// @access  Public


router.post('/', (req, res) => {
    const { userName, userEmail, userPassword } = req.body;

    // Simple validation
    if(!userName || !userEmail || !userPassword ) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    User.findOne({ userEmail })
    .then(user => {
        if(user) {
            return res.status(400).json({ msg: 'User already exists'});
        }

        const newUser = new User({
            userName,
            userEmail,
            userPassword
        });

        // Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.userPassword, salt, (err, hash) => {
                if(err) throw err;
                newUser.userPassword = hash;
                newUser.save()
                .then(user => {

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


                });
            });
        });

    });

}); 




module.exports = router;

