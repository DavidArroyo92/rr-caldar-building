import React, {Component} from 'react';
import BuildingItem from './BuildingItem';
import PropTypes from 'prop-types';

class Buildings extends Component{


  render(){
    return (
      <div>
        {this.props.buildings.map((building) => (
          <BuildingItem
            key={building.id}
            building={building}
            delBuilding={this.props.delBuilding}
            editBuilding={this.props.editBuilding}
          />
        ))}
      </div>
    );
  }
}

//proptypes
Buildings.propTypes = {
  buildings: PropTypes.array.isRequired,
  editBuilding: PropTypes.func.isRequired,
  delBuilding: PropTypes.func.isRequired
}

export default Buildings;
