const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
}, { timestamp: true })

const PlaceModel = new mongoose.model("Place", PlaceSchema)

module.exports = PlaceModel