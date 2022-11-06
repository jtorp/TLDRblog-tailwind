import React from 'react'
import { useCountDown } from '../../hooks/useCountDown'

const CountdownTimer = ({ endDate }) => {
    const [days, hours, minutes, seconds] = useCountDown(endDate)

    if (days + hours + minutes <= 0) {
        return <h1 className='post-title'> We still working on this deadline </h1>
    } else
        return (
            <div className="text-6xl text-center flex w-full items-center justify-center">
                <div className="text-xl mr-1 font-base">in</div>
                <div className="w-24 mx-1 p-2 bg-outrageousOrange dark:bg-gray-900 text-white dark:text-erin rounded-lg">
                    <div className="font-sans leading-none" x-text="days">{days}</div>
                    <div className="font-sans uppercase text-sm leading-none">Days</div>
                </div>
                <div className="w-24 mx-1 p-2 bg-outrageousOrange dark:bg-gray-900 text-white dark:text-erin rounded-lg">
                    <div className="font-sans leading-none" x-text="hours">{hours}</div>
                    <div className="font-sans uppercase text-sm leading-none">Hours</div>
                </div>
                <div className="w-24 mx-1 p-2 bg-outrageousOrange dark:bg-gray-900 text-white  dark:text-erin rounded-lg">
                    <div className="font-sans leading-none" x-text="minutes">{minutes}</div>
                    <div className="font-sans uppercase text-sm leading-none">Minutes</div>
                </div>
                <div className="text-xl mx-1 font-base"> : </div>
                <div className="w-24 mx-1 p-2 bg-outrageousOrange dark:bg-gray-900 text-white  dark:text-erin rounded-lg">
                    <div className="font-sans leading-none" x-text="seconds">{seconds}</div>
                    <div className="font-sans uppercase text-sm leading-none">Seconds</div>
                </div>
                <div className="text-xl mr-1 font-base">🚧</div>

            </div>
        )
}

export default CountdownTimer