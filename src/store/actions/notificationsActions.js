import axios from "../../utils/axios";

export const GET_NOTIFICATIONS = '@notifications/GET_NOTIFICATIONAS';

const getNotifications = () => {
    return async (dispatch) => {
        const notifications = await axios.get('api/notifications');
        dispatch({
            type: GET_NOTIFICATIONS,
            payload: {
                notifications : notifications.data.notifications
            }
        });
    };
};

export { getNotifications }