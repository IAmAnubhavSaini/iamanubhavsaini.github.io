
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

const projects = [
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
    { url: "https://blog.f0c1s.com/todos-with-animation/", title: "todos with animation" },
    { url: "https://blog.f0c1s.com/tic-tac-toe-in-react/", title: "ticTacToe in react" },
];


function App() {

    return (
        <>
            <h1>Anubhav Saini</h1>
            <section>
                <Clock />
            </section>
            <section className="flex lists">
                <List title="Companies" values={companies} />
                <List title="Stack" values={currentTechstack} />
                <ListOLink title="Projects" values={projects} />
            </section>
        </>
    )
}

export default App
