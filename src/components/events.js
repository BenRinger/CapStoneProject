import React, { Component } from 'react'

import './events.css';

export default class Events extends Component {
    render() {
        return (
            <>
            <h1 class="head">Events</h1><div class="container">
                <div class="c1">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require ("./imgs/flyingPigAspect.jpg") } alt={"Flying Pig Marathon"}/>
                                </div>
                            <div class="flip-card-back">
                                <h3 class="first-txt">Flying Pig Marathon</h3>
                                <p class="second-txt glass alignT">The Cincinnati Flying Pig Marathon is an annual 26.2 mi race run the first Sunday of May in Cincinnati, Ohio. First held in 1999, it is the 3rd-largest first-time marathon in the United States. The total participation for all weekend events exceeded 30,408 in 2011.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c3">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require("./imgs/oktoberFest.jfif") }alt={"Oktober Fest"}/>
                                </div>
                            <div class="flip-card-back">
                                <h3 class="first-txt">Oktober Fest</h3>
                                <p class="second-txt glass">Oktoberfest Zinzinnati® ist back, this September – with longer hours and an extra night of zelebration! The event, presented by Samuel Adams, will now open one day earlier and stay open one hour later, Thursday evening, Sep. 16 through Sunday, Sep. 19.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="c5">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require("./imgs/cinMusic-fest_adobe_express.jpeg") } alt={"Cincinnati Music Festival"}/>
                                </div>
                            <div class="flip-card-back">
                                <h3 class="first-txt">Cincinnati Music Festival</h3>
                                <p class="second-txt glass">Next date: Thu, Jul 21, 2022 – Sat, Jul 23, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="c2">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require("./imgs/tasteCincinnatiAspect.jpg")} alt={"Taste of Cincinnati"}/>
                                </div>
                            <div class="flip-card-back">
                                <h3 class="first-txt">Taste of Cincinnati</h3>
                                <p class="second-txt glass alignT">Taste of Cincinnati, presented by Kroger, is returning to Cincinnati May 28-30! After a three-year hiatus, Cincinnati’s Memorial Day weekend tradition returns with the largest selection of restaurants and food trucks in the event’s history. A fair warning, you might need to invest in a bigger belt.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="c4">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require("./imgs/festivalLightsAspect.jpg")}  alt={"The Festival of Lights"}/>
                                </div>
                            <div class="flip-card-back">
                                <h3 class="first-txt">The Festival of Lights</h3>
                                <p class="second-txt glass alignT">Beginning Nov. 19, the Cincinnati Zoo will be transformed into a “Wild Wonderland” for the 39th annual festival. Four million LED lights will adorn the zoo grounds – a festival often named among the best light shows in the nation..</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="c6">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={require("./imgs/ohio-renaissance-festival-2_adobe_express.jpeg")} alt={"Renaissance Festival"}/>
                                </div>
                            <div class="flip-card-back">
                                <h3 class="first-txt">Renaissance Festival</h3>
                                <p class="second-txt glass alignT">Your fairytale comes to life in our 16th century village filled with thrilling shows, food & drink, unique shops, and a fantasy adventure like no other! WEEKENDS AND LABOR DAY SEPTEMBER 3 – OCTOBER 30, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><iframe title='Map' src="https://my.atlistmaps.com/map/b026416f-080d-4b84-8317-c40e8cb416f1?share=true" allow="geolocation" width="100%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe>
           </>
        )
    }
}