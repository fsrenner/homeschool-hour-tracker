import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
      border: '1px solid #000',
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));

const Header = () => {
    const classes = useStyles();

    return (
        
        <Typography className={classes.typography} component="h1" variant="h2" gutterBottom>
            Homeschool Hour Tracker
        </Typography>
    );
};

export default Header;