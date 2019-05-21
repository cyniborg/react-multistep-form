import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import RaisedButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class Confirm extends Component {
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
      const values = { ...this.props.values }
    return (
      <Grid container className = "m-container">
        <AppBar position = "static">
            <Typography variant = 'h4' color = "inherit" >Confirm your details</Typography>
        </AppBar>
        <div className = "form-container">

        {Object.entries(values).map((e,i) => (
            <Grid item xs= {12} key = {i}>
                <Typography variant = 'subtitle2' align = "center">
                    {e[0]}
                </Typography>
                <Typography variant = 'subtitle1' align = "center">
                    {e[1]}
                </Typography>
                <br />
            </Grid>
        ))}

        <RaisedButton variant = "contained" color = "secondary" style = {{margin: '15px 0', minWidth: '75px'}}
        onClick = {this.back} > Back </RaisedButton>
        <RaisedButton variant = "contained" color = "primary" style = {{margin: '15px 15px', minWidth: '75px'}}
        onClick = {this.continue} > Continue </RaisedButton>
        </div>
            
         
      </Grid>
    )
  }
}

