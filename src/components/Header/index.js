import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Notification from '../Header/Notifications';
import WritePost from '../Header/WritePost';
import Account from '../Header/Account';
import Settings from '../Header/Settings';

const useStyles = makeStyles({
  toolbar: {
    padding: '0px'
  },
  toolbarTitle: {
    flex: 1,
  }
});

function Header() {

  const classes = useStyles();

  return (
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
        <Box ml={1}>
          <Notification />
        </Box>
        <Box ml={1}>
          <Settings />
        </Box>
        <Box ml={1}>
          <Account />
        </Box>
      </Toolbar>
    </Container>
  );
}

export default Header;