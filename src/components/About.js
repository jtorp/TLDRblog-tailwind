import React from 'react'
import PostAuthor from "./PostAuthor"
const About = () => {

    return (
        <section className="w-screen overflow-auto px-0 transition duration-300 ease-in-out text-stone-900 dark:text-white dark:bg-gray-800">
            <div className='flex flex-col lg:flex-row h-auto pb-40 justify-around align-middle mt-10 lg:px-12 lg:mb-16'>
                <div className='h-auto lg:mt-16 '>
                    <div className="flex md:mt-16 mr-0 ml-20">
                        <div className='flex'>
                            <img className=' lg:wh-450 absolute z-0' src="https://images.unsplash.com/photo-1533135091724-62cc5402aa20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="bg-backdrop" />
                        </div>
                        <div className='scale-75 sm:scale-100 ml-20 mt-16'>
                            <img
                                className='wh-450 object-cover object-center z-10 relative  filter grayscale hover:grayscale-0 cursor-pointer'
                                src="https://miro.medium.com/max/640/1*5unecQiI9HZW2jzTqIWOIA.jpeg" alt="author picture" />
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col lg:w-2/6 sm:mt-16 mr-0 ml-20'>
                    <h1 className='text-center font-extralight tracking-wider uppercase mb-2 text-lg'>Welcome to</h1>
                    <div className='text-center font-sans font-base tracking-tight uppercase text-3xl'> TL;DR </div>
                    <div className=" pb-8 px-8 md:px-4 md:py-4 flex-wrap flex flex-col gap-5 sm:text-center leading-loose mt-10 text-base transition-all">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque temporibus quis aliquam expedita enim optio cupiditate iure, error dicta modi vel veritatis deleniti! Impedit recusandae illo reiciendis. Perferendis alias quibusdam cumque inventore.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sunt esse consequuntur recusandae tenetur quaerat, atque voluptatum debitis. Facere, voluptates omnis. Odit quae dicta assumenda non illum itaque, similique nam explicabo ipsum cumque incidunt sapiente. Error tempore officia consequuntur? Incidunt eaque iusto voluptas ex! Ex reiciendis totam, quisquam exercitationem officia quis voluptate ducimus modi voluptates.</p>
                    </div>
                    <button className="lowercase text-base font-bold text-gray-700 dark:text-outrageousOrange leading-relaxed underline mt-5"
                        onClick={() => alert("email popup")}
                    > get in with us</button>
                </div>

            </div>
            {/* FAQ section */}

            <ul className="ml-44 max-w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">Editor guide</li>
                <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">My account settings</li>
                <li className="py-2 px-4 w-full rounded-b-lg">Report issues</li>
            </ul>

        </section>

    )
}

export default About
