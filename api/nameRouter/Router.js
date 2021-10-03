const express = require('express');
const model = require('./model');

const router = express.Router()




router.get('/', async (req, res) => {
    const data = await model.get()
    res.json(data)

})


router.post('/', async (req, res) => {
    const data = await model.create(req.body)
    res.json(data)
})


module.exports = router;
