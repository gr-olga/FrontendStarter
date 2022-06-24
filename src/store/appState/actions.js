import {apiUrl, DEFAULT_MESSAGE_TIMEOUT} from "../../config/constants";
import {clearMessage, getSpaces, getSpacesDetails, setMessage} from "./slice";
import axios from "axios";

export const showMessageWithTimeout = (
    variant,
    dismissable,
    text,
    timeOutMilliSeconds
) => {
    return (dispatch) => {
        dispatch(setMessage({variant, dismissable, text}));

        const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT;

        setTimeout(() => dispatch(clearMessage()), timeout);
    };
};

export const getSpacesFromApi = async (dispatch, getState) => {
    try {
        const res = await axios.get(`${apiUrl}/space`);
        const spaceData = res.data
        // console.log("data,", spaceData)
        dispatch(getSpaces(spaceData));
    } catch (e) {
        console.log(e.message)
    }
}

export const fetchSpaceById = (spaceId) => async (dispatch, getState) => {
    try {
        const response = await axios.get(`${apiUrl}/space/${spaceId}`);
        // console.log("one post", response);
        const detailData = response.data
        dispatch(getSpacesDetails(detailData))
    } catch (e) {
        console.log(e.message);
    }
};

export const postNewStory = (name, content, imageUrl, spaceId) => async (dispatch, getState) => {
    try {
        const res = await axios.post(`${apiUrl}/space/story`,
            {
                name: name,
                content: content,
                imageUrl: imageUrl,
                spaceId: spaceId
            }
        )
        const newStory = res.data
        console.log(newStory)
    } catch (e) {
        console.log(e.message);
    }
}





