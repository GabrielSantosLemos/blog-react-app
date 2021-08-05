import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Notification from '../Header/Notifications';
import WritePost from '../Header/WritePost';
import Account from '../Header/Account';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    //borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '0px'
  },
  toolbarTitle: {
    flex: 1,
  }
}));

function Header() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            className={classes.toolbarTitle}
          >
            Blog
          </Typography>
          <WritePost />
          <Notification/>
          <Account />
        </Toolbar>
      </Container>
    </React.Fragment>
  );
}

export default Header; 