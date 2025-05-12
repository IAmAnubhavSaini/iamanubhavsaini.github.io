import { objectToKeyValueArray as o2kva } from "otoa";
import { useEffect, useState } from "react";
import "./App.css";
import { ExternalAnchor } from "./components/Anchor";
import { Box } from "./components/Box";
import Clock from "./components/Clock";
import { FizzBuzz } from "./components/FizzBuzz";
import { NamedRowTable } from "./components/Table";
import { Tags } from "./components/Tag";

import "./dark.css";
import {
    cliapps,
    cliappsList,
    companies,
    libraries,
    librariesList,
    services,
    servicesList,
    tableData,
    webapps,
    webappsList
} from './data';
import "./gray.css";
import "./light.css";
import "./magenta.css";
import "./teal.css";

function App() {
    const [activeScheme, setActiveScheme] = useState('dark');
    const [activeTheme, setActiveTheme] = useState('gray');
    const [fontSize, setFontSize] = useState(10);

    const setScheme = (scheme) => {
        document.documentElement.setAttribute('data-scheme', scheme);
        localStorage.setItem('preferred-scheme', scheme);
        setActiveScheme(scheme);
    };

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('preferred-theme', theme);
        setActiveTheme(theme);
    };

    const changeFontSize = (action) => {
        let newSize;
        switch (action) {
            case 'increase':
                newSize = Math.min(fontSize + 2, 24); // max 24px
                break;
            case 'decrease':
                newSize = Math.max(fontSize - 2, 8); // min 8
                break;
            case 'reset':
                newSize = 10; // default size
                break;
            default:
                return;
        }
        document.documentElement.style.fontSize = `${newSize}px`;
        localStorage.setItem('preferred-font-size', newSize.toString());
        setFontSize(newSize);
    };

    useEffect(() => {
        // Load saved preferences or set defaults
        const savedScheme = localStorage.getItem('preferred-scheme') || 'dark';
        const savedTheme = localStorage.getItem('preferred-theme') || 'gray';
        const savedFontSize = parseInt(localStorage.getItem('preferred-font-size')) || 16;

        setScheme(savedScheme);
        setTheme(savedTheme);
        document.documentElement.style.fontSize = `${savedFontSize}px`;
        setFontSize(savedFontSize);
    }, []);

    return (
        <>
            <div className="grid g:2">
                <div className="height h:96d sticky s:t0 s:tl width w:100p scroll:y">
                    <div className="width flex f:v gap:2 margin:1 padding:1">
                        <Clock />

                        <div className="width  flex f:v ta:r">
                            <div className="flex gap:1 ta:r">
                                <div className="flex gap:1 ta:r f:v">
                                    <div>{fontSize}px</div>
                                    <a onClick={() => changeFontSize('decrease')} className="button font-button" title="Decrease font size">-A</a>
                                    <a onClick={() => changeFontSize('reset')} className="button font-button" title="Reset font size">=A=</a>
                                    <a onClick={() => changeFontSize('increase')} className="button font-button" title="Increase font size">A+</a>
                                </div>
                                <div className="flex gap:1 ta:r f:v">
                                    <a onClick={() => setScheme('light')} className={`button scheme-button sb:light ${activeScheme === 'light' ? 'active' : ''}`}>Light</a>
                                    <a onClick={() => setScheme('dark')} className={`button scheme-button sb:dark ${activeScheme === 'dark' ? 'active' : ''}`}>Dark</a>
                                </div>
                                <div className="flex gap:1 ta:r f:v">
                                    <a onClick={() => setTheme('teal')} className={`button theme-button tb:teal ${activeTheme === 'teal' ? 'active' : ''}`}>Teal</a>
                                    <a onClick={() => setTheme('magenta')} className={`button theme-button tb:magenta ${activeTheme === 'magenta' ? 'active' : ''}`}>Magenta</a>
                                    <a onClick={() => setTheme('gray')} className={`button theme-button tb:gray ${activeTheme === 'gray' ? 'active' : ''}`}>Gray</a>
                                </div>
                            </div>
                            <a href="#heading">top</a>
                            <a href="#companies">companies</a>
                            <a href="#techstack">tech stack</a>
                            <a href="#webapps">web apps</a>
                            <a href="#cliapps">cli apps</a>
                            <a href="#services">services</a>
                            <a href="#libraries">libraries</a>
                            <a href="#oldprojects">old projects</a>
                            <a href="#cssfizzbuzz">css fizzbuzz</a>

                        </div>

                    </div>
                </div>
                <div className="width w:80d">

                    <div id="heading" className="container heading">
                        <div className="container-item">
                            <div className="heading tt:u fw:b">Anubhav Saini</div>
                        </div>
                    </div>

                    <div id="companies" className="container">
                        <div className="container-item">
                            <div className="subheading tt:u">Companies</div>
                            <div className="flex">
                                {companies.map((co, index) => (
                                    <Box key={`company-${index}-${co.split(" ")[0]}`} name={co} klass="medium company" />
                                ))}
                            </div>
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
                            <div className="subheading tt:u">Tech stack</div>
                            <NamedRowTable name="tech" data={tableData} />

                        </div>
                    </div >
                    <div id="webapps" className="container">
                        <div className="container-item">
                            <div>
                                <div className="subheading tt:u">Web Applications</div>
                                <div className="near-heading">2010-current</div>
                            </div>
                            <div className="flex f:reverse">
                                {webapps.map((app, index) => (
                                    <a href={app.url} key={`webapp-${index}`} target="_blank" rel="nofollow">
                                        <Box
                                            klass={`wide light ${app.highlight ? "highlight h:" + app.highlight : ""} ${app.klass ? app.klass : ""
                                                }`}
                                            name={app.title}
                                        />
                                        {app.tags && (
                                            <div className="tags">
                                                {app.tags.map((tag, tagIndex) => (
                                                    <div className={`tag ${tag}`} key={`webapp-${index}-tag-${tagIndex}`}>{tag}</div>
                                                ))}
                                            </div>
                                        )}
                                    </a>
                                ))}
                            </div>
                            <div className="vspacer"></div>
                            <div className="flex vflex">
                                {webappsList.map((app, index) => (
                                    <div key={`webapp-list-${index}`} className="flex vflex list">
                                        <div >{app.title}</div>
                                        <div><a href={app.url} target="_blank" rel="nofollow">{app.url}</a></div>
                                        <div>
                                            {
                                                app.tags && app.tags.map((tag, tagIndex) => <span key={`webapp-list-${index}-tag-${tagIndex}`} className="tag">{tag}</span>)
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div >
                    <div id="cliapps" className="container">
                        <div className="container-item">
                            <div>
                                <div className="subheading tt:u">CLI Applications</div>
                                <div className="near-heading">2013-current</div>
                            </div>

                            <div className="flex f:reverse ">
                                {cliapps.map((app, index) => (
                                    <a href={app.url} key={`cliapp-${index}`} target="_blank" rel="nofollow">
                                        <Box
                                            klass={`light ${app.highlight ? "highlight h:" + app.highlight : ""
                                                } ${app.klass ? app.klass : ""}`}
                                            name={app.title}
                                        />
                                        {app.tags && (
                                            <div className="tags">
                                                {app.tags.map((tag, tagIndex) => (
                                                    <div key={`cliapp-${index}-tag-${tagIndex}`} className={`tag ${tag}`}>{tag}</div>
                                                ))}
                                            </div>
                                        )}
                                    </a>
                                ))}
                            </div>
                            <div className="vspacer"></div>
                            <div className="flex vflex">
                                {cliappsList.map((app, index) => (
                                    <div key={`cliapps-list-${index}`} className="vflex list">
                                        <div >{app.title}</div>
                                        <div><a href={app.url} target="_blank" rel="nofollow">{app.url}</a></div>
                                        <div>
                                            {
                                                app.tags && app.tags.map((tag, tagIndex) => <span key={`cliapps-list-${index}-tag-${tagIndex}`} className="tag">{tag}</span>)
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div id="services" className="container">
                        <div className="container-item">
                            <div>
                                <div className="subheading tt:u">Services</div>
                                <div className="near-heading">2016-current</div>
                            </div>
                            <div className="flex">
                                {services.map((app, index) => (
                                    <a href={app.url} key={`service-${index}`} target="_blank" rel="nofollow">
                                        <Box
                                            klass={`thin wide ${app.highlight ? "highlight h:" + app.highlight : ""} ${app.klass ? app.klass : ""
                                                }`}
                                            name={app.title}
                                        />
                                        {app.tags && (
                                            <div className="tags">
                                                {app.tags.map((tag, tagIndex) => (
                                                    <div key={`service-${index}-tag-${tagIndex}`} className={`tag ${tag}`}>{tag}</div>
                                                ))}
                                            </div>
                                        )}
                                    </a>
                                ))}
                            </div>
                            <div className="vspacer"></div>
                            <div className="flex vflex">
                                {servicesList.map((app, index) => (
                                    <div key={`service-list-${index}`} className="vflex list">
                                        <div >{app.title}</div>
                                        <div><a href={app.url} target="_blank" rel="nofollow">{app.url}</a></div>
                                        <div>
                                            {
                                                app.tags && app.tags.map((tag, tagIndex) => <span key={`service-list-${index}-tag-${tagIndex}`} className="tag">{tag}</span>)
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                                        klass={`flex vflex large light ${app.highlight ? "highlight h:" + app.highlight : ""} ${app.klass ? app.klass : ""
                                            }`}
                                        name={app.title}
                                    >
                                        <div className="flex vflex">
                                            <div>
                                                {o2kva(app.url)
                                                    .map(([name, value], urlIndex) => {
                                                        const title = `${name}/${value.includes("@") ? value.split('/').slice(-2).join("/") : value.split('/').at(-1)}`;
                                                        return <div key={`library-${index}-url-${urlIndex}`}>
                                                            <ExternalAnchor href={value} title={title} />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                            <div>
                                                {app.tags && (
                                                    <div className="tags">
                                                        {app.tags.map((tag, tagIndex) => (
                                                            <div key={`library-${index}-tag-${tagIndex}`} className={`tag ${tag}`}>{tag}</div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Box>

                                ))}
                            </div>
                            <div className="vspacer"></div>
                            <div className="flex vflex gap:2">
                                {librariesList.map((app, index) => (
                                    <div key={`library-list-${index}`} className="grid list gap:2  m:v:2">
                                        <div className="minorheading">{app.title}</div>
                                        <div className="flex vflex gap:1 urls">
                                            {
                                                o2kva(app.url)
                                                    .map(([name, value], urlIndex) => {
                                                        const title = `${name}/${value.includes("@") ? value.split('/').slice(-2).join("/") : value.split('/').at(-1)}`;
                                                        return <div key={`library-list-${index}-url-${urlIndex}`}>
                                                            <ExternalAnchor href={value} title={title} />
                                                        </div>
                                                    })
                                            }
                                        </div>
                                        <div>
                                            {
                                                app.tags && <Tags tags={app.tags} name="librarylist-tag" />
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div id="oldprojects" className="container">
                        <div className="container-item">
                            <div>
                                <div>
                                    <div className="subheading tt:u">Old projects</div>
                                    <div className="near-heading">2006-2015</div>
                                </div>
                                <ul>
                                    <li>Traffoon: A web application for traffic road signs, markings, and rules education.</li>
                                    <li>BlogRocker: A minimal blogging engine.</li>
                                    <li>
                                        ShareWatch: A desktop application for tracking and analysis of stocks and commodity
                                        prices.
                                    </li>
                                    <li>Contactr: A windows desktop application for managing contacts.</li>
                                    <li>Imagr: A windows desktop application for editing images.</li>
                                    <li>Mailr: A windows desktop application for emailing.</li>
                                    <li>
                                        Platform For Organized Student Activities & Communication: A college degree project web
                                        application.
                                    </li>
                                    <li>SocialClone: A clone of facebook in lamp stack.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="cssfizzbuzz" className="container">
                        <div className="container-item">
                            <FizzBuzz />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
