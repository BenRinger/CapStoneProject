import React, { Component } from 'react'

import './historical.css';

export default class Historical extends Component {
    render() {
        return (
            <>

<h1 class="head">Historical Sites of Cincinnati</h1>

<div class="container">
    <div class="c1">
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("./imgs/taft-national_adobe_express.jpeg")} alt={"Wiliam Howard Taft National Historical Site"}/>
              </div>
              <div class="flip-card-back">
                <h3 className='first-txt'>Wiliam Howard Taft National Historical Site</h3>
                <p className='second-txt glass '>William Howard Taft National Historic Site is a historic house at 2038 Auburn Avenue in the Mount Auburn Historic District of Cincinnati, Ohio, a mile north of Downtown. It was the birthplace and childhood home of William Howard Taft, the 27th president and the 10th chief justice of the United States.</p>
              </div>
            </div>
          </div>
    </div>
    <div class="c3">
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("./imgs/saint-peter_adobe_express.jpeg")} alt={"Cathedral Basilica of St. Peter in Chains"}/>
              </div>
              <div class="flip-card-back">
                <h3 className='first-txt'>Cathedral Basilica of St. Peter in Chains</h3>
                <p className='second-txt glass'>Cathedral Basilica of Saint Peter in Chains is the cathedral of the Roman Catholic Archdiocese of Cincinnati. The basilica is a Greek revival structure located at 8th and Plum streets in downtown Cincinnati, Ohio, United States. It is dedicated to Saint Peter's imprisonment and liberation.</p>
              </div>
            </div>
          </div>
    </div>
    <div class="c5">
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("./imgs/whharrisontomb_adobe_express.jpeg")} alt={"William Henry Harrison Memorial"}/>
              </div>
              <div class="flip-card-back">
                <h3 className='first-txt'>William Henry Harrison Memorial</h3>
                <p className='second-txt glass'>The William Henry Harrison Tomb State Memorial is the final resting place of William Henry Harrison, ninth President of the United States; his wife Anna Harrison; and his son John Scott Harrison, Representative and father of the twenty-third President, Benjamin Harrison.</p>
              </div>
            </div>
          </div>
    </div>
    <div class="c2">
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("./imgs/HarrietBeecherStoweHouse_adobe_express.jpeg")} alt={"Harriet Beecher Stowe House"}/>
              </div>
              <div class="flip-card-back">
                <h3 className='first-txt'>Harriet Beecher Stowe House</h3>
                <p className='second-txt glass'>The Harriet Beecher Stowe House is a historic home in Cincinnati, Ohio which was once the residence of influential antislavery author Harriet Beecher Stowe, author of the 1852 novel Uncle Tom's Cabin.</p>
              </div>
            </div>
          </div>
    </div>
    <div class="c4">
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("./imgs/issacTemple_adobe_express.jpeg")} alt={"Isaac M. Wise Temple"}/>
              </div>
              <div class="flip-card-back">
                <h3 className='first-txt'>Isaac M. Wise Temple</h3>
                <p className='second-txt glass'>The Isaac M. Wise Temple (formerly the Plum Street Temple) is the historic synagogue erected for Rabbi Isaac Mayer Wise and his congregation in Cincinnati, Ohio. Wise was among the founders of American Reform Judaism. The temple building was designed by prominent Cincinnati architect James Keys Wilson.</p>
              </div>
            </div>
          </div>
    </div>
  </div>



<iframe title='interactiveMap' src="https://my.atlistmaps.com/map/b026416f-080d-4b84-8317-c40e8cb416f1?share=true" allow="geolocation" width="100%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </>
        )
    }
}