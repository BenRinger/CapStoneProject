//const express = require('express');
const router = require('express').Router();
let Food = require('../models/foodPage');



router.route('/').get((req, res) => {
    Food.find()
        .then(foods => res.json(foods))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = (req.body.title);
    const description = (req.body.description);
    const imageURL = (req.body.imageURL);

    const newFood = new Food({
        title, 
        description, 
        imageURL
    });

    newFood.save()
        .then(() => res.json('Food added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {  
    Food.findById(req.params.id)  
      .then(Food => res.json(Food))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  

  router.route('/:id').delete((req, res) => {  
    Food.findByIdAndDelete(req.params.id)  
      .then(() => res.json('Food deleted.'))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  
  router.route('/update/:id').post((req, res) => {  
    Food.findById(req.params.id)  
      .then(Food => {  
        Food.title = req.body.title;  
        Food.description = req.body.description;  
        Food.imageURL = req.body.imageURL;   Food.save()
       
        .then(() => res.json('Food updated!'))  
          .catch(err => res.status(400).json('Error: ' + err));  
      })  
      .catch(err => res.status(400).json('Error: ' + err));  
  });


module.exports = router;