import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'
import { selectPostIds } from "../features/posts/postsSlice";
import { useGetAllPostsQuery } from '../features/posts/postsSlice'

const BlogFeed = () => {
    const { isLoading, isError, error, isSuccess } = useGetAllPostsQuery();

    const orderedPostIds = useSelector(selectPostIds)


    let feed;
    if (isLoading) {
        feed = <div className='loader'>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>

    } else if (isSuccess) {
        feed = orderedPostIds.map(postId => <Post key={postId} postId={postId} />)

    } else if (isError) {
        feed = <h4 className='text-lg py-4 font-semibold bg-outrageousOrange'>
            {error.error}
        </h4>
    }

    return (
        <div className='flex flex-col mb-44 w-screen items-center'>
            {feed}
        </div>
    )
}

export default BlogFeed
