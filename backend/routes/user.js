const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router(); 

router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            }); 
            user.save()
                .then(result => {
                    res.status(201).json({
                        message: 'User created',
                        result: result
                    });
                })
                .catch(err => {
                    res.status(500).json({     
                      message: "Invalid authetication credentials!"
                    });
                });
        });
});

router.post("/login", (req, res, next) => {
    let fetchUser;
    User.findOne({email: req.body.email})
        .then(user => {
            //console.log(user);
            if (!user){
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            //console.log(result);
            if (!result){
                return res.status(404).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign({email: fetchUser.email, userId: fetchUser._id}, 
                'secret_this_shold_be_longer', 
                {expiresIn: "1h"}
            ); 
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                userId: fetchUser._id
            });
        }).catch(err => {
            return res.status(401).json({
           
                message: 'Invalid Authentication credentials'
            });
        });
});
module.exports = router;