const Router = require('express');
const Protocol = require('../models/Protocol');
const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const protocols = await Protocol.find();
        return res.status(200).json(protocols);
    } catch (e) {
        next();
    }
});

router.post('/', async(req, res) => {
    try {
        const protocol = Protocol.create(req.body);
        return res.status(200).json({message: "created successfully"});
    } catch(e) 
    {
        return res.status(500).json({message: e})
    }
})

module.exports = router;