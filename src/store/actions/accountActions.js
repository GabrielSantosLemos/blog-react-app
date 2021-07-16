import authService from "../../services/authService";

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';
export const SIGNOUT = '@ACCOUNT/SIGNOUT';

const signIn = (email, password) => {
    return async (dispatch) => {
        console.log("action");
        const user = await authService.signIn(email, password);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                user
            }
        })
    }
}

const setUserData = () => {
    return async (dispatch) => {
        const user = await authService.signInwithToken();
        dispatch({
            type: SILENT_LOGIN,
            payload: {
                user
            }
        })
    }
}

const signOut = () => {
    return async (dispatch) => {
        await authService.sigOut();
        dispatch({
            type: SIGNOUT,
        })
    }
}

export { signIn, setUserData, signOut };