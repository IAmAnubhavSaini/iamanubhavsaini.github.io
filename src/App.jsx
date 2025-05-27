import { objectToKeyValueArray as o2kva } from "otoa";
import { useEffect, useState } from "react";
import "./App.css";
import { ExternalAnchor } from "./components/Anchor";
import { Box } from "./components/Box";
import { WorkExperienceList } from "./components/WorkExperience";

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
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const LOGOS = {
    githubDarkLogo,
    githubLightLogo,
    linkedinLogo,
    npmLogo,
    mediumLogo,
};

function App() {
    const defaultFontSize = 10;
    const defaultClockType = "analog";
    const [activeScheme, setActiveScheme] = useState("dark");
    const [fontSize, setFontSize] = useState(defaultFontSize);
    const [clockType, setClockType] = useState(defaultClockType);

    const anchors = [
        { href: "#top", text: "top" },
        { href: "#workExperiences", text: "work" },
        { href: "#techstack", text: "tech-stack" },
        { href: "#webapps", text: "web-apps" },
        { href: "#cliapps", text: "cli-apps" },
        { href: "#microservices", text: "microservices" },
        { href: "#libraries", text: "libraries" },
        { href: "#oldprojects", text: "old-projects" },
        { href: "#end", text: "end" },
    ];

    const setScheme = (scheme) => {
        document.documentElement.setAttribute("data-scheme", scheme);
        localStorage.setItem("preferred-scheme", scheme);
        setActiveScheme(scheme);
    };

    const changeFontSize = (action) => {
        let newSize;
        switch (action) {
            case "increase":
                newSize = Math.min(fontSize + 1, 25); // max 24px
                break;
            case "decrease":
                newSize = Math.max(fontSize - 1, 8); // min 8
                break;
            case "reset":
                newSize = defaultFontSize; // default size
                break;
            default:
                return;
        }
        document.documentElement.style.setProperty("--base-font-size", `${newSize}px`);
        document.documentElement.style.setProperty("font-size", `${newSize}px`);
        document.body.style.fontSize = `${newSize}px`;
        localStorage.setItem("preferred-font-size", newSize.toString());

        setFontSize(newSize);
    };

    useEffect(function loadLocallyStoredValues() {
        const savedScheme = localStorage.getItem("preferred-scheme") || "dark";
        const savedFontSize = parseInt(localStorage.getItem("preferred-font-size")) || 13;

        setScheme(savedScheme);
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
        <div className="flex f:v gap:8" id="top">
            {/* <div className="hero flex f:v gap:0 f:sb ff:bodoni-moda">
                <div className="type:massive">DESIGN</div>
                <div className="type:massive tt:u">Develop</div>
                <div className="type:massive tt:u">Deploy</div>
            </div> */}
            <Header
                setClockType={setClockType}
                clockType={clockType}
                fontSize={fontSize}
                setScheme={setScheme}
                activeScheme={activeScheme}
                anchors={anchors}
                changeFontSize={changeFontSize}
                logos={LOGOS}
            />
            <div className="flex gap:8" id="app">
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
                        {/* <div className="parallax web z:100 sticky"></div>
                        <div className="parallax one z:100 sticky">
                            <div className="titled">WEB</div>
                        </div> */}
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
                        {/* <div className="parallax terminal z:100 sticky"></div>
                        <div className="parallax one z:100 sticky">
                            <div className="titled">CLI</div>
                        </div> */}

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
                        {/* <div className="parallax lib z:100 sticky"></div>
                        <div className="parallax one z:100 sticky">
                            <div className="titled">LIB</div>
                        </div> */}
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
            <Footer />
            {/* <Driver anchors={anchors} /> */}

            <div id="end"></div>
        </div>
    );
}

export default App;
