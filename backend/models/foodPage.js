const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    title: { type: String, required: true},
description: { type: String, required: true},
imageURL: { type: String, required: true }
});

const Food = mongoose.model('Foods', foodSchema);

module.exports = Food;
