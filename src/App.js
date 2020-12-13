import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Building from './components/Building';
import AddBuilding from './components/AddBuilding';
import Header from './components/Layout/Header'
import './App.css';
import { v4 as uuidv4 } from 'uuid';


//Set Building Object
class App extends Component {
  state = {
    building: []
  }

//Get Data from JSON.Files
componentDidMount(){
  const getBuilding = require('./data/buildingData.json');
  this.setState({building: getBuilding});
}

//Mark completed task
markComplete = (id) =>{
  this.setState({ Building: this.state.building.map(building => {
    if(building.id === id){
      building.completed =!building.completed
    }
    return building;
  }) });
}

//Delete todo

delBuilding = (id) =>{
  this.setState({ building: [...this.state.building.filter(building => building.id!==id)]})
}

//Add todo

AddBuilding = (BoilerId, BusinessName,email,Phone,Adress) =>{
  const newBuilding ={
    id: uuidv4(),
    BoilerId,
    BusinessName,
    email,
    Phone,
    Adress
  };
  this.setState({ building: [...this.state.building, newBuilding]});
}
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header/>
        <Route path="/" render={props =>(
          <React.Fragment>
            <AddBuilding addBuilding ={this.AddBuilding} />
            <Building building={this.state.building} markComplete=
            {this.markComplete} delBuilding={this.delBuilding}/>
          </React.Fragment>
        )} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;