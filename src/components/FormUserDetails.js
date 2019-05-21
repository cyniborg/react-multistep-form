import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField';
import RaisedButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typograpghy from '@material-ui/core/Typography';

export default class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
  static propTypes = {
    nextStep: PropTypes.func,
    handleChange: PropTypes.func,
    values: PropTypes.object
  }

  render() {
    return (
      <Grid container className = "m-container">
        <AppBar position = "static">
            <Typograpghy variant = 'h4' color = "inherit" >Enter User Details</Typograpghy>
        </AppBar>
        <div className = "form-container">

        <Grid item xs= {12}>
            <TextField
                helperText = "Enter your First Name"
                label = "First Name"
                onChange = {this.props.handleChange('firstName')}
                defaultValue = {this.props.values.firstName}
            />
            <br />
        </Grid>

        <Grid item xs = {12}>
            <TextField
                helperText = "Enter your Last Name"
                label = "Last Name"
                onChange = {this.props.handleChange('lastName')}
                defaultValue = {this.props.values.lastName}
            />
            <br />
        </Grid>

        <Grid item xs = {12}>
            <TextField
                helperText = "Enter your Email"
                label = "Email"
                onChange = {this.props.handleChange('email')}
                defaultValue = {this.props.values.email}
            />
            <br />
        </Grid>
            <RaisedButton variant = "contained" color = "primary" style = {{margin: '15px 0'}}
            onClick = {this.continue} > Continue </RaisedButton>
        </div>
            
         
      </Grid>
    )
  }
}

