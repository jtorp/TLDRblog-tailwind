import {
    createSelector,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import { format } from "date-fns/esm";
import { apiSlice } from "../api/apiSlice";

const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => (b.id - a.id),
});

const initialState = postsAdapter.getInitialState();


export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "/posts",
            transformResponse: (resp) => {
                const fetchedPosts = resp.map((post) => {
                    post.datetime = format(new Date(), "EEE, MMM do, yyyy hh:mm a");
                    if (!post.reactions)
                        post.reactions = {
                            onFire: 0,
                            clap: 0,
                            crap: 0,
                            curious: 0,
                            loveit: 0,
                            haha: 0,
                        };
                    return post;
                });
                return postsAdapter.setAll(initialState, fetchedPosts);
            },
            providesTags: (result, error, arg) => [
                { type: 'Post', id: "LIST" },
                ...result.ids.map((id) => ({ type: "Post", id })),
            ],
        }),
        getPostsByUserId: builder.query({
            query: id => `/posts/?userId=${id}`,
            transformResponse: responseData => {
                const fetchedPosts = responseData.map((post) => {
                    if (!post?.datetime)
                        post.datetime = format(new Date(), "EEE ,MM do, yyyy hh:mm a");
                    if (!post.reactions)
                        post.reactions = {
                            onFire: 0,
                            clap: 0,
                            crap: 0,
                            curious: 0,
                            loveit: 0,
                            haha: 0,
                        };
                    return post;
                });
                return postsAdapter.setAll(initialState, fetchedPosts)
            },
            providesTags: (result, error, arg) => {
                return [
                    ...result.ids.map(id => ({ type: "Post", id })),
                ]
            }
        }),

        addNewPost: builder.mutation({
            query: (initialPost) => ({
                url: '/posts',
                method: 'POST',
                body: {
                    ...initialPost,
                    userId: Number(initialPost.userId),
                    datetime: new Date().toISOString(),
                    reactions: {
                        onFire: 0, crap: 0, clap: 0, curious: 0, loveit: 0, haha: 0
                    }
                }
            }),
            invalidatesTags: [{ type: 'Post', id: "LIST" }]
        }),

        editPost: builder.mutation({
            query: (initialPost) => ({
                url: `/posts/${initialPost.id}`,
                method: 'PUT',
                body: {
                    ...initialPost,
                    datetime: new Date().toISOString()
                }
            }),
            invalidatesTags: (result, error, arg) => [
                {
                    type: 'Post',
                    id: arg.id
                }
            ]
        }),


        deletePost: builder.mutation({
            query: ({ id }) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                {
                    type: 'Post',
                    id: arg.id
                }
            ]
        }),

        addReaction: builder.mutation({
            query: ({ postId, reactions }) => ({
                url: `posts/${postId}`,
                method: 'PATCH',
                // add user ID 
                body: { reactions }
            }),
            async onQueryStarted({ postId, reactions }, { dispatch, queryFulfilled }) {
                // `updateQueryData` requires the endpoint name and cache key arguments,
                // so it knows which piece of cache state to update
                const patchResult = dispatch(
                    postsApiSlice.util.updateQueryData('getAllPosts', undefined, draft => {
                        const post = draft.entities[postId]
                        if (post) post.reactions = reactions
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            }
        })
    })
})

export const {
    useGetAllPostsQuery,
    useGetPostsByUserIdQuery,
    useAddNewPostMutation,
    useEditPostMutation,
    useDeletePostMutation,
    useAddReactionMutation
} = postsApiSlice;
//return query result obj, entire object thats why we need create selector
export const selectPostsResult = postsApiSlice.endpoints.getAllPosts.select()
//memorise selector
const selectPostsData = createSelector(
    selectPostsResult,
    postsResult => postsResult.data // normalised state object with ids and enteties
)

export const {
    //getSelector creates selector and we destructure name with aliases so we dont have to rename all selectors inside components and match wiht pre-existing code
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds,
} = postsAdapter.getSelectors(state => selectPostsData(state) ?? initialState);
