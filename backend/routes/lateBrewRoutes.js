//const express = require('express');
const router = require('express').Router();
let LateNightBrew = require('../models/lateNightBrewPage');


router.route('/').get((req, res) => {
    LateNightBrew.find()
        .then(lateNightBrew => res.json(lateNightBrew))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = (req.body.title);
    const description = (req.body.description);
    const imageURL = (req.body.imageURL);

    const newLateNightBrew = new LateNightBrew({
        title,
        description,
        imageURL
    });

    newLateNightBrew.save()
        .then(() => res.json('Late Night Brew added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {  
    LateNightBrew.findById(req.params.id)  
      .then(LateNightBrew => res.json(LateNightBrew))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  

  router.route('/:id').delete((req, res) => {  
    LateNightBrew.findByIdAndDelete(req.params.id)  
      .then(() => res.json('LateNightBrew deleted.'))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  
  router.route('/update/:id').post((req, res) => {  
    LateNightBrew.findById(req.params.id)  
      .then(LateNightBrew => {  
        LateNightBrew.title = req.body.title;  
        LateNightBrew.description = req.body.description;  
        LateNightBrew.imageURL = req.body.imageURL;   LateNightBrew.save()
        //LateNightBrewPlaces.date = Date.parse(req.body.date); LateNightBrewPlaces.save()  
        .then(() => res.json('LateNightBrew updated!'))  
          .catch(err => res.status(400).json('Error: ' + err));  
      })  
      .catch(err => res.status(400).json('Error: ' + err));  
  });

module.exports = router;


