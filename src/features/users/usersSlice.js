import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { format } from "date-fns"

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState();


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "/users",
            //add avatar based on gender if none use cat
            transformResponse: responseData => {

                const userData = responseData.map((user) => {
                    if (!user.joined) user.joined = format(new Date(), "do MMM yyyy")
                    if (!user.male) { user.avatar = "https://cdn-icons-png.flaticon.com/512/6997/6997603.png" }
                    else {
                        user.avatar = "https://cdn-icons-png.flaticon.com/512/6997/6997514.png"
                    }
                    return user
                })

                return usersAdapter.setAll(initialState, userData)
            },
            providesTags: (result, error, arg) => {
                console.log(result)
                return [
                    { type: 'User', id: "LIST" },
                    ...result.ids.map(id => ({ type: 'User', id }))
                ]
            }
        })

    })
})

export const {
    useGetAllUsersQuery

} = usersApiSlice;

export const selectUsersResult = usersApiSlice.endpoints.getAllUsers.select();

const selectUsersData = createSelector(
    selectUsersResult,
    usersResult => usersResult.data
)

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)