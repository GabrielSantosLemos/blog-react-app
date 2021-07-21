import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer';
import Header from '../../components/Header.js';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    background: 'blue'
  }
}));

export default function Home() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog"/>
        <main>
            <Grid container className={classes.mainGrid}>
                <br />
                <br />
                <br />
            </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}