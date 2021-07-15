import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

import { signOut } from '../../store/actions/accountActions';

export default function Account () {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const account = useSelector(state => state.account);
  const isAuthenticated = !!account.user;
  const navigate = useNavigate();

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
    <IconButton
      ref={ref}
      onClick={handleMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>

    {
      isAuthenticated
      ?
      <Menu
        anchorEl={ref.current}
        //anchorOrigin={{
        //  vertical: 'buttom',
        //  horizontal: 'center',
        //}}
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
      //anchorOrigin={{
      //  vertical: 'buttom',
      //  horizontal: 'center',
      //}}
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