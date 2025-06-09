import { Arrow } from "./Arrow.jsx";
import { Clock } from "./Clock.jsx";
import "./Header.css";

function Header({ setClockType, clockType, fontSize, setScheme, activeScheme, anchors, changeFontSize, logos }) {
    const {
        codepenDarkLogo,
        codepenLightLogo,
        githubDarkLogo,
        githubLightLogo,
        jsfiddleDarkLogo,
        jsfiddleLightLogo,
        linkedinLogo,
        mediumLogo,
        npmLogo,
    } = logos;
    return (
        <header className="header">
            <div>
                <Arrow />
            </div>
            <div onClick={() => setClockType(clockType === "analog" ? "digital" : "analog")}>
                <Clock type={clockType} />
            </div>
            <fieldset className="flex gap:1">
                <legend className="">Settings</legend>
                <div className="flex gap:0 f:center">
                    <a
                        onClick={() => changeFontSize("decrease")}
                        className="button font-button"
                        title="Decrease font size"
                    >
                        {fontSize - 1}
                    </a>
                    <a onClick={() => changeFontSize("reset")} className="button font-button" title="Reset font size">
                        reset
                    </a>
                    <a
                        onClick={() => changeFontSize("increase")}
                        className="button font-button"
                        title="Increase font size"
                    >
                        {fontSize + 1}
                    </a>
                </div>
                <div className="flex gap:0 ta:r f:center">
                    <a
                        onClick={() => setScheme("light")}
                        className={`button scheme-button sb:light ${activeScheme === "light" ? "active" : ""}`}
                    >
                        Light
                    </a>
                    <a
                        onClick={() => setScheme("dark")}
                        className={`button scheme-button sb:dark ${activeScheme === "dark" ? "active" : ""}`}
                    >
                        Dark
                    </a>
                </div>
            </fieldset>
            <fieldset className="flex f:center">
                <legend>navigation</legend>
                <nav role="navigation" className="flex gap:2 ta:c f:center rg:0">
                    {anchors.map((anchor, index) => (
                        <a
                            key={`nav-${index}`}
                            className="anchor tt:u"
                            title={anchor.text}
                            href={anchor.href}
                            target="_self"
                        >
                            {anchor.text}
                        </a>
                    ))}
                </nav>
            </fieldset>
            <fieldset>
                <legend>social</legend>
                <div className="social flex gap:0 ta:c f:center">
                    <a href="https://github.com/iamanubhavsaini/" target="_blank" rel="nofollow" title="Github">
                        {activeScheme === "dark" && <img className="logo" src={githubLightLogo} alt="github" />}
                        {activeScheme === "light" && <img className="logo" src={githubDarkLogo} alt="github" />}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anubhavsaini-com/"
                        target="_blank"
                        rel="nofollow"
                        title="LinkedIn"
                    >
                        <img className="logo" src={linkedinLogo} alt="linkedin" />
                    </a>
                    <a href="https://www.npmjs.com/~iamanubhavsaini" target="_blank" rel="nofollow" title="NPM">
                        <img className="logo" src={npmLogo} alt="npm" />
                    </a>
                    <a href="https://medium.com/@anubhavsaini.com" target="_blank" rel="nofollow" title="Medium">
                        <img className="logo" src={mediumLogo} alt="medium" />
                    </a>
                    <a href="https://codepen.io/IAmAnubhavSaini" target="_blank" rel="nofollow" title="CodePen">
                        {activeScheme === "dark" && <img className="logo" src={codepenDarkLogo} alt="codepen" />}
                        {activeScheme === "light" && <img className="logo" src={codepenLightLogo} alt="codepen" />}
                    </a>
                    <a href="https://jsfiddle.net/u/jshacker/fiddles/" target="_blank" rel="nofollow" title="jsfiddle">
                        {activeScheme === "dark" && <img className="logo" src={jsfiddleDarkLogo} alt="jsfiddle" />}
                        {activeScheme === "light" && <img className="logo" src={jsfiddleLightLogo} alt="jsfiddle" />}
                    </a>
                </div>
            </fieldset>
        </header>
    );
}

export { Header };
