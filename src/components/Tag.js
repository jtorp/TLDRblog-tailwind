import React from 'react'
import { Link } from 'react-router-dom'

const Tag = ({ text }) => {
    return (
        <Link to={`/tags/${text}`}>
            <small className="mr-3 text-xs md: text:sm font-semibold uppercase dark:text-erin text-gray-600">
                {/* {text.split(',').join('-')} */}
                {text}
            </small>
        </Link>
    )
}

export default Tag
