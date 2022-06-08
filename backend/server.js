const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const lateNightBrewPlaces = require('./routes/lateNightBrewPlaces');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


        


//connect to mogodb
const dbURI = 'mongodb+srv://Martia:nchantedlily0785@capstone.2gv0g.mongodb.net/capstoneretryWrites=true&w=majority';
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('connected to mongoDB');})


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });




// const lateNightBrewRouter = require('./routes/lateNightBrewPage');
// const foodRouter = require('./routes/foodRestaurant');
// const lateNightBrewPlacesRouter = require('./routes/lateNightBrewPlaces');
// const foodRestaurantRouter = require('./routes/foodRestaurant');

// app.use('/lateNightBrew', lateNightBrewRouter);
// app.use('/food', foodRouter);



app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});