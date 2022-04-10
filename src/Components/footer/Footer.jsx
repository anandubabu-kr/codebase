import React from 'react';
import {
    Typography,
    Grid,
  } from '@mui/material';

  import useStyles from './style.js';


const Footer=()=>{
    const classes=useStyles()
    return(
        <footer className={classes.footer}>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="body" align="center">
              &copy; CodeBasics
            </Typography>
          </Grid>
        </Grid>
      </footer>
    )
}

export default Footer;