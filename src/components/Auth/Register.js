import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <main className='content-container '>
            <div className="mb-80 p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create account</h5>
                    <div className="relative my-6 w-full group">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email"
                            name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@email.com" required="" />
                    </div>
                    <div className=" mb-6 w-full group">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="********" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className=" mb-6 w-full group">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">Confirm password</label>
                        <input type="password" name="password" id="password" placeholder="********" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-4">
                        <div className="relative z-0 mb-6 w-full group">
                            <label for="firstname" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">First name </label>
                            <input type="text" name="firstname" id="firstname" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />

                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <label for="lastname" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">Last name </label>
                            <input type="text" name="lastname" id="lastname" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                    </div>
                    <div className="mb-6 w-full group">
                        <label for="gender" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">Gender</label>
                        <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                            <option selected> please select </option>
                            <option value="male">Male</option>
                            <option value="female">Felame</option>
                            <option value="DE">Prefer not to say</option>
                        </select>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-4">
                        <div className="mb-6 w-full group">
                            <label for="firstname" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">Occupation</label>
                            <input type="text" name="work" id="work" placeholder="e.g. writer " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className="mb-6 w-full group">
                            <label for="company" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">Company</label>
                            <input type="text" name="company" id="company" placeholder="e.g. Google" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                    </div>

                    <fieldset className="my-7  w-full flex flex-col">
                        <legend className="sr-only">Checkbox variants</legend>
                        <div className=" mb-4">
                            <input checked id="terms" type="checkbox" value="" className="w-4 h-4 text-outrageousOrange bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                            <label for="terms" className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">I agree to the <Link to="/coming-soon" className="text-outrageousOrange hover:underline dark:text-erin">terms and conditions</Link>.</label>
                        </div>
                        <div className="">
                            <input id="agebox" type="checkbox" value="" className="w-4 h-4 text-outrageousOrange bg-gray-100 rounded-lg border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="agebox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" >I am 18 years or older</label>
                        </div>
                    </fieldset>

                    <button type="submit" className="w-full text-white bg-forestGreen  hover:brightness-110 focus:ring-4 focus:outline-none focus:ring-forestGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-outrageousOrange  dark:focus:ring-outrageousOrange">Create new account</button>
                </form>
            </div>
        </main>
    )
}

export default Register