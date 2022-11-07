import { apiSlice } from "../api/apiSlice";
import { logout, setCredentials } from "./authSlice";

export const authService = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            })
        }),

    })

})

export const {
    useLoginMutation
} = authService 