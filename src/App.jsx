import { objectToKeyValueArray as o2kva } from "otoa";
import "./App.css";
import { ExternalAnchor } from "./components/Anchor";
import { Box } from "./components/Box";
import Clock from "./components/Clock";
import { NamedRowTable } from "./components/Table";
import { Tags } from "./components/Tag";

const companies = [
    "Ackret Solutions",
    "Appsmith",
    "PayPal",
    "Experis",
    "Altimetrik",
    "ThoghtWorks",
    "eKasba"
];

const techStack = [
    ["react", "redux"],
    ["javascript", "typescript"],
    ["html", "dom", "css"],
    ["nodejs", "expressjs"],
    ["postgres", "mongodb", "sqlite"],
];

const toolStack = [
    ["docker", "virtualbox"],
    ["vim", "git", "curl", "nmap"],
    ["bash", "zsh"],
    ["obsidian", "vscodium"],
    ["debian", "kali", "kde5"],
];

// /**
//  * @var { name: String, data: Array<{ name: String, value: Array<string> }} tableData
//  */
const tableData = [
    { name: "web", value: ["html", "css", "dom", "react", "redux", "vite", "solidjs"] },
    { name: "operating systems", value: ["debian", "kali", "ubuntu", "raspbian", "windows 11 pro", "mac"] },
    { name: "editors", value: ["vs code", "vscodium", "webstorm", "goland", "rust rover"] },
    { name: "languages", value: ["JS", "TS", "Go", "bash"] },
    { name: "database", value: ["postgres", "mongodb", "sqlite"] },
    { name: "virtualization", value: ["docker", "virtualbox"] },

]

const webapps = [
    {
        url: "https://iamanubhavsaini.github.io/jspaint/index.html",
        title: "jspaint",
        highlight: 1,
        tags: ["jquery", "canvas", "2015"],
    },
    {
        url: "https://iamanubhavsaini.github.io/TopGit/topgit.html",
        title: "top git",
        highlight: 0,
        tags: ["github", "api", "2016"],
    },
    { url: "https://iamanubhavsaini.github.io/ShowCase-Hotel/", title: "hotel", highlight: 4, tags: ["2015"] },
    { url: "https://iamanubhavsaini.github.io/infinite-scroll", title: "infinite-scroll", highlight: 0, tags: ["flickr", "api", "2021"] },
    { url: "https://f0c1s.github.io/tic-tac-toe-in-react/", title: "TicTacToe", highlight: 0, tags: ["game"] },


];

const webappsList = [
    { url: "https://iamanubhavsaini.github.io/strings-app/", title: "strings", highlight: 0 },
    { url: "https://iamanubhavsaini.github.io/json-visualiser", title: "json visualiser", highlight: 0 },
    {
        url: "https://iamanubhavsaini.github.io/showcase-countries-react/index.html",
        title: " countries ",
        highlight: 0,
    },
    { url: "https://iamanubhavsaini.github.io/showcase-sort-react/index.html", title: " sorting ", highlight: 0 },
    { url: "https://iamanubhavsaini.github.io/browser-debug/index.html", title: " browser-debug ", highlight: 0 },
    { url: "https://iamanubhavsaini.github.io/simple-web-design-system/", title: "design", highlight: 0 },
    { url: "https://iamanubhavsaini.github.io/slickr", title: "slickr", highlight: 0, tags: ["flickr", "api"] },
    { url: "https://iamanubhavsaini.github.io/random-quotes/", title: "quotes", highlight: 0 },
    { url: "https://iamanubhavsaini.github.io/ransom", title: "ransom", highlight: 0 },
    { url: "https://iamanubhavsaini.github.io/traffule/signs", title: "traffule", highlight: 0 },
    {
        url: "https://iamanubhavsaini.github.io/showcase-stopwatches-react/index.html",
        title: "stopwatch",
        highlight: 0,
    },
]

const cliapps = [
    { url: "https://github.com/IAmAnubhavSaini/c_2048", title: "2048 game", tags: ["c", "game", "2014"] },
    {
        url: "https://github.com/IAmAnubhavSaini/todo",
        title: "todo app",
        tags: ["node", "go", "c", "2023"],
        highlight: 4,
        klass: "medium",
    },
    { url: "https://github.com/IAmAnubhavSaini/cdb", title: "database", tags: ["c", "database", "2023"] },
    { url: "https://github.com/m1yh3m/cpu.info.node.sh", title: "cpu info", tags: ["node", "2019"], highlight: 2 },
    { url: "https://github.com/m1yh3m/worldclock.node.sh", title: "world clock", tags: ["node", "2020"] }
];

const cliappsList = [
    { url: "https://github.com/IAmAnubhavSaini/rock-paper-scissors-c", "title": "rock-paper-scissors", tags: ["c", "game", "2013"] },
    { url: "https://github.com/IAmAnubhavSaini/tic-tac-toe", "title": "Tic Tac Toe", tags: ["c", "game", "2013"] },
    { url: "https://github.com/IAmAnubhavSaini/node-security-rot.sh", title: "ROT cipher", tags: ["node", "2021"] },
    { url: "https://github.com/m1yh3m/columns.node.sh", title: "columns", tags: ["node", "2020"] },
    { url: "https://github.com/IAmAnubhavSaini/node-command-info.nix.sh", title: " command info", tags: ["node", "2021"] },
];
const services = [];

const servicesList = [
    { url: "https://github.com/localserve/markdown.service", title: "markdown", tags: ["go", "microservice"] },
    { url: "https://github.com/IAmAnubhavSaini/node-deprofane-service", title: "deprofane", tags: ["node", "docker", "abuse-prevention"] },
    { url: "https://github.com/localserve/node-cpu-service", title: "CPU", tags: ["node", "express"] },
    { url: "https://github.com/localserve/node-os-service", title: "OS" },
    {
        url: "https://github.com/IAmAnubhavSaini/distributed-fizzbuzz",
        title: "fizzbuzz",
        highlight: 3,
        tags: ["go", "node", "react", "microservice"],
    },
    { url: "https://github.com/localserve/timestamp.service", title: "timestamp", tags: ["node", "express"] },
    { url: "https://github.com/m1yh3m/service.uniqueid", title: "unique-id", tags: ["node", "express"] },
];

const libraries = [
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/pkgs",
            npm: "https://www.npmjs.com/package/@f0c1s/pkgs"
        }, title: "pkgs", tags: ["node", "2025"], highlight: 1
    },
];

const librariesList = [
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/canvas-js",
            npm: "https://www.npmjs.com/package/canvas-js"
        }, title: "canvas-js", tags: ["npm", "canvas", "2016"]
    },
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/node.nato-phonetics.lib",
            npm: "https://www.npmjs.com/package/node.nato-phonetics.lib"
        }, title: " nato-phonetics", tags: ["node", "2021"]
    },
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/cpu.info.node.lib",
            npm: "https://www.npmjs.com/package/@f0c1s/cpu.info.node.lib"
        }, title: "cpu info", tags: ["node", "2021"]
    },
    {
        url: {
            github: "https://github.com/f0c1s/node-pad.lib",
            npm: "https://www.npmjs.com/package/@f0c1s/pad"
        }, title: "string padding", tags: ["node", "2021"]
    },
    {
        url: {
            github: "https://github.com/f0c1s/node-escape-html.lib",
            npm: "https://www.npmjs.com/package/@f0c1s/escape-html"
        }, title: "html escape", tags: ["node", "2021"]
    },
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/node-common-log-lib",
            npm: "https://www.npmjs.com/package/@f0c1s/node-common-log-lib"
        }, title: "logging", klass: "thin", tags: ["node", "npm", "logging", "2021"]
    },
    {
        url: {
            github: "https://github.com/ackret/js.lib",
            npm: "https://www.npmjs.com/package/@ackret/js.lib"
        }, title: "@ackret/js.lib", tags: ["node", "npm", "data-structures", "2024"]
    },
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/otoa",
            npm: "https://www.npmjs.com/package/otoa"
        }, title: "objectToArray", tags: ["node", "npm", "2016"]
    },
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/atoo",
            npm: "https://www.npmjs.com/package/atoo"
        }, title: "arrayToObject", tags: ["node", "npm", "2016"]
    },

];

function App() {
    return (
        <>
            <div className="container heading">
                <div className="container-item">
                    <div className="heading tt:u fw:b">Anubhav Saini</div>
                </div>
            </div>
            <div className="container">
                <div className="container-item">
                    <Clock />
                </div>
            </div>
            <div className="container">
                <div className="container-item">
                    <div className="subheading">Companies</div>
                    <div className="flex">
                        {companies.map((co, index) => (
                            <Box key={`company-${index}-${co.split(" ")[0]}`} name={co} klass="medium company" />
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="container-item">
                    <div className="subheading">Stacks</div>
                    <div className="flex">
                        <Stack name="tech" stack={techStack} />
                        <Stack name="tool" stack={toolStack} />
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="container-item">
                    <div className="subheading">Tech stack</div>
                    <NamedRowTable name="tech" data={tableData} />

                </div>
            </div >
            <div className="container">
                <div className="container-item">
                    <div>
                        <div className="subheading">Web Applications</div>
                        <div className="near-heading">2010-current</div>
                    </div>
                    <div className="flex f:reverse">
                        {webapps.map((app, index) => (
                            <a href={app.url} key={`webapp-${index}`} target="_blank" rel="nofollow">
                                <Box
                                    klass={`wide light ${app.highlight ? "highlight highlight-" + app.highlight : ""} ${app.klass ? app.klass : ""
                                        }`}
                                    name={app.title}
                                />
                                {app.tags && (
                                    <div className="tags">
                                        {app.tags.map((tag) => (
                                            <div className={`tag ${tag}`}>{tag}</div>
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
                                        app.tags && app.tags.map((tag) => <span className="tag">{tag}</span>)
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <div className="container">
                <div className="container-item">
                    <div>
                        <div className="subheading">CLI Applications</div>
                        <div className="near-heading">2013-current</div>
                    </div>

                    <div className="flex f:reverse ">
                        {cliapps.map((app, index) => (
                            <a href={app.url} key={`cliapp-${index}`} target="_blank" rel="nofollow">
                                <Box
                                    klass={`light ${app.highlight ? "highlight highlight-" + app.highlight : ""
                                        } ${app.klass ? app.klass : ""}`}
                                    name={app.title}
                                />
                                {app.tags && (
                                    <div className="tags">
                                        {app.tags.map((tag) => (
                                            <div className={`tag ${tag}`}>{tag}</div>
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
                                        app.tags && app.tags.map((tag) => <span className="tag">{tag}</span>)
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="container-item">
                    <div>
                        <div className="subheading">Services</div>
                        <div className="near-heading">2016-current</div>
                    </div>
                    <div className="flex">
                        {services.map((app, index) => (
                            <a href={app.url} key={`service-${index}`} target="_blank" rel="nofollow">
                                <Box
                                    klass={`thin wide ${app.highlight ? "highlight highlight-" + app.highlight : ""} ${app.klass ? app.klass : ""
                                        }`}
                                    name={app.title}
                                />
                                {app.tags && (
                                    <div className="tags">
                                        {app.tags.map((tag) => (
                                            <div className={`tag ${tag}`}>{tag}</div>
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
                                        app.tags && app.tags.map((tag) => <span className="tag">{tag}</span>)
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container-item">
                    <div>
                        <div className="subheading">Libraries</div>
                        <div className="near-heading">2020-current</div>
                    </div>
                    <div className="">
                        {libraries.map((app, index) => (
                            <Box
                                key={`library-${index}`}
                                klass={`flex vflex large light ${app.highlight ? "highlight highlight-" + app.highlight : ""} ${app.klass ? app.klass : ""
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
                                                {app.tags.map((tag) => (
                                                    <div className={`tag ${tag}`}>{tag}</div>
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
                            <div key={`library-list-${index}`} className="grid list gap:2">
                                <div >{app.title}</div>
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
            <div className="container">
                <div className="container-item">
                    <div>
                        <div>
                            <div className="subheading">Old projects</div>
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
        </>
    );
}

export default App;
