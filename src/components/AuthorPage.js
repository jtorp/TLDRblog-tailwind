import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPostsByUserIdQuery } from '../features/posts/postsSlice'
import { Link, useParams } from 'react-router-dom'
import { selectUserById } from '../features/users/usersSlice'
import { TfiLocationPin, TfiEmail, TfiCalendar } from 'react-icons/tfi'

const AuthorPage = () => {
    const { userId } = useParams();
    const user = useSelector(state => selectUserById(state, Number(userId)))
    const {
        data: data,
        isSuccess,
        isLoading,
        isError,
        error
    } = useGetPostsByUserIdQuery(userId)

    let authorPosts;
    if (isLoading) {
        authorPosts = <div className='loader'>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    } else if (isSuccess) {
        const { ids, entities } = data
        authorPosts = ids?.map(id => (

            <li key={id} className="sm:py-4">
                <div className="py-2 w-11/12">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {entities[id].datetime}
                        </p>
                        <p className="post-title truncate linkTo">
                            <Link
                                to={`/post/${id}`}>{entities[id].title}
                            </Link>
                        </p>
                    </div>
                    <div className="flex bg-blue-300">

                        <p>
                            {entities[id].reactions[2]}
                        </p>
                    </div>
                </div>
            </li>
        ))
    } else if (isError) {
        authorPosts = <h4 className='text-lg py-4  bg-outrageousOrange'>
            {error.error}
        </h4>
    }


    return (
        <main className="content-container">
            <section className="ml-24 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row w-11/12 md:max-w-3/4 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 md:pr-14 ">
                <img className="md:h-full md:w-1/4  object-cover w-full h-4/6 rounded-t-lg  md:rounded-none md:rounded-l-lg  dark:hover:grayscale-0  dark:grayscale" src={user?.picture ? user.picture : "https://www.getfoundquick.com/wp-content/uploads/2014/01/Capture-1.jpg"} alt="userprofileic" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className='flex flex-col items-center gap-2 mb-4 pt-3 pb-4'>
                        <h5 className="capitalize  text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{user?.firstname + " "}{user?.lastname} </h5>
                        <span className='text-lg md:text-xl font-base capitalize'>{user?.work.title} {user?.work.company ? "@ " + user.work.company : " "}</span>
                    </div>

                    <p className="mb-3 ml-4 font-normal md:leading-8 text-gray-700 dark:text-gray-400">{user?.about}</p>
                    <hr className="divider" />

                    <div className=' ml-4 flex flex-col align-middle gap-4  text-gray-500 truncate dark:text-gray-400'>
                        <span className='items-center gap-3 flex'><TfiCalendar size="16" />{user?.joined}</span>
                        <span className='items-center gap-3 flex'><TfiLocationPin size="16" /> {user?.location}</span>
                        <span className='items-center gap-3 flex linkTo'><TfiEmail size="16" />
                            <Link to="/">
                                {user?.email}
                            </Link>
                        </span>


                    </div>
                </div>
            </section>
            <h1 className='my-11 text-4xl font-semibold'> {user.firstname}'s posts</h1>
            <section className='ml-24 flex flex-col items-center justify-start bg-gray-200 rounded-lg border shadow-md md:flex-row w-11/12 md:w-3/4 dark:border-gray-700 dark:bg-gray-600 p-4
            mb-80'>
                <ol className='w-11/12 '
                >{authorPosts.length ? authorPosts : "This author doesn't have published posts yet"}</ol>
            </section >

        </main >
    )
}

export default AuthorPage
