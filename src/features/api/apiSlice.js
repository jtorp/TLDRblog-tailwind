import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react"
import { logout, setCredentials } from "../auth/authSlice"

export const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3500',
    credentials: 'include', //for cookies
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
})

//wrapper query around base
const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.originalStatus === 403) {
        console.log('Sending refresh token')
        //send refresh token if we go to 403 forbidden
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            //store token 
            api.dispatch(setCredentials({ ...refreshResult.data.user }))
            //retry original query with new token
            result = await baseQuery(args, api, extraOptions)
        } else {
            //if not 403 but 401 error log out
            api.dispatch(logout)
        }
    }
    return result
}


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    tagTypes: ['Post', 'User'],
    endpoints: builder => ({})

})
