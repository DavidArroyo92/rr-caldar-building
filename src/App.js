import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Buildings from './components/Building';
import AddBuilding from './components/AddBuilding';
import Header from './components/Layout/Header'
import './App.css';
import { v4 as uuidv4 } from 'uuid';


//Set Building Object
class App extends Component {
  state = {
    buildings: [],
    buildingEdit: null,

  }

//Get Data from JSON.Files
componentDidMount(){
  const getBuilding = require('./data/buildingData.json');
  this.setState({buildings: getBuilding});
}
// Edit Building
editBuilding = (building) => {
  this.setState({
    buildingEdit: building,
  });
  window.scrollTo(0, 0);
};

// Update Customer
updateBuilding = (
  id,
  boilerId,
  businessName,
  email,
  phone,
  adress
) => {
  
  this.setState({
    buildings: this.state.buildings.map((building) => {
      if (building.id === id) {
        building.boilerId = boilerId;
        building.email = email;
        building.businessName = businessName;
        building.adress = adress;
        building.phone = phone;
      }
      return building;
    }),
  });
};

//Delete todo

delBuilding = (id) =>{
  this.setState({ buildings: [...this.state.buildings.filter(building => building.id!==id)]})
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
  this.setState({ buildings: [...this.state.buildings, newBuilding]});
}
  render() {
    return (
      <Router>
        <div className="App">
            <div className="container">
              <Header/>
              <Route exact path="/" 
              render={(props) =>(
              <React.Fragment>
                <AddBuilding 
                  addBuilding ={this.AddBuilding} 
                  updateBuilding={this.updateBuilding}
                  buildingEdit={this.state.buildingEdit}
                />
                <Buildings 
                  buildings={this.state.buildings}  
                  delBuilding={this.delBuilding}
                  editBuilding={this.editBuilding}
                />
              </React.Fragment>
                 )} 
              />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;