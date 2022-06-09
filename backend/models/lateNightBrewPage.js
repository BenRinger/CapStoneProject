const Mongoose = require('mongoose');


const Schema = Mongoose.Schema;


const lateNightBrewSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
        imageURL: { type: String, required: true}
        });

    const LateNightBrew = Mongoose.model('LateNightBrews', lateNightBrewSchema);

    module.exports = LateNightBrew;