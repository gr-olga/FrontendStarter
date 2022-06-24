import {apiUrl} from "../../config/constants";
import axios from "axios";
import {selectToken} from "./selectors";
import {appDoneLoading, appLoading, setMessage} from "../appState/slice";
import {showMessageWithTimeout} from "../appState/actions";
import {loginSuccess, logOut, removeUserStory, tokenStillValid} from "./slice";

export const signUp = (name, email, password) => {
    return async (dispatch, getState) => {
        dispatch(appLoading());
        try {
            const response = await axios.post(`${apiUrl}/auth/signup`, {
                name,
                email,
                password,
            });

            dispatch(
                loginSuccess({token: response.data.token, user: response.data.user})
            );
            dispatch(showMessageWithTimeout("success", true, "account created"));
            dispatch(appDoneLoading());
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                dispatch(
                    setMessage({
                        variant: "danger",
                        dismissable: true,
                        text: error.response.data.message,
                    })
                );
            } else {
                console.log(error.message);
                dispatch(
                    setMessage({
                        variant: "danger",
                        dismissable: true,
                        text: error.message,
                    })
                );
            }
            dispatch(appDoneLoading());
        }
    };
};

export const login = (email, password) => {
    return async (dispatch, getState) => {
        dispatch(appLoading());
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, {
                email,
                password,
            });
            dispatch(
                loginSuccess({token: response.data.token, user: response.data.user})
            );
            dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
            dispatch(appDoneLoading());
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                dispatch(
                    setMessage({
                        variant: "danger",
                        dismissable: true,
                        text: error.response.data.message,
                    })
                );
            } else {
                console.log(error.message);
                dispatch(
                    setMessage({
                        variant: "danger",
                        dismissable: true,
                        text: error.response.data.message,
                    })
                );
            }
            dispatch(appDoneLoading());
        }
    };
};

export const getUserSpace = () => {
    return async (dispatch, getState) => {
        const token = selectToken(getState());
        if (token === null) return;
        dispatch(appLoading());
        try {
            const response = await axios.get(`${apiUrl}/auth/me`, {
                headers: {Authorization: `Bearer ${token}`},
            });
            dispatch(tokenStillValid({user: response.data.user}));
            dispatch(appDoneLoading());
        } catch (error) {
            if (error.response) {
                console.log(error.response.message);
            } else {
                console.log(error);
                dispatch(logOut());
                dispatch(appDoneLoading());
            }
            // dispatch(logOut());
            // dispatch(appDoneLoading());
        }
    };
}

export const deleteStory = (storyId) => async (dispatch, getState) => {
    try {
        const res = await axios.delete(`${apiUrl}/space/${storyId}`,
            {
                storyId: storyId,
            },
            dispatch(removeUserStory(storyId))
        )
    } catch (e) {
        console.log(e.message);
    }
}

export const updateSpace = (title, description, backgroundColor, color, spaceId) => async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
        const res = await axios.put(`${apiUrl}/space`,
            {
                title: title,
                description: description,
                backgroundColor: backgroundColor,
                color: color,
                spaceId: spaceId
            },
            {headers: {Authorization: `Bearer ${token}`}}
        )
        const newSpace = res.data
        dispatch(getUserSpace())
        console.log(newSpace)
    } catch (e) {
        console.log(e.message);
    }
}
