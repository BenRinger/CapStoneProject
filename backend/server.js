const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRoutes');
const lateNightBrewRouter = require('./routes/lateBrewRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connect to mongodb
const uri = process.env.dbURI;
mongoose.connect(uri, { useNewUrlParser: true}
    );

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connected to mongoDB');
});






// const lateNightBrewRouter = require('./routes/lateNightBrews');
// const foodRouter = require('./routes/foodRestaurant');
// const lateNightBrewPlacesRouter = require('./routes/lateNightBrewPlaces');
// const foodRestaurantRouter = require('./routes/foodRestaurant');

 app.use('/lateNightBrew', lateNightBrewRouter);
 app.use('/food', foodRouter);



app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});