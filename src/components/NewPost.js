import { useState } from "react";
import {
    TfiDownload,
    TfiFaceSmile,
    TfiLink,
    TfiText,
    TfiImage,
    TfiUnderline
} from "react-icons/tfi";
import { TbBold } from "react-icons/tb";
import { useNavigate, Link, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAddNewPostMutation } from "../features/posts/postsSlice";
import { selectAllUsers } from "../features/users/usersSlice";
import EmojiPicker from 'emoji-picker-react';
import { selectCurrentToken } from "../features/auth/authSlice";



const NewPost = () => {
    const [addNewPost, { isLoading }] = useAddNewPostMutation()
    const navigate = useNavigate();
    // const token = useSelector(selectCurrentToken)
    // const location = useLocation()

    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [postTags, setPostTags] = useState('');

    const users = useSelector(selectAllUsers);
    const [userId, setuserId] = useState('');
    const canSave = [postTitle, postBody, userId].every(Boolean) && !isLoading;

    const onPostTagsChange = (e) => setPostTags(e.target.value);
    const onAuthorChange = (e) => setuserId(e.target.value)

    const handlePublish = async () => {
        if (canSave) {
            try {
                await
                    addNewPost({
                        title: postTitle,
                        body: postBody,
                        postTags, userId,
                    })
                        .unwrap();
                setPostTitle("");
                setPostBody("");
                setPostTags("")
                navigate("/");

            } catch (error) {
                console.error('Failed to save ', error)
            }
        }
    }


    const userOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.firstname}{user.lastname}
        </option>
    ))


    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };



    return (

        <main className="content-container">

            <form onSubmit={handlePublish} className="w-fit md:w-3/4 pb-44">
                <div className="mb-6">
                    <label
                        htmlFor="postTitle"
                        className="block mb-2 text-3xl font-medium text-gray-900 dark:text-gray-300"
                    >
                        Title
                    </label>
                    <input
                        id="postTitle "
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                        required
                        type="text"
                        className="w-full bg-white border-gray-300 text-gray-900 text-sm md:text-base rounded-md outline-none
                    focus:ring-erin focus:border-forestGreen block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-erin dark:focus:border-erin"
                    />

                    {/* <input
                        id="postTags"
                        value={postTags}
                        type="text"
                        onChange={onPostTagsChange}
                        className='w-full h-8 border-forestGreen dark:border-erin border-2 rounded-md flex flex-wrap items-baseline text-base   uppercase mt-8 mb-2'
                        placeholder="add tags for the post"
                    /> */}
                    <label
                        className="sr-only "
                        htmlFor="postAuthor"> Author</label>
                    <select
                        className="mt-10 bg-gray-50 dark:bg-gray-700 border border-gray-400 text-gray-900 text-sm rounded-md
                        focus:ring-forestGreen dark:focus:ring-erin focus:border-erin block w-full 
                        p-3 font-medium dark:text-gray-300 dark:placeholder-gray-300"
                        name="postAuthor" id="postAuthor"
                        onChange={onAuthorChange}>
                        <option value="">Author</option>
                        {userOptions}
                    </select>


                </div>
                <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                        <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                            <div className="flex items-center space-x-1 sm:pr-4">
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                >
                                    <TfiImage size="18" />
                                    <span className="sr-only">Attach image</span>
                                </button>
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                >
                                    <TfiFaceSmile size="18" />
                                    <span className="sr-only">Attach Emoji </span>

                                    {/* <EmojiPicker /> */}
                                </button>
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                >
                                    <TfiDownload size="18" />
                                    <span className="sr-only">download post </span>
                                </button>
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                >
                                    <TfiLink size="18" />
                                    <span className="sr-only">Embed link</span>
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                >
                                    <TfiUnderline size="18" />
                                    <span className="sr-only">Underline</span>
                                </button>
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                >
                                    <TfiText size="18" />
                                    <span className="sr-only">Text</span>
                                </button>
                                <button
                                    type="button"
                                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                >
                                    <TbBold size="21" />
                                    <span className="sr-only">bold</span>
                                </button>{" "}
                            </div>
                        </div>
                        <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Full screen</span>
                        </button>
                    </div>
                    <div className="py-2 px-4 bg-white rounded-b-md dark:bg-gray-800">
                        <label htmlFor="postBody" className="sr-only">
                            Publish post
                        </label>

                        <textarea
                            rows="20"
                            required
                            value={postBody}
                            onChange={(e) => setPostBody(e.target.value)}
                            id="postBody"
                            className="text-sm md:text-base w-full h-full
                            outline-none block px-0 text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="Write an article..."
                        ></textarea>
                    </div>
                </div>
                <button
                    onClick={handlePublish}
                    disabled={!canSave}
                    className={`${!canSave ? 'filled-btn disabled-btn' : 'filled-btn'}`}
                >
                    Publish post
                </button>
            </form>
        </main >
    );
};

export default NewPost;
