
import "./App.css"
import Clock from "./components/Clock";
import { List, ListOLink } from "./components/List"

const companies = [
    "Ackret Solutions",
    "Appsmith",
    "PayPal",
    "Experis",
    "Altimetrik",
    "ThoghtWorks",
    "eKasba"
];

const currentTechstack = [
    "javascript + typescript + bash",
    "react + html + dom + css",
    "nodejs + express",
    "postgres",
    "docker",
    "debian",
    "git",
    "vscode"
]

const webapps = [
    { url: "https://iamanubhavsaini.github.io/strings-app/", title: "strings" },
    { url: "https://iamanubhavsaini.github.io/jspaint/index.html", title: "jspaint" },
    { url: "https://iamanubhavsaini.github.io/json-visualiser", title: "json visualiser" },
    { url: "https://iamanubhavsaini.github.io/infinite-scroll", title: "infinite-scroll" },
    { url: "https://iamanubhavsaini.github.io/TopGit/topgit.html", title: "top git" },
    { url: "https://iamanubhavsaini.github.io/ShowCase-Hotel/", title: "hotel" },
    { url: "https://iamanubhavsaini.github.io/showcase-countries-react/index.html", title: " countries " },
    { url: "https://iamanubhavsaini.github.io/random-quotes/", title: "quotes" },
    { url: "https://iamanubhavsaini.github.io/showcase-stopwatches-react/index.html", title: "stopwatch" },
    { url: "https://iamanubhavsaini.github.io/showcase-sort-react/index.html", title: " sorting " },
    { url: "https://iamanubhavsaini.github.io/traffule/signs", title: "traffule" },
    { url: "https://iamanubhavsaini.github.io/simple-web-design-system/", title: "design" },
    { url: "https://iamanubhavsaini.github.io/browser-debug/index.html", title: " browser-debug " },
    { url: "https://iamanubhavsaini.github.io/slickr", title: "slickr" },
    { url: "https://iamanubhavsaini.github.io/ransom", title: "ransom" },
    { url: "https://f0c1s.github.io/todos-with-animation/", title: "todos with animation" },
    { url: "https://f0c1s.github.io/tic-tac-toe-in-react/", title: "ticTacToe in react" },
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
]

function App() {

    return (
        <>
            <h1>Anubhav Saini</h1>
            <section>
                <Clock />
            </section>
            <section className="grid grid2 lists">
                <List title="Companies" values={companies} />
                <List title="Stack" values={currentTechstack} />

            </section>
            <section className="grid grid2 lists">
                <ListOLink title="Web apps" values={webapps} />
                <ListOLink title="cli apps" values={cliapps} />
                <ListOLink title="services" values={services} />
                <ListOLink title="libraries" values={libraries} />
            </section>
        </>
    )
}

export default App
