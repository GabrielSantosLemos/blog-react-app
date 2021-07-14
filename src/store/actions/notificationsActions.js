import axios from "../../utils/axios";

export const GET_NOTIFICATIONS = '@notifications/GET_NOTIFICATIONAS';

const getNotifications = () => {
    return (dispatch) => {
        const notifications = axios.get('api/notifications');
        dispatch({
            type: GET_NOTIFICATIONS,
            payload: {
                notifications
            }
        });
    };
};

export { getNotifications }