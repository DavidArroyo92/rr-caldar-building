import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BuildingItem extends Component {

    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.building.completed ?
            'line-through' : 'none'
        }
    }
 
    render() {
        const  {id, BoilerId, BusinessName, email, Phone, Adress} = this.props.building;
        return (
            <div style={this.getStyle()} >
                
               <p>
                  BoilerID {BoilerId} - Name: {BusinessName} - Email: {email} - Phone:{Phone} - Adress:{Adress}
                   <button onClick={() => this.props.delBuilding(id)} 
                   style={btnStyle}>x</button>
                   <button onClick={() => this.props.editBuilding(id)}
                   style={btnStyleEdit}>Edit</button>
               </p>
            </div>
        )
    }
}

//proptypes
BuildingItem.propTypes = {
    building: PropTypes.object.isRequired,
    delBuilding: PropTypes.func.isRequired,
    editBuilding: PropTypes.func.isRequired,
  }

//Get Styles to Buttons
const btnStyle = {
    background: 'red',
    color: '#fff',
    border:'none',
    padding: '5px 10px',
    borderRadiud: '50%',
    cursor: 'pointer',
    float: 'right'
}

const btnStyleEdit = {
    background: '#00aae4',
    color: '#fff',
    border:'none',
    padding: '5px 10px',
    borderRadiud: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default BuildingItem
