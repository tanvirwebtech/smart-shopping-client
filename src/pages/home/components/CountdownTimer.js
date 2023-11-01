import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 1); // Set target time to 24 hours from now

    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTimeRemaining = calculateTimeRemaining(targetTime);
            setTimeRemaining(updatedTimeRemaining);

            if (updatedTimeRemaining.total <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const calculateTimeRemaining = (targetTime) => {
        const now = new Date().getTime();
        const timeDifference = targetTime - now;

        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            total: timeDifference,
            hours,
            minutes,
            seconds,
        };
    };

    return (
        <div>
            <h2>24-Hour Countdown Timer</h2>
            <div>
                {timeRemaining.hours}h : {timeRemaining.minutes}m :{" "}
                {timeRemaining.seconds}s
            </div>
        </div>
    );
};

export default CountdownTimer;
