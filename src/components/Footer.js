import React from 'react'
import { SiTiktok, SiFacebook, SiTwitter, SiInstagram, } from 'react-icons/si'
import { BsLightning } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer
            className='footer-container'>
            <p className='flex flex-nowrap px-4 py-1 w-fit  bg-forestGreen text-white text-xl font-medium capitalize rounded-md relative -top-16 '> TL;DR </p>

            <div className="footer-menu">
                <div className="soc-media-icons">
                    <Link to="/coming-soon" className="soc-media-link"><SiFacebook size="20" /> </Link>
                    <Link to="/coming-soon" className="soc-media-link"><SiTwitter size="20" /></Link>
                    <Link to="/coming-soon" className="soc-media-link"><SiTiktok size="20" /> </Link>
                    <Link to="/coming-soon" className="soc-media-link"><SiInstagram size="20" /></Link>
                </div>
                <p className='ph-copyright'>Copyright ©️ {`${new Date().getFullYear()}`} Julia Torp. All Rights reserved. | Powered by <BsLightning size="14" /> [insert] .</p>
            </div>
        </footer>
    )
}

export default Footer