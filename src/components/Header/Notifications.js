import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNotifications } from '../../store/actions/notificationsActions';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Notification () {

  const classes = useStyles();
  const notifications = useSelector(state => state.notifications); 
  console.log(notifications);

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
              //anchorOrigin={{
              //  vertical: 'bottom',
              //  horizontal: 'left',
              //}}
              //transformOrigin={{
              //  vertical: 'top',
              //  horizontal: 'right',
              //}}
          >
            {/* <List className={classes.root}> */}
            {
              notifications.map((notification) => (
                <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                primary={notification.title}
                 secondary={notification.description} />
              </ListItem>
              ))
            }
            {/* </List> */}
          </Popover>
          </>
      )
  )
}