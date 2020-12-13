import React, { Component } from 'react'
import PropTypes from 'prop-types';

 export class AddBuilding extends Component {
     state = {
         title:''
     };

     onSubmit = (e) => {
         e.preventDefault();
         this.props.addBuilding(
            this.state.boilerId,
            this.state.businessName,
            this.state.email,
            this.state.phone,
            this.state.adress
        );
         this.setState({
             boilerId:'',
             businessName:'',
             email:'',
             phone:'',
             adress:''
            });

     }
     onChange = (e) => this.setState({ [e.target.name]:
         e.target.value});

    render(){
        return(
            <div>
                <h3>
                    Add new building
                </h3>
                <form onSubmit ={this.onSubmit} style={{display:'flex'}}>
                    <input
                    type="text"
                    name="boilerId"
                    style={inputStyle}
                    placeholder="Add Boiler ID"
                    value={this.state.boilerId}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="businessName"
                    style={inputStyle}
                    placeholder="Add Business Name"
                    value={this.state.businessName}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="Email"
                    style={inputStyle}
                    placeholder="Add e-mail"
                    value={this.state.email}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="adress"
                    style={inputStyle}
                    placeholder="Add adress..."
                    value={this.state.adress}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="phone"
                    style={inputStyle}
                    placeholder="Add phone..."
                    value={this.state.phone}
                    onChange={this.onChange}
                    />

                    <input 
                    type="submit"
                    value= "submit"
                    className="btn"
                    style={inputStyle}
                    />
                </form>
            </div>
        )
    }
}

const inputStyle = {
    padding:"10px",
    width: "50%",
    margin: "5px",
    borderRadius: "5px",
};

//proptypes
AddBuilding.propTypes = {
   addBuilding: PropTypes.func.isRequired
  }

export default AddBuilding 