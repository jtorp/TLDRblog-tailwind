import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
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

            }
        })

    })
})
