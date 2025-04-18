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
    { url: "https://github.com/localserve/react-cpu-monitor", title: "CPU monitor", tags: ["react", "2021"] },
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
    {
        url: "https://github.com/localserve/tt",
        klass: "wide",
        title: "typing tutor",
        tags: ["go", "docker", "maintained-fork", "2024"], highlight: 1
    },
    { url: "https://github.com/IAmAnubhavSaini/c_2048", title: "2048 game", tags: ["c", "game", "2014"] },
    {
        url: "https://github.com/IAmAnubhavSaini/todo",
        title: "todo app",
        tags: ["node", "go", "c", "2023"],
        highlight: 4,
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
        }, title: "pkgs", tags: ["node", "npm", "2025"], highlight: 1
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

export {
    cliapps,
    cliappsList,
    companies,
    libraries,
    librariesList,
    services,
    servicesList,
    tableData,
    techStack,
    toolStack,
    webapps,
    webappsList
};

