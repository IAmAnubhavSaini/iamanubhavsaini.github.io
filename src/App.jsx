import { objectToKeyValueArray as o2kva } from "otoa";
import { useEffect, useState } from "react";
import "./App.css";
import { ExternalAnchor } from "./components/Anchor";
import { Box } from "./components/Box";
import { WorkExperienceList } from "./components/WorkExperience";
import { Driver } from "./components/Driver";

import Clock from "./components/Clock";
import { FizzBuzz } from "./components/FizzBuzz";
import { NamedRowTable } from "./components/Table";
import { Tags } from "./components/Tag";
import {
    cliapps,
    cliappsList,
    workExperiences,
    libraries,
    librariesList,
    microservices,
    microservicesList,
    tableData,
    webapps,
    webappsList,
} from "./data";

import githubDarkLogo from "./assets/github-mark.svg";
import githubLightLogo from "./assets/github-mark-white.svg";
import linkedinLogo from "./assets/linkedin.svg";
import npmLogo from "./assets/npm.svg";
import mediumLogo from "./assets/medium.png";

function App() {
    const defaultFontSize = 13;
    const defaultClockType = "analog";
    const [activeScheme, setActiveScheme] = useState("dark");
    const [activeTheme, setActiveTheme] = useState("gray");
    const [fontSize, setFontSize] = useState(defaultFontSize);
    const [clockType, setClockType] = useState(defaultClockType);
    const [shouldDisplayColorThemes, $shouldDisplayColorThemes] = useState(false);

    const anchors = [
        { href: "#top", text: "top" },
        { href: "#workExperiences", text: "work" },
        { href: "#techstack", text: "tech-stack" },
        { href: "#webapps", text: "web-apps" },
        { href: "#cliapps", text: "cli-apps" },
        { href: "#microservices", text: "microservices" },
        { href: "#libraries", text: "libraries" },
        { href: "#oldprojects", text: "old-projects" },
    ];

    const setScheme = (scheme) => {
        document.documentElement.setAttribute("data-scheme", scheme);
        localStorage.setItem("preferred-scheme", scheme);
        setActiveScheme(scheme);
    };

    const setTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("preferred-theme", theme);
        setActiveTheme(theme);
    };

    const changeFontSize = (action) => {
        let newSize;
        switch (action) {
            case "increase":
                newSize = Math.min(fontSize + 1, 25); // max 24px
                break;
            case "decrease":
                newSize = Math.max(fontSize - 1, 9); // min 8
                break;
            case "reset":
                newSize = 13; // default size
                break;
            default:
                return;
        }
        document.documentElement.style.fontSize = `${newSize}px`;
        localStorage.setItem("preferred-font-size", newSize.toString());
        setFontSize(newSize);
    };

    useEffect(() => {
        // Load saved preferences or set defaults
        const savedScheme = localStorage.getItem("preferred-scheme") || "dark";
        const savedTheme = localStorage.getItem("preferred-theme") || "gray";
        const savedFontSize = parseInt(localStorage.getItem("preferred-font-size")) || 13;

        setScheme(savedScheme);
        setTheme(savedTheme);
        document.documentElement.style.fontSize = `${savedFontSize}px`;
        setFontSize(savedFontSize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        const hash = `#${id}`;
                        const index = anchors.findIndex((a) => a.href === hash);
                        if (index >= 0 && hash !== window.location.hash) {
                            window.history.replaceState(null, "", hash);
                        }
                        break;
                    }
                }
            },
            { rootMargin: "0px 0px -80% 0px", threshold: 0 }
        );

        anchors.forEach((a) => {
            const el = document.getElementById(a.href.slice(1));
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [anchors]);

    return (
        <div className="flex f:v gap:page" id="top">
            {/* <div className="hero flex f:v gap:0 f:sb ff:bodoni-moda">
                <div className="type:massive">DESIGN</div>
                <div className="type:massive tt:u">Develop</div>
                <div className="type:massive tt:u">Deploy</div>
            </div> */}
            <div className="flex gap:8" id="app">
                <header
                    className="width w:100p sticky s:t0 s:l0 scroll:y z:100 flex f:center"
                    style={{ height: `calc(${fontSize}px * 6)` }}
                >
                    <div className="flex">
                        <div
                            className="flex"
                            onClick={() => setClockType(clockType === "analog" ? "digital" : "analog")}
                        >
                            <Clock type={clockType} />
                        </div>

                        <div className="flex">
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
                                    <a
                                        onClick={() => changeFontSize("reset")}
                                        className="button font-button"
                                        title="Reset font size"
                                    >
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
                                        className={`button scheme-button sb:light ${
                                            activeScheme === "light" ? "active" : ""
                                        }`}
                                    >
                                        Light
                                    </a>
                                    <a
                                        onClick={() => setScheme("dark")}
                                        className={`button scheme-button sb:dark ${
                                            activeScheme === "dark" ? "active" : ""
                                        }`}
                                    >
                                        Dark
                                    </a>
                                </div>
                                {shouldDisplayColorThemes && (
                                    <div className="flex gap:1 ta:r f:v">
                                        <a
                                            onClick={() => setTheme("teal")}
                                            className={`button theme-button tb:teal ${
                                                activeTheme === "teal" ? "active" : ""
                                            }`}
                                        >
                                            Teal
                                        </a>
                                        <a
                                            onClick={() => setTheme("magenta")}
                                            className={`button theme-button tb:magenta ${
                                                activeTheme === "magenta" ? "active" : ""
                                            }`}
                                        >
                                            Magenta
                                        </a>
                                        <a
                                            onClick={() => setTheme("gray")}
                                            className={`button theme-button tb:gray ${
                                                activeTheme === "gray" ? "active" : ""
                                            }`}
                                        >
                                            Gray
                                        </a>
                                    </div>
                                )}
                            </fieldset>
                            <fieldset className="flex f:center">
                                <legend>navigation</legend>
                                <nav role="navigation" className="flex gap:2 ta:c f:center">
                                    {anchors.map((anchor, index) => (
                                        <a
                                            key={`nav-${index}`}
                                            className="tt:u"
                                            title={anchor.text}
                                            href={anchor.href}
                                            target="_self"
                                        >
                                            {anchor.text}
                                        </a>
                                    ))}

                                    {/* <a href="#cssfizzbuzz">css fizzbuzz</a> */}
                                </nav>
                            </fieldset>
                            <fieldset>
                                <legend>social</legend>
                                <div className="social flex gap:0 ta:c f:center">
                                    <a
                                        href="https://github.com/iamanubhavsaini/"
                                        target="_blank"
                                        rel="nofollow"
                                        title="Github"
                                    >
                                        {activeScheme === "dark" && (
                                            <img className="logo" src={githubLightLogo} alt="github" />
                                        )}
                                        {activeScheme === "light" && (
                                            <img className="logo" src={githubDarkLogo} alt="github" />
                                        )}
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/anubhavsaini-com/"
                                        target="_blank"
                                        rel="nofollow"
                                        title="LinkedIn"
                                    >
                                        <img className="logo" src={linkedinLogo} alt="linkedin" />
                                    </a>
                                    <a
                                        href="https://www.npmjs.com/~iamanubhavsaini"
                                        target="_blank"
                                        rel="nofollow"
                                        title="NPM"
                                    >
                                        <img className="logo" src={npmLogo} alt="npm" />
                                    </a>
                                    <a
                                        href="https://medium.com/@anubhavsaini.com"
                                        target="_blank"
                                        rel="nofollow"
                                        title="Medium"
                                    >
                                        <img className="logo" src={mediumLogo} alt="medium" />
                                    </a>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </header>
                <div className="flex f:v gap:0">
                    <div className="container">
                        <div className="container-item">
                            <div className="flex f:v ta:c gap:2">
                                <div className="flex f:v gap:0">
                                    <div className="heading tt:u fw:b type:huge">Anubhav Saini</div>
                                    <div className="subheading tt:u ta:c fs:i">Design & Development</div>
                                    <div className="minorheading ta:c ff:libre-bodoni fs:i">India / Remote</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="workExperiences" className="container">
                        <div className="container-item">
                            <div>
                                <div className="subheading tt:u">Work Experiences</div>
                                <div className="near-heading">2011-current</div>
                            </div>

                            <WorkExperienceList experiences={workExperiences} klass="flex f:v" />
                        </div>
                    </div>
                    {/* <div className="container">
                <div className="container-item">
                    <div className="subheading tt:u">Stacks</div>
                    <div className="flex">
                        <Stack name="tech" stack={techStack} />
                        <Stack name="tool" stack={toolStack} />
                    </div>
                </div>
            </div> */}
                    <div id="techstack" className="container">
                        <div className="container-item">
                            <div>
                                <div className="subheading tt:u">Tech stack</div>
                            </div>
                            <NamedRowTable name="tech" data={tableData} />
                        </div>
                    </div>
                    <fieldset>
                        <legend className="tt:u">Code</legend>
                        <div className="parallax web z:100 sticky"></div>
                        <div className="parallax one z:100 sticky">
                            <div className="titled">WEB</div>
                        </div>
                        <div id="webapps" className="container">
                            <div className="container-item">
                                <div>
                                    <div className="subheading tt:u">Web Applications</div>
                                    <div className="near-heading">2011-current</div>
                                </div>
                                <div className="flex f:reverse gap:4">
                                    {webapps.map((app, index) => (
                                        <a href={app.url} key={`webapp-${index}`} target="_blank" rel="nofollow">
                                            <Box
                                                klass={`wide light ${
                                                    app.highlight ? "highlight h:" + app.highlight : ""
                                                } ${app.klass ? app.klass : ""}`}
                                                name={app.title}
                                            />
                                            {app.tags && (
                                                <div className="tags">
                                                    {app.tags.map((tag, tagIndex) => (
                                                        <div
                                                            className={`tag ${tag}`}
                                                            key={`webapp-${index}-tag-${tagIndex}`}
                                                        >
                                                            {tag}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </a>
                                    ))}
                                </div>
                                <div className="vspacer"></div>
                                <div className="flex f:v gap:8">
                                    {webappsList.map((app, index) => (
                                        <div key={`webapp-list-${index}`} className="flex f:v list gap:0">
                                            <div className="tt:u fw:b">{app.title}</div>
                                            <div>
                                                <a href={app.url} target="_blank" rel="nofollow">
                                                    {app.url}
                                                </a>
                                            </div>
                                            <div className="tags">
                                                {app.tags &&
                                                    app.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={`webapp-list-${index}-tag-${tagIndex}`}
                                                            className="tag"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="parallax terminal z:100 sticky"></div>
                        <div className="parallax one z:100 sticky">
                            <div className="titled">CLI</div>
                        </div>

                        <div id="cliapps" className="container">
                            <div className="container-item">
                                <div>
                                    <div className="subheading tt:u">CLI Applications</div>
                                    <div className="near-heading">2013-current</div>
                                </div>

                                <div className="flex f:reverse gap:4">
                                    {cliapps.map((app, index) => (
                                        <a href={app.url} key={`cliapp-${index}`} target="_blank" rel="nofollow">
                                            <Box
                                                klass={`light ${app.highlight ? "highlight h:" + app.highlight : ""} ${
                                                    app.klass ? app.klass : ""
                                                }`}
                                                name={app.title}
                                            />
                                            {app.tags && (
                                                <div className="tags">
                                                    {app.tags.map((tag, tagIndex) => (
                                                        <div
                                                            key={`cliapp-${index}-tag-${tagIndex}`}
                                                            className={`tag ${tag}`}
                                                        >
                                                            {tag}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </a>
                                    ))}
                                </div>
                                <div className="vspacer"></div>
                                <div className="flex f:v gap:8">
                                    {cliappsList.map((app, index) => (
                                        <div key={`cliapps-list-${index}`} className="flex f:v list gap:0">
                                            <div className="tt:u fw:b">{app.title}</div>
                                            <div>
                                                <a href={app.url} target="_blank" rel="nofollow">
                                                    {app.url}
                                                </a>
                                            </div>
                                            <div className="tags">
                                                {app.tags &&
                                                    app.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={`cliapps-list-${index}-tag-${tagIndex}`}
                                                            className="tag"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div id="microservices" className="container">
                            <div className="container-item">
                                <div>
                                    <div className="subheading tt:u">Microservices</div>
                                    <div className="near-heading">2016-current</div>
                                </div>
                                <div className="flex">
                                    {microservices.map((app, index) => (
                                        <a href={app.url} key={`service-${index}`} target="_blank" rel="nofollow">
                                            <Box
                                                klass={`thin wide ${
                                                    app.highlight ? "highlight h:" + app.highlight : ""
                                                } ${app.klass ? app.klass : ""}`}
                                                name={app.title}
                                            />
                                            {app.tags && (
                                                <div className="tags">
                                                    {app.tags.map((tag, tagIndex) => (
                                                        <div
                                                            key={`service-${index}-tag-${tagIndex}`}
                                                            className={`tag ${tag}`}
                                                        >
                                                            {tag}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </a>
                                    ))}
                                </div>
                                <div className="vspacer"></div>
                                <div className="flex f:v gap:4">
                                    {microservicesList.map((app, index) => (
                                        <div key={`service-list-${index}`} className="flex f:v list gap:0">
                                            <div className="tt:u fw:b">{app.title}</div>
                                            <div>
                                                <a href={app.url} target="_blank" rel="nofollow">
                                                    {app.url}
                                                </a>
                                            </div>
                                            <div className="tags">
                                                {app.tags &&
                                                    app.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={`service-list-${index}-tag-${tagIndex}`}
                                                            className="tag"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="parallax lib z:100 sticky"></div>
                        <div className="parallax one z:100 sticky">
                            <div className="titled">LIB</div>
                        </div>
                        <div id="libraries" className="container">
                            <div className="container-item">
                                <div>
                                    <div className="subheading tt:u">Libraries</div>
                                    <div className="near-heading">2020-current</div>
                                </div>
                                <div className="flex">
                                    {libraries.map((app, index) => (
                                        <Box
                                            key={`library-${index}`}
                                            klass={`flex f:v large light ${
                                                app.highlight ? "highlight h:" + app.highlight : ""
                                            } ${app.klass ? app.klass : ""}`}
                                            name={app.title}
                                        >
                                            <div className="flex f:v">
                                                <div>
                                                    {o2kva(app.url).map(([name, value], urlIndex) => {
                                                        const title = `${name}/${
                                                            value.includes("@")
                                                                ? value.split("/").slice(-2).join("/")
                                                                : value.split("/").at(-1)
                                                        }`;
                                                        return (
                                                            <div key={`library-${index}-url-${urlIndex}`}>
                                                                <ExternalAnchor href={value} title={title} />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <div className="tags">
                                                    {app.tags && (
                                                        <div className="tags">
                                                            {app.tags.map((tag, tagIndex) => (
                                                                <div
                                                                    key={`library-${index}-tag-${tagIndex}`}
                                                                    className={`tag ${tag}`}
                                                                >
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </Box>
                                    ))}
                                </div>
                                <div className="vspacer"></div>
                                <div className="flex gap:4">
                                    {librariesList.map((app, index) => (
                                        <div key={`library-list-${index}`} className="flex f:v width w:20d gap:0">
                                            <div className="minorheading tt:u">{app.title}</div>
                                            <div className="flex f:v gap:0">
                                                {o2kva(app.url).map(([name, value], urlIndex) => {
                                                    const title = `${name}/${
                                                        value.includes("@")
                                                            ? value.split("/").slice(-2).join("/")
                                                            : value.split("/").at(-1)
                                                    }`;
                                                    return (
                                                        <div key={`library-list-${index}-url-${urlIndex}`}>
                                                            <ExternalAnchor href={value} title={title} />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="tags">
                                                {app.tags && <Tags tags={app.tags} name="librarylist-tag" />}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div id="oldprojects" className="container">
                            <div className="container-item">
                                <div>
                                    <div className="subheading tt:u">Old projects</div>
                                    <div className="near-heading">2006-2015</div>
                                </div>
                                <ul>
                                    <li>
                                        Traffoon: A web application for traffic road signs, markings, and rules
                                        education.
                                    </li>
                                    <li>BlogRocker: A minimal blogging engine.</li>
                                    <li>
                                        ShareWatch: A desktop application for tracking and analysis of stocks and
                                        commodity prices.
                                    </li>
                                    <li>Contactr: A windows desktop application for managing contacts.</li>
                                    <li>Imagr: A windows desktop application for editing images.</li>
                                    <li>Mailr: A windows desktop application for emailing.</li>
                                    <li>
                                        Platform For Organized Student Activities & Communication: A college degree
                                        project web application.
                                    </li>
                                    <li>SocialClone: A clone of facebook in lamp stack.</li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="container">
                        <div className="container-item">
                            <div>
                                <FizzBuzz />
                            </div>
                        </div>
                    </div> */}
                    </fieldset>
                </div>
            </div>
            <div className="footer flex f:v gap:2 width">
                <div className="flex f:v gap:2">
                    <div className="subheading  type:small">
                        <span className="tt:u">Anubhav Saini</span> &copy; {new Date().getFullYear()}
                    </div>
                    <div className="type:small">
                        <span className="tt:u">Last updated:</span> {new Date().toLocaleDateString()}
                    </div>
                </div>
                <div className="flex f:v gap:2">
                    <a href="#top" className="type:small tt:u">
                        Back to top
                    </a>
                </div>
            </div>
            {/* <Driver anchors={anchors} /> */}
        </div>
    );
}

export default App;
