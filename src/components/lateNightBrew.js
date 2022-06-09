import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';

import Madtree from './images/madtreeBrewingimage.png';
import RhineBrew from './images/rhinegeistBrewerylogo.png';
import Brink from './images/brinkBrewingCologo.png';
import SonsToil from './images/sonsOfToilBrewingCologo.webp';
import StreetBrew from  './images/streetsideBrewerylogo.png';
import UrbanArt from './images/urbanArtifactlogo.png';
import MarchFBDist from './images//marchFirstBrewerylogo.png';
import BitBar from './images/16BitBarlogo.png';
import BelowZero from  './images//belowZeroLoungelogo.png.crdownload';
import Tokyo from './images/tokyoKittylogo.png';
import MeccaOTR from './images/meccaOTRlogo.png';
import LostFOTR from './images/lostAndFoundlogo.png';


const LateNightBrew = props => (
  <tr>
    <td>{props.LateNightBrew.title}</td>
    <td>{props.LateNightBrew.description}</td>
    <td>{props.LateNightBrew.imageURL}</td>
    <td>
      <Link to={"/edit/"+props.LateNightBrew._id}>edit</Link> | <a href="#" onClick={() => { props.deleteLateNightBrew(props.LateNightBrew._id) }}>delete</a>
    </td>
  </tr>
)


export default class LateNightBrewList extends Component {
  constructor(props) {  
    super(props); 
    
    this.deleteLateNightBrew = this.deleteLateNightBrew.bind(this); 
    
    this.state = {LateNightBrew: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/LateNightBrew/')
     .then(response => {
       this.setState({ LateNightBrew: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  deleteLateNightBrew(id) {  
    axios.delete('http://localhost:5000/LateNightBrew/'+id)  
    .then(res => console.log(res.data)); 
  
    this.setState({  
        LateNightBrew: this.state.LateNightBrew.filter(el => el._id !== id)  
})  
}
LateNightBrewList() {
  return this.state.LateNightBrews.map(currentLateNightBrew => {
    return <LateNightBrew LateNightBrew={currentLateNightBrew} deleteLateNightBrew={thisdeleteLateNightBrew} key={currentLateNightBrew._id}/>;
  })
}



  render() {
    return (
      <div>
      <h3>Late Night and Breweries</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Logo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { this.LateNightBrewList() }
        </tbody>
      </table>
      <img src={Madtree} alt="" width="100" height="50" />
    </div>
    )
  }
}