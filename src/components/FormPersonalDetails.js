import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField';
import RaisedButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  static propTypes = {
    nextStep: PropTypes.func,
    handleChange: PropTypes.func,
    prevStep: PropTypes.func,
    values: PropTypes.object
  }

  render() {
    return (
      <Grid container className = "m-container">
        <AppBar position = "static">
            <Typography variant = 'h4' color = "inherit" >Enter Personal Details</Typography>
        </AppBar>
        <div className = "form-container">

        <Grid item xs= {12}>
            <TextField
                helperText = "Enter your Occupation"
                label = "Occupation"
                onChange = {this.props.handleChange('occupation')}
                defaultValue = {this.props.values.occupation}
            />
            <br />
        </Grid>

        <Grid item xs = {12}>
            <TextField
                helperText = "Enter your City"
                label = "City"
                onChange = {this.props.handleChange('city')}
                defaultValue = {this.props.values.city}
            />
            <br />
        </Grid>

        <Grid item xs = {12}>
            <TextField
                helperText = "Enter your Bio"
                label = "Bio"
                onChange = {this.props.handleChange('bio')}
                defaultValue = {this.props.values.bio}
                multiline = {true}
                rows = {6}
            />
            <br />
        </Grid>
        <RaisedButton variant = "contained" color = "secondary" style = {{margin: '15px 0', minWidth: '75px'}}
        onClick = {this.back} > Back </RaisedButton>
        <RaisedButton variant = "contained" color = "primary" style = {{margin: '15px 15px', minWidth: '75px'}}
        onClick = {this.continue} > Continue </RaisedButton>
        </div>
            
         
      </Grid>
    )
  }
}

