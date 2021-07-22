import React from 'react';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu, Avatar } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { signOut } from '../store/actions/accountActions';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
}));

export default function Header() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const account = useSelector(state => state.account);
  const isAuthenticated = !!account.user;
  const navigate = useNavigate();
  
  const ref = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };
  
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleSignOut = () => {
    handleMenuClose();
    dispatch(signOut());
    navigate('/')
  }

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

          <Avatar
            ref={ref}
            onClick={handleMenuOpen}
            src={account.user && account.user.avatar}
          />

          {
            isAuthenticated
            ?
            <Menu
              anchorEl={ref.current}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              getContentAnchorEl={null}
              open={isMenuOpen}
              onClose={handleMenuClose}
              >
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Meus Favoritos</MenuItem>
                <MenuItem>Meus Posts</MenuItem>
                <MenuItem>Minha conexõs</MenuItem>
                <MenuItem onClick={handleSignOut}>Sair</MenuItem>
            </Menu>
            :
            <Menu
            anchorEl={ref.current}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            getContentAnchorEl={null}
            open={isMenuOpen}
            onClose={handleMenuClose}
            >
              <MenuItem>Registrar</MenuItem>
              <MenuItem>Entrar</MenuItem>
            </Menu>
          }
        </Toolbar>
      </Container>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};