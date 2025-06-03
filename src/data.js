const workExperiences = [
    {
        projects: [],
        responsibilities: ["any and all"],
        tags: [],
        location: ["Remote", "IN"],
        skills: ["design", "development", "testing", "hiring", "mentoring", "leadership"],
        role: "Developer/ Manager/ Founder",
        name: "🟢 Available",
        duration: "now",
    },
    {
        projects: [{
            name: "ackret.com (defunct)",
            description: "Developed and maintained ackret.com website. Designed and implemented new features.",
        },
        {
            name: "ackret ai",
            description: "Developed llm integrations and llm model fine-tuning.",
        }],
        responsibilities: ["feature development", "code reviews", "code architecture", "design", "hiring", "testing"],
        tags: ["startup", "ai"],
        location: ["Remote", "IN"],
        skills: ["JS", "TS", "React", "Node", "Python", "Docker", "openai", "ollama", "llm", "RAG"],
        role: "Founder",
        name: "Ackret Solutions",
        duration: "2023-2025",
    },
    {
        projects: [{
            name: "app.appsmith.com",
            description: "Maintained and developed features for Appsmith web application. Triaged and fixed bugs. Designed and implemented new features like audit logs.",
        }],
        responsibilities: ["feature development", "code reviews", "code architecture", "testing"],
        tags: ["startup", "dev-tooling", "low-code"],
        location: ["Remote", "Bengaluru, IN"],
        skills: ["JS", "TS", "React"],
        role: "Senior FrontEnd Developer",
        name: "Appsmith",
        duration: "2022-2023",
    },
    {
        projects: [{
            name: "Pentesting",
            description: "Performed pentesting for various clients, including web applications, apis, and networks.",
        },
        {
            name: "Test reports",
            description: "Generated detailed test reports with findings and recommendations for clients."
        }],
        responsibilities: ["pentesting", "test reports"],
        tags: ["startup", "security"],
        location: ["Remote", "IN"],
        skills: ["kali", "bash", "python", "nmap", "sqlmap", "owasp-zap", "mitmproxy"],
        role: "developer",
        name: "startup",
        duration: "2021-2021",
    },
    {
        projects: [
            {
                name: "PayPal wallet consumer application",
                description: "Maintained and developed features for PayPal wallet web application. Triaged and fixed bugs.",
            },
            {
                name: "3DS2",
                description: "Implemented Three Domain Secure (3DS) 2.0 in PayPal wallet web application for EU+EEA countries. Triaged and fixe bugs."
            },
            {
                name: "3DS1",
                description: "Implemented Three Domain Secure (3DS) 1.0 in PayPal wallet web application for India and HongKong. Triaged and fixed bugs."
            },
            {
                name: "code coverage",
                description: "Thoroughly tested application for unit, functional, regression defects",
            }],
        responsibilities: ["feature development", "code reviews", "testing"],
        tags: ["fintech"],
        location: ["Remote", "Bengaluru, IN"],
        skills: ["JS", "TS", "React"],
        role: "Senior Software Developer",
        name: "PayPal",
        duration: "2019-2020",
    },
    {
        projects: [
            {
                name: "PayPal benefits",
                description: "Implemented CSV based app generation and maintenance for PayPal benefits application",
            },
            {
                name: "GooglePay integration",
                description: "Integrated GooglePay wallet for German market & users.",
            },
            {
                name: "PayPal settings",
                description: "Maintained and developer features for legacy settings application.",
            },
        ],
        responsibilities: ["feature development", "code reviews", "hiring", "testing"],
        tags: ["fintech"],
        location: ["Bengaluru, IN"],
        skills: ["JS", "React", "Node", "SQL"],
        role: "Senior Software Developer",
        name: "Experis Manpower",
        duration: "2017-2018",
    },
    {
        projects: [
            {
                name: "PayPal Working Capital (PPWC) Application at PayPall Credit ",
                description: "Maintained PayPal business loan application. Triaged bugs, deployed fixes and database updates."
            },
            {
                name: "PPWC administration app",
                description: "Designed, and Developed customer support application for PayPal Credit organization."
            }
        ],
        responsibilities: ["feature development", "code reviews", "hiring", "testing"],
        tags: ["fintech"],
        location: ["Bengaluru, IN"],
        skills: ["JS", "Angular", "SQL", "Node"],
        role: "Senior Software Developer",
        name: "Altimetrik",
        duration: "2016-2017",
    },
    {
        projects: [{
            name: "OTrak",
            description: "Designed, and developed order tracking application"
        },
        {
            name: "ITrak",
            description: "Designed, and developed inventory management system."
        },
        {
            name: "Dash",
            description: "Developed and maintained a dashboard application for resource management."
        }],
        responsibilities: ["feature development", "code reviews", "testing"],
        tags: ["startup", "supply-chain"],
        location: ["Delhi, IN"],
        skills: ["C#", "JS", "Node"],
        role: "developer",
        name: "startup",
        duration: "2015-2015",
    },
    {
        projects: [{ name: "Performance Vision", description: "Developed tableau charts for fortune 500 companies and top consultants." }],
        responsibilities: ["feature development", "testing"],
        tags: ["consultancy"],
        location: ["Bengaluru, IN"],
        skills: ["C#", ".NET", "Silverlight", "JavaScript", "SQL"],
        role: "Associate Engineer",
        name: "ThoughtWorks",
        duration: "2014-2015",
    },
    {
        projects: [{
            name: "ekasba.in",
            description: "Developed features for hyperlocal ecommerce web app. Invented password-less login using SMS OTP.",
        },
        {
            name: "eKasba Admin",
            description: "Developed admin web application for eKasba, including product management, order management, and customer management."
        }],
        responsibilities: ["feature development", "hiring", "design", "copy-writing"],
        tags: ["startup", "e-commerce"],
        location: ["Remote", "Delhi, IN"],
        skills: ["C#", "ASP.NET", "T-SQL"],
        role: "Engineer",
        name: "eKasba",
        duration: "2011-2013",
    },
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
    {
        name: "react",
        value: [{ name: "react" }, { name: "redux" }, { name: "jsx" }],
    },
    {
        name: "web",
        value: [{ name: "html" }, { name: "css" }, { name: "dom" }],
    },
    {
        name: "operating systems",
        value: [{ name: "debian" }, { name: "kali" }],
    },
    {
        name: "editors",
        value: [{ name: "codium" }, { name: "vim" }],
    },
    {
        name: "languages",
        value: [{ name: "typescript" }, { name: "javascript" }, { name: "bash" }],
    },
    {
        name: "database",
        value: [{ name: "postgres" }, { name: "sql" }],
    },
    {
        name: "virtualization",
        value: [{ name: "docker" }, { name: "virtualbox" }],
    },
    {
        name: "terminals",
        value: [{ name: "konsole" }, { name: "yakuake" }],
    },
    {
        name: "desktop environments",
        value: [{ name: "kde" }],
    },
    {
        name: "window managers",
        value: [{ name: "i3" }, { name: "kwin" }],
    },
];

const webapps = [
    {
        url: "https://iamanubhavsaini.github.io/jspaint/index.html",
        title: "jspaint",
        highlight: 1,
        tags: ["jquery", "canvas", "2015"],
    },
    {
        url: "https://github.com/IAmAnubhavSaini/hashtags",
        title: "hashtags",
        highlight: 1,
        tags: ["d3", "html", "go", "2025",],
    },
    {
        url: "https://iamanubhavsaini.github.io/infinite-scroll",
        title: "infinite-scroll",
        highlight: 0,
        tags: ["flickr", "api", "2021"],
    },
    {
        url: "https://github.com/IAmAnubhavSaini/simple-app",
        title: "simple-app",
        highlight: 2,
        tags: ["node", "postgres", "ollama", "docker", "2024"],
    },
    {
        url: "https://github.com/localserve/yaoui",
        title: "yaoui",
        highlight: 2,
        tags: ["apache2", "docker", "web-components", "2024"],
    },
];

const webappsList = [
    {
        url: "https://iamanubhavsaini.github.io/TopGit/topgit.html",
        title: "top git",
        highlight: 0,
        tags: ["github", "api", "2016"],
    },
    { url: "https://iamanubhavsaini.github.io/ShowCase-Hotel/", title: "hotel", highlight: 4, tags: ["2015"] },
    { url: "https://f0c1s.github.io/tic-tac-toe-in-react/", title: "tic-tac-toe", highlight: 0, tags: ["game"] },
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
];

const cliapps = [
    {
        url: "https://github.com/IAmAnubhavSaini/ask-interviewers",
        klass: "wide",
        title: "ask interviewers",
        tags: ["node", "cli", "2025"],
        highlight: 1,
    },
    {
        url: "https://github.com/localserve/tt",
        klass: "wide",
        title: "typing tutor",
        tags: ["go", "docker", "maintained-fork", "2024"],
        highlight: 1,
    },
    { url: "https://github.com/IAmAnubhavSaini/c_2048", title: "2048", tags: ["c", "game", "2014"] },
];

const cliappsList = [
    {
        url: "https://github.com/IAmAnubhavSaini/todo",
        title: "todo app",
        tags: ["node", "go", "c", "2023"],
        highlight: 4,
    },
    { url: "https://github.com/IAmAnubhavSaini/cdb", title: "database", tags: ["c", "database", "2023"] },
    { url: "https://github.com/m1yh3m/cpu.info.node.sh", title: "cpu info", tags: ["node", "2019"], highlight: 2 },
    { url: "https://github.com/m1yh3m/worldclock.node.sh", title: "world clock", tags: ["node", "2020"] },
    {
        url: "https://github.com/IAmAnubhavSaini/rock-paper-scissors-c",
        title: "rock-paper-scissors",
        tags: ["c", "game", "2013"],
    },
    { url: "https://github.com/IAmAnubhavSaini/tic-tac-toe", title: "Tic Tac Toe", tags: ["c", "game", "2013"] },
    { url: "https://github.com/IAmAnubhavSaini/node-security-rot.sh", title: "ROT cipher", tags: ["node", "2021"] },
    { url: "https://github.com/m1yh3m/columns.node.sh", title: "columns", tags: ["node", "2020"] },
    {
        url: "https://github.com/IAmAnubhavSaini/node-command-info.nix.sh",
        title: " command info",
        tags: ["node", "2021"],
    },
];
const microservices = [];

const microservicesList = [
    { url: "https://github.com/localserve/markdown.service", title: "markdown", tags: ["go", "microservice"] },
    {
        url: "https://github.com/IAmAnubhavSaini/node-deprofane-service",
        title: "deprofane",
        tags: ["node", "docker", "abuse-prevention"],
    },
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
            npm: "https://www.npmjs.com/package/@f0c1s/pkgs",
        },
        title: "pkgs",
        tags: ["node", "npm", "2025"],
        highlight: 1,
    },
];

const librariesList = [
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/canvas-js",
            npm: "https://www.npmjs.com/package/canvas-js",
        },
        title: "canvas-js",
        tags: ["npm", "canvas", "2016"],
    },
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/node.nato-phonetics.lib",
            npm: "https://www.npmjs.com/package/node.nato-phonetics.lib",
        },
        title: " nato-phonetics",
        tags: ["node", "2021"],
    },
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/cpu.info.node.lib",
            npm: "https://www.npmjs.com/package/@f0c1s/cpu.info.node.lib",
        },
        title: "cpu info",
        tags: ["node", "2021"],
    },
    {
        url: {
            github: "https://github.com/f0c1s/node-pad.lib",
            npm: "https://www.npmjs.com/package/@f0c1s/pad",
        },
        title: "string padding",
        tags: ["node", "2021"],
    },
    {
        url: {
            github: "https://github.com/f0c1s/node-escape-html.lib",
            npm: "https://www.npmjs.com/package/@f0c1s/escape-html",
        },
        title: "html escape",
        tags: ["node", "2021"],
    },
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/node-common-log-lib",
            npm: "https://www.npmjs.com/package/@f0c1s/node-common-log-lib",
        },
        title: "logging",
        klass: "thin",
        tags: ["node", "npm", "logging", "2021"],
    },
    {
        url: {
            github: "https://github.com/ackret/js.lib",
            npm: "https://www.npmjs.com/package/@ackret/js.lib",
        },
        title: "@ackret/js.lib",
        tags: ["node", "npm", "data-structures", "2024"],
    },
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/otoa",
            npm: "https://www.npmjs.com/package/otoa",
        },
        title: "objectToArray",
        tags: ["node", "npm", "2016"],
    },
    {
        url: {
            github: "https://github.com/IAmAnubhavSaini/atoo",
            npm: "https://www.npmjs.com/package/atoo",
        },
        title: "arrayToObject",
        tags: ["node", "npm", "2016"],
    },
];

export {
    cliapps,
    cliappsList,
    libraries,
    librariesList,
    microservices,
    microservicesList,
    tableData,
    techStack,
    toolStack,
    workExperiences,
    webapps,
    webappsList,
};
