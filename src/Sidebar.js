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

const Sidebar = () => {
    const classes = useStyles();

    return <nav className={classes.paper}>This is the sidebar component</nav>
};

export default Sidebar