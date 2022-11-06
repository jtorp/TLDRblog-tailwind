import React from 'react'
import { Link } from 'react-router-dom'
import Tag from './Tag'
import PostAuthor from './PostAuthor'
import Reactions from "./Reactions";
import DateTime from './DateTime';
import { useSelector } from 'react-redux';
import { selectPostById } from '../features/posts/postsSlice';

const Post = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))


    let link = `/post/${post.id}`
    const trimHelper = (string, num) => {
        return string?.length > num ? string.slice(0, num - 1) + "..." : string
    }


    return (
        <article className='post'>
            <div className="post-content">
                <span className='datetime mb-4'><DateTime timestamp={post.datetime} /></span>
                <Link aria-label={`Link to ${post.title}`} to={`/post/${post.id}`}>
                    <h5 className='post-title'> {post.title}</h5>
                </Link>
                <div className="flex flex-wrap mb-2">

                </div>
                <div className='post-author'>
                    <PostAuthor userId={post.userId} />
                </div>
                <p className='post-text'>{trimHelper(`${post.body}`, 180)}</p>

                <Link aria-label={`Link to ${post.title}`} to={link}>
                    <span className='my-5 inline-flex text-right text-md text-forestGreen dark:text-outrageousOrange font-medium'> Read more 👉</span>
                </Link>
                <Reactions post={post} />
            </div>
        </article>


    )
}

export default Post
