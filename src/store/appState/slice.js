import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: [] || null,
  spaceDetails: {} || null,
  loading: false,
  message: null,
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    getSpaces: (state, action) => {
      state.spaces = action.payload;
    },
    appLoading: (state) => {
      state.loading = true;
    },
    appDoneLoading: (state) => {
      state.loading = false;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
  },
});

export const { appLoading, appDoneLoading, setMessage, clearMessage, getSpaces } =
  appStateSlice.actions;

export default appStateSlice.reducer;

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case APP_LOADING:
//       return { ...state, loading: true };

//     case APP_DONE_LOADING:
//       return { ...state, loading: false };

//     case SET_MESSAGE:
//       return { ...state, message: action.payload };

//     case CLEAR_MESSAGE:
//       return { ...state, message: null };

//     default:
//       return state;
//   }
// };
