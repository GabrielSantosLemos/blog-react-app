import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Theme from '../../Theme';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    //background: 'blue'
  }
}));

export default function Home() {

  const classes = useStyles();

  return (
    <Theme>
      <Container maxWidth="lg">
        <Grid container className={classes.mainGrid}>
          Home
          <br />
          <br />
          <br />
        </Grid>
      </Container>
    </Theme>
  );
}