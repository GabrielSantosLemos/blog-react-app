import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';

import { getNotifications } from '../../store/actions/notificationsActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));

const iconsMap = {
  reviews: StarBorderIcon,
  new_comment: ChatBubbleOutlineIcon,
  like: FavoriteIcon,
  connection: PeopleIcon
}

export default function Notification () {

  const classes = useStyles();
  const notifications = useSelector(state => state.notifications.notifications); 
  const account = useSelector(state => state.account);
  const isAuthenticated = !!account.user;
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch])

  return (
      isAuthenticated && (
          <>
          <IconButton
            ref={ref}
            onClick={handleOpen}
            color="inherit"
          >
            <NotificationsIcon />
          </IconButton>

          <Popover 
              onClose={handleClose}
              open={isOpen}
              anchorEl={ref.current}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Box p={2} pb={0}>
              <Typography color="textPrimary">
                Notificações
              </Typography>
            </Box>
            <List className={classes.root}>
            {notifications.map((notification) => {
              const Icon = iconsMap[notification.type];
              return (
                <ListItem key={notification.id}>
                <ListItemAvatar>
                  <Avatar className={classes.icon}>
                    <Icon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                primary={notification.title}
                secondary={notification.description} />
              </ListItem>
            )})}
            </List>
          </Popover>
          </>
      )
  )
}