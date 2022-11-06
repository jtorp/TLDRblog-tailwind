import React from 'react'
import { TfiShine } from 'react-icons/tfi'
import useDarkMode from '../hooks/useDarkMode'
import { BiMoon } from "react-icons/bi";



const ThemeSwitch = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();

    return (
        <span onClick={() => setDarkTheme(!darkTheme)}>
            {
                darkTheme ?
                    <TfiShine size="28" color='peru' className='top-navigation-icon' />
                    :
                    <BiMoon color="limegreen" size="28" className='top-navigation-icon' />
            }
        </span>


    )
}

export default ThemeSwitch
