import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNotifications } from '../../store/actions/notificationsActions';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';

export default function Notification () {

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
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
            >
              The content of the Popover.
            </Popover>
            </>
        )
    )
}