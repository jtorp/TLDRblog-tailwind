import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from '../features/users/usersSlice'
import { TfiEmail } from "react-icons/tfi"

const AuthorList = () => {
    const users = useSelector(selectAllUsers);


    const renderedAuthors = users.map(user => (

        <div className='w-72 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:scale-105 hover:shadow-xl duration-300 dark:bg-gray-900 dark:border-gray-700'
            key={user.id}
        >
            <div className="flex justify-end px-4 pt-4">
                {user.id}
            </div>
            <div className="flex flex-col items-center pb-10">
                <Link to={`/author/${user.id}`}>
                    <img className="mb-3 w-24 h-24 rounded-full object-cover shadow-lg"
                        src={user.picture ? user.picture : user.avatar}
                        alt="useravatar" />
                </Link>

                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.firstname} {user.lastname}</h5>
                <span className="flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
                    work
                    <small className="text-sm text-gray-800 dark:text-gray-400">{user.work.title}</small>
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <Link to={`${user.id}`} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> {user.firstname}'s page</Link>
                    <button onClick={() => alert("MAIL: " + user.email)} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><TfiEmail size="28" /></button>
                </div>
            </div>


        </div>
    ))
    return (
        <main className="content-container ml-20">
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">Our fantastic authors</h1>
                <h1 className="text-xl">@TL;DR</h1>
            </div>
            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-6 gap-x-4 pb-44 '>
                {renderedAuthors}
            </div >
        </main>

    )
}

export default AuthorList
