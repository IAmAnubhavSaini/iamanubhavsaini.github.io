import { useEffect, useRef, useState } from "react";
import ChevronLeft from "../assets/chevron_left.svg";
import ChevronRight from "../assets/chevron_right.svg";
import FirstPage from "../assets/first_page.svg";
import LastPage from "../assets/last_page.svg";
import "./Driver.css";

function Driver({ anchors }) {
    const posRef = useRef(0);
    const [pos, setPos] = useState(0);

    const updatePos = (newPos) => {
        posRef.current = newPos;
        setPos(newPos); // only needed when UI must reflect pos
    };

    useEffect(() => {
        const onHashChange = () => {
            const idx = anchors.findIndex((a) => a.href === window.location.hash);
            if (idx >= 0) updatePos(idx);
        };
        window.addEventListener("hashchange", onHashChange);
        onHashChange();
        return () => window.removeEventListener("hashchange", onHashChange);
    }, [anchors]);

    useEffect(() => {
        const el = document.getElementById(anchors[posRef.current]?.href.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [anchors]);

    const handlePosChange = (newPos) => {
        if (newPos >= 0 && newPos < anchors.length) {
            const href = anchors[newPos].href;
            if (href !== window.location.hash) {
                window.location.hash = href;
            }
        }
    };

    return (
        <div className="driver-container flex f:center">
            <div className="driver flex gap:2">
                <button className="button driver-button" onClick={() => handlePosChange(0)}>
                    <img src={FirstPage} alt="First" className="driver-icon" />
                </button>
                <button className="button driver-button" onClick={() => handlePosChange(Math.max(0, pos - 1))}>
                    <img src={ChevronLeft} alt="Previous" className="driver-icon" />
                </button>
                <button
                    className="button driver-button"
                    onClick={() => handlePosChange(Math.min(anchors.length - 1, pos + 1))}
                >
                    <img src={ChevronRight} alt="Next" className="driver-icon" />
                </button>
                <button className="button driver-button" onClick={() => handlePosChange(anchors.length - 1)}>
                    <img src={LastPage} alt="Last" className="driver-icon" />
                </button>
            </div>
        </div>
    );
}

export { Driver };
