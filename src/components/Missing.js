import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
    return (
        <main className='content-container'>
            <div className="flex flex-col items-center justify-center  md:mt-24 md:flex-row md:mx-8 md:items-center ">
                <div className="space-x-2 py-12 md:space-y-5 md:justify-start">
                    <h1 className="text-4xl md:text-8xl font-extrabold leading-9 tracking-tight text-gray-800 dark:text-gray-100 md:border-r-2 md:px-6 md:leading-14">
                        404
                    </h1>
                </div>
                <div className="max-w-md ">
                    <p className="mb-4 text-xl md:text-2xl  font-bold leading-normal ">
                        Sorry this is page is lost.
                    </p>

                    <p className="mb-8 md:text-md">
                        Not to worry, you can find plenty of other things on our homepage.
                    </p>
                    <Link to="/">
                        <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-green-500 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-green-800 focus:outline-none dark:hover:bg-outrageousOrange">
                            Back home
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Missing
