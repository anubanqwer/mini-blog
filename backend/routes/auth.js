const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = require('express').Router();

router.post('/register', async (req, res) =>{
    console.log('register', req.body)
    //Check duplicate username
    const usernameExist = await User.findOne({ username: req.body.username });
    if(usernameExist) return res.status(400).send('This username already exists');

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //All requirement is passed, so we save the data into database
    const user = new User({
        username: req.body.username,
        password: hashedPassword
    });

    try{
        const savedUser = await user.save();
        res.status(200).send('You have successfully created your account.');
    }catch(err){
        res.status(400).send(err);
    }
});


router.post('/login', async (req, res) =>{
    //Check if username exists
    const user = await User.findOne({ username: req.body.username });
    if(!user) return res.status(400).send("This username isn't exist");

    //Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Password is wrong");

    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
                    expiresIn: 30*60
                  });

    res.header('auth-token', token).send({
        token: token,
        _id: user._id,
        username: user.username
    });
});

module.exports = router;