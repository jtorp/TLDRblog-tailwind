import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState()

    return (
        <main className='content-container'>

            <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" >
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in</h5>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">Your email</label>
                        <input type="email"
                            value={email}
                            name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@email.com" required="" />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">Remember me</label>
                        </div>
                        <Link to="/coming-soon" className="ml-auto text-sm text-outrageousOrange hover:underline dark:text-erin">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="w-full text-white bg-forestGreen    hover:brightness-110 focus:ring-4 focus:outline-none focus:ring-forestGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-outrageousOrange  dark:focus:ring-outrageousOrange">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/register" className="text-outrageousOrange hover:underline dark:text-erin">Create account</Link>
                    </div>
                </form>
            </div>

        </main>
    )
}

export default Login