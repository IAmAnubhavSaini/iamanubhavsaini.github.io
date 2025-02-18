import './Clock.css'
import { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function background(angle) {
        return `conic-gradient(from ${angle}deg, var(--primary-color-background), var(--primary-color-text))`;
    }

    function everysecond(date) {
        let hoursAngle = date.getHours() * 30;
        let minutesAngle = date.getMinutes() * 6;
        let secondsAngle = date.getSeconds() * 6;
        return { hoursAngle, minutesAngle, secondsAngle };
    }

    const { hoursAngle, minutesAngle, secondsAngle } = everysecond(time);

    return (
        <div className="flex clock">

            <div
                className="analog hours moving-border"
                title="hours"
                style={{ background: background(hoursAngle) }}
            ></div>

            <div
                className="analog minutes moving-border"
                title="minutes"
                style={{ background: background(minutesAngle) }}
            ></div>

            <div
                className="analog seconds moving-border"
                title="seconds"
                style={{ background: background(secondsAngle) }}
            ></div>
        </div>
    );
}

export default Clock;
