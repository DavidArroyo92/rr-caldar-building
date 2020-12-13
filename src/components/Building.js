import React, {Component} from 'react';
import BuildingItem from './BuildingItem';
import PropTypes from 'prop-types';

class Building extends Component{


  render(){
    return this.props.building.map((building) =>(
      <BuildingItem key={building.id} building={building} markComplete=
      {this.props.markComplete} delBuilding={this.props.delBuilding}/>
    ));
  }
}

//proptypes
Building.PropTypes = {
  building: PropTypes.array.isRequired
}

export default Building;
