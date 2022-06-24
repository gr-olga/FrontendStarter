import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token"),
    profile: null,
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            localStorage.setItem("token", action.payload.token);
            state.token = action.payload.token;
            state.profile = action.payload.user;
        },
        logOut: (state, action) => {
            localStorage.removeItem("token");
            state.token = null;
            state.profile = null;
        },
        tokenStillValid: (state, action) => {
            state.profile = action.payload.user;
        },
        removeUserStory: (state, action) => {
            const id = action.payload
            state.profile.space.stories = state.profile.space.stories.filter((s) => s.id !== id)
        },
    },
});


export const {loginSuccess, logOut, tokenStillValid, removeUserStory} = userSlice.actions;

export default userSlice.reducer;
