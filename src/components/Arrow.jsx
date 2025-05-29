import { useRef, useState, useEffect } from "react";
import "./Arrow.css";

function Arrow() {
    const arrowRef = useRef(null);
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = arrowRef.current.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const rad = Math.atan2(e.clientY - cy, e.clientX - cx);
            console.log({ rad });
            setAngle((rad * 180) / Math.PI + 90);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={arrowRef}
            className="arrow"
            style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: "center",
            }}
        ></div>
    );
}

export { Arrow };
