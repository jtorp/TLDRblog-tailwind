import React from 'react'
import { useNavigate } from 'react-router-dom';
import CountdownTimer from './CountdownTimer'

const UnderConstruction = () => {
    const navigate = useNavigate();

    const WEEK = 30 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const targetDate = NOW_IN_MS + WEEK;

    return (
        <main className='min-w-screen min-h-screen bg-gray-300 dark:bg-gray-800
        text-stone-900 dark:text-white flex  items-center justify-center px-5 py-5'>
            <div className="ml-24">
                <h1 className="post-title text-center mb-3 ">Coming Soon  </h1>

                <CountdownTimer endDate={targetDate} />
                <p
                    onClick={() => navigate(-1, { replace: true })}
                    className="underline cursor-pointer hover:text-outrageousOrange text-sm text-center mt-3">Go back</p>
            </div>


        </main>
    )
}

export default UnderConstruction