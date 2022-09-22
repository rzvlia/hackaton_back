const Router = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = new Router();
const {secret} = require('../routes/config');

function generateJWT(id) {
    const payload = {
        id
    };
    
    return jwt.sign(payload, secret, {expiresIn: "24h"});
}

async function login(req, res) {
    const {username, password} = req.body; 
    const user = await User.findOne({username});
    if (!user) 
        return res.status(400).json({message: "Invalid username or password!"});
    if (user.password != password) 
        return res.status(400).json({message: "Invalid username or password!"});
    const token = generateJWT(user._id);
    return res.json(token);    
}

router.post('/login', login);

module.exports = router;