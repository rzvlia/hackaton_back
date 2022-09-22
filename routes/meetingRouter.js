const Router = require('express');
const Meeting = require('../models/Meeting');
const router = Router();

router.post('/', async(req, res) => {
    try {
        const meeting = Meeting.create(req.body);
        return res.status(201).json({message: "created successfully!"})
    }
    catch (e) 
    {
        return res.status(500).json({message: e})
    }
});

router.get('/', async(req, res, next) => {
    try {
        const meetings = await Meeting.find();
        return res.status(200).json(meetings);
    } catch (e) {
        next();
    }
})

module.exports = router;