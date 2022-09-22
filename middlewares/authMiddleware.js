const jwt = require('jsonwebtoken');
const { secret } = require('../routes/config');

const authMiddleware = function(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token)
            return res.status(403);
            
        const decodedData = jwt.verify(token, secret);
        req.user = decodedData;
        next();
    } catch (e) 
    {
        console.log("ERROR!");
        console.log(e);
        return res.status(403).json({"message" : "invalid token"});
    }
}

module.exports = authMiddleware;