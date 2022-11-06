import React from 'react'

const HeaderSidebarIcon = ({ icon, tooltip = "tooltip" }) => {
    return (
        <div className='sidebar-icon group'>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {tooltip}
            </span>
        </div>
    )
}

export default HeaderSidebarIcon
