import { useEffect, useState } from 'react'

export const useCountDown = (endDate) => {
    const targetEndDate = new Date(endDate).getTime();


    const [countdown, setCountdown] = useState(
        targetEndDate - new Date().getTime()
    )

    useEffect(() => {
        const cdown = setInterval(() => {
            setCountdown(targetEndDate - new Date().getTime())
        }, 1000)

        return () => {
            clearInterval(cdown)
        }
    }, [targetEndDate]);

    return getActualValues(countdown)
};

const getActualValues = (countdown) => {
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds]
}
