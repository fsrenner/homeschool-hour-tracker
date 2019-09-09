import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      border: '1px solid #000',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Footer = () => {
    const classes = useStyles();

    return <footer className={classes.paper}>This is the footer section</footer>
};

export default Footer;