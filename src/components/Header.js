import React from 'react'
import HeaderSidebarIcon from './HeaderSidebarIcon'
import { TfiPencilAlt, TfiStar, TfiHome, } from 'react-icons/tfi'
import { Link, useNavigate } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import browser from "../assets/browser.svg"
import pen from "../assets/pen.svg"
import lightbulb from "../assets/lightbulb.svg"



const Header = ({ name }) => {
    const navigate = useNavigate()


    Header.defaultProps = {
        name: "default name"
    }
    const { width } = useWindowSize();
    return (
        <header className='fixed top-0 left-0 py-6 h-screen w-20 flex flex-col
                  bg-gray-200 dark:bg-gray-900 shadow-lg"'>
            {width < 480 ?
                <div onClick={() => navigate('/coming-soon')}>
                    <img className='logo' src={pen} alt="bulb" />
                </div> :
                width < 976 ?
                    <div onClick={() => navigate('/coming-soon')}>
                        <img className='logo' src={lightbulb} alt="bulb" />
                    </div> :
                    <div onClick={() => navigate('/coming-soon')}>
                        <img className='logo' src={browser} alt="browser" />
                    </div>
            }


            <hr className="divider" />
            <Link to="/">
                <HeaderSidebarIcon tooltip='home 🙆‍♀️' icon={<TfiHome size="28" />} /> </Link>
            <Link to="post">
                <HeaderSidebarIcon tooltip='write new 🤦‍♀️' icon={<TfiPencilAlt size="28" />} />
            </Link>
            <Link to="author">
                <HeaderSidebarIcon tooltip='authors 🤷‍♀️' icon={<TfiStar size="28" />} />
            </Link>
            {/* <Link to='about/faq'>
                <HeaderSidebarIcon tooltip='about 👩‍💻' icon={<TfiInfoAlt size="28" />} />
            </Link> */}
            <hr className="divider" />
        </header>
    )
}

export default Header
