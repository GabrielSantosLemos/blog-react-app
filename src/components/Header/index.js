import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Notification from './Notifications';
import Account from './Account';
import WritePost from './WritePost';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    //logo: {
    //  maxWidth: 90,
    //  marginRight: '10px'
    //}
  }));

function Header() {

  const classes = useStyles();
  //const logo = 'https://vimansca.com.br/images/common/head/LogotipoVIMANCabecalho.png';

  return (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* <img src={logo} alt="Kitty Katty!" className={classes.logo} /> */}
          <Typography variant="h6" className={classes.title}>
            Blog
          </Typography>
          <WritePost/>
          <Notification />
          <Account />
        </Toolbar>
    </AppBar>
  );
}

export default Header;