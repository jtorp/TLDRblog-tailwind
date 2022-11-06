import { useState, useEffect } from 'react'
import { TfiDownload, TfiFaceSmile, TfiLink, TfiText, TfiImage, TfiUnderline, TfiTrash } from "react-icons/tfi"
import { TbBold } from "react-icons/tb"
import Tag from './Tag'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPostById, useDeletePostMutation, useEditPostMutation } from '../features/posts/postsSlice'
import { selectAllUsers } from '../features/users/usersSlice'


const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    //hooks
    const [editPost, { isLoading }] = useEditPostMutation();
    const [deletePost] = useDeletePostMutation();


    const post = useSelector((state) => selectPostById(state, Number(id)));
    const users = useSelector(selectAllUsers);

    const [userId, setUserId] = useState(post?.userId);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedBody, setEditedBody] = useState('');
    const [editedTags, setEditedTags] = useState('');

    const canSave = [editedTitle, editedBody, userId].every(Boolean) && !isLoading;

    const onSaveEditPost = async () => {
        if (canSave) {
            try {
                await editPost({
                    id: post.id, title: editedTitle, body: editedBody, tags: editedTags, reactions: post.reactions, userId
                })
                    .unwrap()
                setEditedTitle('');
                setEditedBody('');
                setUserId('')
                //  setEditedTags('');
                navigate(`/post/${post.id}`);

            } catch (error) {
                console.error('Failed to edit/save post', error)
            }
        }
    }

    const onDeletePost = async () => {
        try {
            await deletePost({ id: post.id }).unwrap()
            setEditedTitle('');
            setEditedBody('');
            setUserId('')
            navigate('/')
        } catch (error) {
            console.error('Failed to delete post', error)
        }
    }


    useEffect(() => {
        const getOriginal = () => {
            if (post) {
                setEditedTitle(post.title)
                setEditedBody(post.body);
                setEditedTags(post.tags)
            }
            else {
                console.log("issues getting original")
            }
        }
        getOriginal()

    }, [post, setEditedBody, setEditedTags, setEditedTitle])

    const userOptions = users.map(user => (
        <option key={user.id}
            value={user.id}>
            {user.firstname} {user.lastname}
        </option>
    ))

    return (
        <main className='content-container'>
            <form onSubmit={(e) => e.preventDefault()} className="w-fit md:w-3/4 pb-44">
                <div className="mb-6">
                    <label htmlFor="postTitle" className="block mb-2 text-3xl font-medium text-gray-900 dark:text-gray-300">Title</label>
                    <input id="postTitle "
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        required
                        type="text" className="w-full bg-white border-gray-300 text-gray-900 text-sm md:text-base rounded-md outline-none
                focus:ring-erin focus:border-forestGreen block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-erin dark:focus:border-erin" />
                </div>
                <div className='w-full h-12 border-forestGreen dark:border-erin border-2 rounded-md flex flex-wrap items-baseline text-lg mt-8 mb-2'>
                    {/* {post.tags.map((tag, index) => {
                        return (
                            <div key={index} className="cursor-pointer border-2 flex gap-3 border-red-400 px-1 mr-3">
                                <span className='flex gap 3' >
                                    {tag}
                                    <TfiClose size="12" onClick={() => alert("remove tag")} />
                                </span>
                            </div>
                        )
                    })} */}
                    <input
                        type="text"
                        className='flex-1 h-12 outline-none'
                        onKeyDown={() => alert("addTag")} />
                </div>
                <label
                    className="block mb-2 text-sm font-medium dark:text-gray-300"
                    htmlFor="postAuthor"> Author</label>
                <select
                    className="mb-8 bg-gray-50 dark:bg-gray-700 border border-gray-400 text-gray-900 text-sm rounded-md
                        focus:ring-forestGreen dark:focus:ring-erin focus:border-erin block w-fit 
                        p-2.5 font-medium dark:text-gray-300 dark:placeholder-gray-300"
                    value={userId}
                    onChange={(e) => setUserId(Number(e.target.value))}
                    name="postAuthor"
                    id="postAuthor"
                    defaultValue={userId}>
                    <option value=""></option>
                    {userOptions}
                </select>
                <div className="w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                        <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                            <div className="flex items-center space-x-1 sm:pr-4">
                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <TfiImage size="18" />
                                    <span className="sr-only">Attach image</span>
                                </button>
                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <TfiFaceSmile size="18" />
                                    <span className="sr-only">Attach Emoji </span>
                                </button>
                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <TfiDownload size="18" />
                                    <span className="sr-only">download post </span>
                                </button>
                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <TfiLink size="18" />
                                    <span className="sr-only">Embed link</span>
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <TfiUnderline size="18" />
                                    <span className="sr-only">Underline</span>
                                </button>
                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <TfiText size="18" />
                                    <span className="sr-only">Text</span>
                                </button>
                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <TbBold size="21" />
                                    <span className="sr-only">bold</span>
                                </button>                            </div>
                        </div>
                        <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Full screen</span>
                        </button>

                    </div>
                    <div className="py-2 px-4 bg-white rounded-b-md dark:bg-gray-800">
                        <label htmlFor="postBody" className="sr-only"> Publish post</label>
                        <textarea
                            rows="20"
                            required
                            value={editedBody}
                            onChange={(e) => setEditedBody(e.target.value)}
                            id="postBody" className="text-sm md:text-base w-full h-full
                        outline-none block px-0 text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Edit article..." ></textarea>
                    </div>
                </div>
                <div className="flex items-center mt-8 space-x-5 sm:pr-4">
                    <button
                        onClick={onSaveEditPost}
                        disabled={!canSave}
                        className={`${!canSave ? 'filled-btn disabled-btn' : 'filled-btn'}`}>
                        Update Post
                    </button>

                    <button
                        className="filled-btn bg-red-800 dark:bg-red-900 "
                        onClick={onDeletePost}>
                        <TfiTrash size="25" /> Delete Post
                    </button>
                </div>

            </form>
        </main>

    )

}

export default EditPost;
