import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import RaisedButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class Success extends Component {

  static propTypes = {
    reset: PropTypes.func,
  }

  render() {
    return (
      <Grid container className = "m-container">
        <AppBar position = "static">
            <Typography variant = 'h4' color = "inherit" >Enter Personal Details</Typography>
        </AppBar>
        <div className = "form-container">

        <Grid item xs= {12}>
            <Typography
              variant = "headline"
            >
             Success!
            </Typography>
            <Typography variant = "body1">
                Thank you for your time. We will be contacting you soon.
            </Typography>
            <br />
        </Grid>

        <RaisedButton variant = "contained" color = "secondary" style = {{margin: '15px 0', minWidth: '75px'}}
        onClick = {()=>{this.props.reset()}} > Submit new form </RaisedButton>
        </div>
            
         
      </Grid>
    )
  }
}

