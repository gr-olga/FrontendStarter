import {apiUrl, DEFAULT_MESSAGE_TIMEOUT} from "../../config/constants";
import {setMessage, clearMessage, getSpaces} from "./slice";
import axios from "axios";

export const showMessageWithTimeout = (
  variant,
  dismissable,
  text,
  timeOutMilliSeconds
) => {
  return (dispatch) => {
    dispatch(setMessage({ variant, dismissable, text }));

    const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT;

    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};

export const bootstrapLoginState = async (dispatch, getState) => {
    try {
      const res = await axios.get(`${apiUrl}/space`
      );
      const spaceData = res.data
      console.log("data,", spaceData)
      dispatch(getSpaces(spaceData));
    } catch (e) {
      console.log(e.message)
    }

}