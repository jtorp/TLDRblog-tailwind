import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns"


const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, { payload: { user, token } }) => {
            state.user = user;
            state.token = token

        },
        logout: (state, action) => {
            state.user = null
            state.token = null
        }
    },

    //extra?

})


export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;


