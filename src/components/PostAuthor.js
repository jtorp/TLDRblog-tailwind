import React from 'react'
import { selectAllUsers } from '../features/users/usersSlice'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find((user) => user.id === userId);

    return (

        <div className="py-3 sm:py-4">
            {author ?
                <Link to={`/author/${userId}`}>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img className="object-cover object-center w-10 h-10 rounded-full" src={author.picture ? author.picture : author.avatar} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {author.firstname} <b> {author.lastname}</b>
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                Joined on {author.joined}
                            </p>
                        </div>
                    </div>
                </Link>
                : "Anonymous"}
        </div>

    )
}

export default PostAuthor
