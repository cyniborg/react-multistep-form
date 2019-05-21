import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to the next step

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1 
        })
    }

    prevStep = () => {
        const { step } = this.state;

        this.setState({
            step: step - 1 
        })
    }

    startForm = () =>{
        const initialState = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
        };

        this.setState({
            ...initialState
        })
    }

    handleChange = input => (e) => {
        this.setState({
            [input]: e.target.value
        })
    }

  render() {
      const { step } = this.state;
      const { firstName, lastName, email, bio, city, occupation } = this.state;
      const values = { firstName, lastName, email, bio, city, occupation };
    
      switch(step){
          case 1:
          return(
              <FormUserDetails
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
              />
          )
          case 2:
          return(
            <FormPersonalDetails
              nextStep = {this.nextStep}
              prevStep = {this.prevStep}
              handleChange = {this.handleChange}
              values = {values}
            />
        )
          case 3:
          return(
            <Confirm
              nextStep = {this.nextStep}
              prevStep = {this.prevStep}
              handleChange = {this.handleChange}
              values = {values}
            />
        )
          case 4:
          return <Success reset = {this.startForm} />
          default:
          return <h1>Whoops!</h1>

      }
    
  }
}

export default UserForm
