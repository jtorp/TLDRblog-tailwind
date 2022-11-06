import React from 'react'
import { formatDistanceToNow, parseISO, format } from "date-fns";

const DateTime = ({ timestamp }) => {
    // let timeAgo = ''
    // if (timestamp) {
    //     const datetime = parseISO(timestamp)
    //     const timePeriod = formatDistanceToNow(datetime)
    //     timeAgo = `${timePeriod} ago`
    // }


    return (
        <small> {timestamp}</small>
    )
}

export default DateTime
