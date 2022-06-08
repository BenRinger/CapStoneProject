const router = require('express').Router();
let LateNightBrewPlaces = require('../models/lateNightBrewPage');


router.route('/').get((req, res) => {
    LateNightBrewPlaces.find()
        .then(lateNightBrewPlaces => res.json(lateNightBrewPlaces))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;

    const newLateNightBrewPlaces = new LateNightBrewPlaces({
        name,
    });

    newLateNightBrewPlaces.save()
        .then(() => res.json('Late Night Brew Places added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


