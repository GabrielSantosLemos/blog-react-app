import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu, Avatar } from '@material-ui/core';

import { signOut } from '../../store/actions/accountActions';

export default function Account () {

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

  return(
  <>
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
  </>
  )
}