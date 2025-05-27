import "./Clock.css";
import { useState, useEffect } from "react";

function AnalogClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function background(angle) {
        return `conic-gradient(from ${angle}deg, var(--scheme-text), var(--scheme-background))`;
    }

    function everysecond(date) {
        let hoursAngle = date.getHours() * 30;
        let minutesAngle = date.getMinutes() * 6;
        let secondsAngle = date.getSeconds() * 6;
        return { hoursAngle, minutesAngle, secondsAngle };
    }

    const { hoursAngle, minutesAngle, secondsAngle } = everysecond(time);

    return (
        <div className="clock">
            <div className="analog hours" title="hours" style={{ background: background(hoursAngle) }}></div>

            <div className="analog minutes" title="minutes" style={{ background: background(minutesAngle) }}></div>

            <div className="analog seconds" title="seconds" style={{ background: background(secondsAngle) }}></div>
        </div>
    );
}

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    return (
        <div className="clock">
            <div className="digital hours" title="hours">
                {hours}:
            </div>
            <div className="digital minutes" title="minutes">
                {minutes}:
            </div>
            <div className="digital seconds" title="seconds">
                {seconds}
            </div>
        </div>
    );
}

function Clock({ type }) {
    return (
        <div className={`clock-container ${type}`}>
            {type === "analog" && <AnalogClock />}
            {type !== "analog" && <DigitalClock />}
        </div>
    );
}

export { Clock };
