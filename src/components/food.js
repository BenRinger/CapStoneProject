import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';

import Senate from './images/senatepublogo.png';
import Belgium from './images/tasteofbelgiumlogo.png';
import BakersOTR from './images/bakersfieldOTRlogo.jpg';
import MontgoInn from './images/montgomeryinnlogo.png'; 
import MtAdamsBarGrill from './images/mtadamsbarandgrilllogo.jfif';
import SkyChi from './images/skylinechililogo.png';
import Larosas from './images/larosaspizzalogo.png';
import Frischs from './images/frichsbigboylogo.png';
import BluAshCh from './images/blueashchililogo.png';
import Turf from './images/turfclublogo.png';
import Graeters from './images/graetersicecreamlogo.png';

const Food = props => (
  <tr>
    <td>{props.Food.title}</td>
    <td>{props.Food.description}</td>
    <td>{props.Food.imageURL}</td>
    <td>
      <Link to={"/edit/"+props.Food._id}>edit</Link> | <a href="#" onClick={() => { props.deleteFood(props.Food._id) }}>delete</a>
    </td>
  </tr>
)


export default class FoodList extends Component {
  constructor(props) {  
    super(props); 
    
    this.deleteFood = this.deleteFood.bind(this); 
    
    this.state = {Food: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/Food/')
     .then(response => {
       this.setState({ Food: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  deleteFood(id) {  
    axios.delete('http://localhost:5000/Food/'+id)  
    .then(res => console.log(res.data)); 
  
    this.setState({  
      Food: this.state.Food.filter(el => el._id !== id)  
})  
}
FoodList() {
  return this.state.Food.map(currentFood => {
    return <Food Food={currentFood} deleteFood={thisdeleteFood} key={currentFood._id}/>;
  })
}

  render() {
    return (
      <div>
      <h3>Restaurants and foods unique to Cincinnati</h3>
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
          { this.FoodList() }
        </tbody>
      </table>
    </div>
    )
  }
}