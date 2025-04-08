import "./App.css";
import { Card } from "./components/Card";
import Clock from "./components/Clock";
import { Box } from "./components/Box";
import { List, ListOLink } from "./components/List";
import { Stack } from "./components/Stack";

const companies = ["Ackret Solutions", "Appsmith", "PayPal", "Experis", "Altimetrik", "ThoghtWorks", "eKasba"];

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

const webapps = [
    { url: "https://iamanubhavsaini.github.io/jspaint/index.html", title: "jspaint" },
    { url: "https://iamanubhavsaini.github.io/TopGit/topgit.html", title: "top git" },
    { url: "https://iamanubhavsaini.github.io/ShowCase-Hotel/", title: "hotel" },
    { url: "https://iamanubhavsaini.github.io/infinite-scroll", title: "infinite-scroll" },
    { url: "https://f0c1s.github.io/tic-tac-toe-in-react/", title: "ticTacToe" },
    { url: "https://iamanubhavsaini.github.io/strings-app/", title: "strings" },
    { url: "https://iamanubhavsaini.github.io/json-visualiser", title: "json visualiser" },
    { url: "https://iamanubhavsaini.github.io/showcase-countries-react/index.html", title: " countries " },
    { url: "https://iamanubhavsaini.github.io/showcase-sort-react/index.html", title: " sorting " },
    { url: "https://iamanubhavsaini.github.io/browser-debug/index.html", title: " browser-debug " },
    { url: "https://iamanubhavsaini.github.io/simple-web-design-system/", title: "design" },
    { url: "https://iamanubhavsaini.github.io/traffule/signs", title: "traffule" },
    { url: "https://iamanubhavsaini.github.io/showcase-stopwatches-react/index.html", title: "stopwatch" },
    { url: "https://iamanubhavsaini.github.io/slickr", title: "slickr" },
    { url: "https://iamanubhavsaini.github.io/random-quotes/", title: "quotes" },
    { url: "https://iamanubhavsaini.github.io/ransom", title: "ransom" },
];

const cliapps = [
    { url: "https://github.com/IAmAnubhavSaini/c_2048", title: "2048 game" },
    { url: "https://github.com/IAmAnubhavSaini/todo", title: "todo app" },
    { url: "https://github.com/IAmAnubhavSaini/cdb", title: "database" },
    { url: "https://github.com/m1yh3m/cpu.info.node.sh", title: "cpu info" },
    { url: "https://github.com/m1yh3m/worldclock.node.sh", title: "world clock" },
    { url: "https://github.com/IAmAnubhavSaini/node-security-rot.sh", title: "ROT cipher" },
    { url: "https://github.com/m1yh3m/columns.node.sh", title: "columns" },
    { url: "https://github.com/IAmAnubhavSaini/node-command-info.nix.sh", title: " command info" },
];

const services = [
    { url: "https://github.com/localserve/markdown.service", title: "markdown" },
    { url: "https://github.com/IAmAnubhavSaini/node-deprofane-service", title: "deprofane" },
    { url: "https://github.com/localserve/node-cpu-service", title: "CPU" },
    { url: "https://github.com/localserve/node-os-service", title: "OS" },
    { url: "https://github.com/localserve/timestamp.service", title: "timestamp" },
    { url: "https://github.com/m1yh3m/service.uniqueid", title: "unique-id" },
];

const libraries = [
    { url: "https://www.npmjs.com/package/@ackret/js.lib", title: "@ackret/js.lib" },
    { url: "https://github.com/IAmAnubhavSaini/canvas-js", title: "canvas-js" },
    { url: "https://github.com/IAmAnubhavSaini/node.nato-phonetics.lib", title: " nato-phonetics" },
    { url: "https://github.com/IAmAnubhavSaini/node-common-log-lib", title: "logging" },
    { url: "https://github.com/IAmAnubhavSaini/cpu.info.node.lib", title: "cpu info" },
    { url: "https://github.com/f0c1s/node-pad.lib", title: "string padding" },
    { url: "https://github.com/f0c1s/node-escape-html.lib", title: "html escape" },
];

function App() {
    return (
        <>
            <div className="container">
                <div className="container-item">
                    <div className="heading">Anubhav Saini</div>
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
                            <Box key={`company-${index}-${co.split(" ")[0]}`} name={co} klass="medium" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container-item">
                    <div className="subheading">Stacks</div>
                    <div className="flex">
                        <Stack name="tech" stack={techStack} />
                        <Stack name="tool" stack={toolStack} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container-item">
                    <div className="subheading">Web Applications</div>
                    <div className="near-heading">2010-current</div>
                    <div className="flex">
                        {webapps.map((app, index) => (
                            <a href={app.url} key={`webapp-${index}`} target="_blank" rel="nofollow">
                                <Box klass={"thin wide light"} name={app.title} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container-item">
                    <div className="subheading">CLI Applications</div>
                    <div className="near-heading">2014-current</div>
                    <div className="flex">
                        {cliapps.map((app, index) => (
                            <a href={app.url} key={`cliapp-${index}`} target="_blank" rel="nofollow">
                                <Box klass={"thin light"} name={app.title} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container-item">
                    <div className="subheading">Services</div>
                    <div className="near-heading">2016-current</div>
                    <div className="flex">
                        {services.map((app, index) => (
                            <a href={app.url} key={`service-${index}`} target="_blank" rel="nofollow">
                                <Box klass={"thin light"} name={app.title} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container-item">
                    <div className="subheading">Libraries</div>
                    <div className="near-heading">2020-current</div>
                    <div className="flex">
                        {libraries.map((app, index) => (
                            <a href={app.url} key={`library-${index}`} target="_blank" rel="nofollow">
                                <Box klass={"thin wide light"} name={app.title} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container-item">
                    <div>
                        <div className="subheading">Old projects</div>
                        <div className="near-heading">2006-2015</div>
                        <ul>
                            <li>2048: A 2048 clone written in C</li>
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
