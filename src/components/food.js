import React, { Component } from "react";
import "../index.css";
import images from "../images";

import someName from ''


class Food extends Component {





render() {
  return (
    <div>
<div className="container city">
        <img className="bourbon" src="../src/images/cutleryimage3.png" alt=""/>
    </div>

    <h1>Popular restaurants in Cincinnati </h1>
    <p className="crab">When you visit Cincinnati don't walk run to try the delicious fare from these restaurants </p>


    <h1 className="tacos"><strong>Dine in Restaurants</strong></h1>
    <div className="container">
        <div className="col-lg-8">
            <p>Senate Pub</p>
            <img className="sushi" src="../src/images/senatepublogo.png" alt=""/>
        </div>


        <div className="container">
            <p>Taste of Belgium</p>
            <img class="sushi" src="../src/images/tasteofbelgiumlogo.png" alt=""/>
        </div>

        <div className="container">
            <p>Bakersfield OTR</p>
            <img className="sushi" src="../src/images/bakersfieldOTRlogo.jpg" alt=""/>
        </div>

        <div className="container">
            <p>Montgomery Inn</p>
            <img className="sushi" src="../src/images/montgomeryinnlogo.png" alt=""/>
        </div>

        <div className="container">
            <p>Mt.Adam's Bar and Grill</p>
            <img className="sushi" src="../src/images/mtadamsbarandgrilllogo.jfif" alt=""/>
        </div>
    </div>

    <h1 className="tacos"><strong> Casual</strong></h1>
    <div className="container">
        <div className="col-lg-8">
            <p>Skyline Chili</p>
            <img className="sushi" src="../src/images/skylinechililogo.png" alt=""/>
        </div>

        <div className="container">
            <p>Larosa's Pizza</p>
            <img className="sushi" src="../src/images/larosaspizzalogo.png" alt=""/>
        </div>

        <div className="container">
            <p>Frisch's Big boy</p>
            <img className="sushi" src="../src/images/frichsbigboylogo.png" alt=""/>
        </div>

        <div className="container">
            <p>Blue Ash Chili</p>
            <img className="sushi" src="../src/images/blueashchililogo.png" alt=""/>
        </div>

        <div className="container ">
            <p>Graeter's Ice cream</p>
            <img className="sushi" src="../src/images/graetersicecreamlogo.png" alt=""/>
        </div>

        <div className="container">
            <p>The Turf Club</p>
            <img className="sushi" src='../src/images/turfclublogo.png' alt=""/>
        </div>
    </div>

    <iframe src="https://my.atlistmaps.com/map/b026416f-080d-4b84-8317-c40e8cb416f1?share=true" allow="geolocation"
        width="100%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe>
    </div>
  )

}
}

export default Food;