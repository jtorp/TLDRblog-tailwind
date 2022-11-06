import { TfiSearch } from 'react-icons/tfi'
import ThemeSwitch from './ThemeSwitch'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="top-navigation">
            <form className='search' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search post" aria-label='search post' className="sr-only">search</label>
                <input
                    className='search-input'
                    type="text"
                    id="search"
                    placeholder='search...'
                //value={search}
                // onChange={(e) => setSearch(e.target.value)}
                />
                <TfiSearch size='24' className='text-secondary my-auto rotate-90' />
            </form>
            <div className=" md:mx-3 h-full flex md:gap-2 items-center md:order-2 ">
                <Link to="login" className="text-gray-800 dark:text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5 mr-2 dark:hover:bg-gray-600 focus:outline-none dark:focus:ring-gray-800">Login</Link>

                <Link to="register" className="text-white bg-forestGreen hover:brightness-110 focus:ring-4 focus:ring-erin font-medium rounded-lg text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:erin dark:hover:brightness-110 focus:outline-none ">Sign up</Link>
                <ThemeSwitch />
            </div>
        </nav>
    )
}

export default Nav