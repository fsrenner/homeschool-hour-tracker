import React from 'react';
import Children from './Children';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      border: '1px solid #000',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Content = () => {

    const classes = useStyles();

    return (
        <main className={classes.paper}>
            <p>This is the main content section</p>
            <Children />
        </main>
    );
};

export default Content;