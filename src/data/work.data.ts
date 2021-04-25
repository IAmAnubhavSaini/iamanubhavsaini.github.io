export const WORK = [
    {
        started: {year: 2019, month: "FEB"}, stopped: {year: 2020, month: "JUN"},
        company: {payroll: {name: "PayPal", location: "Bengaluru"}, client: {}, isSame: true},
        position: "Software Developer III",
        projects: [
            {
                name: "3DS2",
                description: "Implemented Three Domain Secure (3DS) 2.0 in PayPal wallet web application for EU+EEA countries. Triaged and fixe bugs."
            },
            {
                name: "3DS1",
                description: "Implemented Three Domain Secure (3DS) 1.0 in PayPal wallet web application for India and HongKong. Triaged and fixed bugs."
            }
        ],
        skills: {
            lang: [
                "javascript",
                "typescript",
                "bash"

            ],
            framework: [
                "node",
                "react",
            ],
            tool: [
                "npm",
                "MS Excel",
                "docker",
                "jenkins",
                "confluence",
                "jira",

            ],
            library: [
                "jest",
                "rxjs",
                "ramda",

            ]
        }
    },
    {
        started: {year: 2017, month: "SEP"}, stopped: {year: 2018, month: "DEC"},
        company: {
            payroll: {name: "Experis", location: "Bengaluru"},
            client: {name: "PayPal", location: "Bengaluru"},
            isSame: false
        },
        position: "Senior Software Developer",
        projects: [
            {
                name: "PayPal benefits",
                description: "Implemented CSV based app generation and maintenance for PayPal benefits application"
            },
            {
                name: "GooglePay integration",
                description: "Integrated GooglePay wallet for German users."
            },
            {
                name: "PayPal settings",
                description: "Maintained and developer features for legacy settings application."
            },
            {
                name: "Testing",
                description: "Thoroughly tested application for unit, functional, regression defects"
            }
        ],

        skills: {
            lang: [
                "javascript",
                "typescript",
                "bash"
            ],
            framework: [
                "node",
                "nemojs"
            ],
            tool: [
                "npm",
                "MS Excel",
                "docker",
                "jenkins",
                "confluence",
                "jira",

            ],
            library: [
                "dustjs",
                "jquery"
            ]
        }

    },
    {
        started: {year: 2016, month: "FEB"}, stopped: {year: 2018, month: "JUL"},
        company: {
            payroll: {name: "Altimetrik", location: "Bengaluru"},
            client: {name: "PayPal", location: "Bengaluru"},
            isSame: false
        },
        position: "Senior Software Developer",
        projects: [
            {
                name: "PayPal Working Capital",
                description: "Maintained PayPal business loan application. Triaged bugs, deployed fixes and database updates."
            },
            {
                name: "PPWC admin app",
                description: "Designed, and Developed customer support application for PayPal Working Capital."
            }
        ],
        skills: {
            lang: [
                "javascript",
                "bash",
                "SQL"
            ],
            framework: [
                "angularjs",
                "node",
                "nemojs"
            ],
            tool: [
                "npm",
                "jenkins",
                "confluence",
                "jira",

            ],
            library: [
                "dustjs",
                "jquery",
                "bootstrap"
            ]
        }
    },
    {
        started: {year: 2015, month: "FEB"}, stopped: {year: 2016, month: "JAN"},
        company: {payroll: {name: "Freelancer", location: "New Delhi"}, client: {}, isSame: true},
        position: "Software Developer",
        projects: [
            {
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
            }
        ],
        skills: {
            lang: [
                "javascript",
                "C#.NET",
                "SQL"
            ],
            framework: [
                "ASP.NET MVC",
                "angularjs",
                "node"
            ],
            tool: [
                "npm"
            ],
            library: [
                "jquery",
                "bootstrap"
            ]
        }
    },
    {
        started: {year: 2014, month: "JUL"}, stopped: {year: 2015, month: "JAN"},
        company: {
            payroll: {name: "ThoughtWorks", location: "Bengaluru"},
            client: {},
            isSame: true
        },
        position: "Software Developer",
        projects: [{name: "Performance Vision", description: "Developed tableau charts"}],
        skills: {
            lang: ["C#.NET", "javascript"],
            tool: ["visual studio", "jenkins"],
            library: ["bootstrap", "jquery"],
            framework: ["Silverlight"]
        }
    },
    {
        started: {year: 2011, month: "SEP"}, stopped: {year: 2013, month: "JUL"},
        company: {payroll: {name: "eKasba", location: "New Delhi"}, client: {}, isSame: true},
        position: "Software Developer",
        projects: [
            {
                name: "ekasba.in",
                description: "Developed features for hyperlocal ecommerce web app"
            }
        ],
        skills: {
            lang: ["C#.NET"],
            tool: ["visual studio", "svn"],
            library: ["bootstrap", "jquery"],
            framework: ["ASP.NET MVC"]
        }
    },
];