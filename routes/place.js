const express = require('express')
const placeController = require('../controllers/placeController')

const router = express.Router()

router.get('/', async (req, res) => {
    let result = await placeController.placesList(req.query)
    if (result.status) {
        res.status(200).send(result.result)
    }
    else res.status(404).send(result.result)
})

router.get('/:slug', async (req, res) => {
    let result = await placeController.getPlace(req.params.slug)
    if (result.status) {
        res.status(200).send(result.result)
    }
    else res.status(404).send(result.result)
})

router.post('/', async (req, res) => {
    console.log(" create place" ,req.body)
    let result = await placeController.createPlace(req.body)
    if (result.status) {
        res.status(201).send(result.result)
    }
    else res.status(401).send(result.result)
})

module.exports = router