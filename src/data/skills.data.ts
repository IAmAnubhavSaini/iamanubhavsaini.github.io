export type SkillType = {
    name: string
    progression: { year: number, outOf3: number }[]
    iconPath: string
    type: string
};

export const SKILLS: SkillType[] = [
    {
        name: "javascript",
        progression: [
            {year: 2014, outOf3: 1},
            {year: 2015, outOf3: 1},
            {year: 2016, outOf3: 2},
            {year: 2017, outOf3: 3},
            {year: 2018, outOf3: 3},
            {year: 2019, outOf3: 3},
            {year: 2020, outOf3: 2},
            {year: 2021, outOf3: 2},
        ],
        iconPath: "svg-icon/dist/svg/logos/javascript.svg",
        type: "pl"
    },
    {
        name: "typescript",
        progression: [
            {year: 2018, outOf3: 1},
            {year: 2019, outOf3: 1},
            {year: 2020, outOf3: 2},
            {year: 2021, outOf3: 2},
        ],
        iconPath: "",
        type: "pl"
    },
    {
        name: "html",
        progression: [
            {year: 2008, outOf3: 1},
            {year: 2009, outOf3: 1},
            {year: 2010, outOf3: 2},
            {year: 2011, outOf3: 3},
            {year: 2012, outOf3: 3},
            {year: 2013, outOf3: 3},
            {year: 2014, outOf3: 3},
            {year: 2015, outOf3: 3},
            {year: 2016, outOf3: 3},
            {year: 2017, outOf3: 2},
            {year: 2018, outOf3: 2},
            {year: 2019, outOf3: 2},
            {year: 2020, outOf3: 2},
            {year: 2021, outOf3: 2},
        ],
        iconPath: "svg-icon/dist/svg/dev/html5.svg",
        type: "pl"
    },
    {
        name: "css",
        progression: [
            {year: 2008, outOf3: 1},
            {year: 2009, outOf3: 1},
            {year: 2010, outOf3: 2},
            {year: 2011, outOf3: 2},
            {year: 2012, outOf3: 3},
            {year: 2013, outOf3: 3},
            {year: 2014, outOf3: 3},
            {year: 2015, outOf3: 3},
            {year: 2016, outOf3: 3},
            {year: 2017, outOf3: 2},
            {year: 2018, outOf3: 2},
            {year: 2019, outOf3: 2},
            {year: 2020, outOf3: 2},
            {year: 2021, outOf3: 2},
        ],
        iconPath: "svg-icon/dist/svg/dev/css3.svg",
        type: "pl"
    },
    {
        name: "bootstrap",
        progression: [
            {year: 2011, outOf3: 1},
            {year: 2012, outOf3: 2},
            {year: 2013, outOf3: 2},
            {year: 2014, outOf3: 2},
            {year: 2015, outOf3: 3},
            {year: 2016, outOf3: 3},
            {year: 2017, outOf3: 2},
            {year: 2018, outOf3: 2},
            {year: 2019, outOf3: 2},
            {year: 2020, outOf3: 2},
            {year: 2021, outOf3: 2},
        ],
        iconPath: "svg-icon/dist/svg/logos/bootstrap.svg",
        type: "fw"
    },
    {
        name: "babel",
        progression: [
            {year: 2017, outOf3: 1},
            {year: 2018, outOf3: 1},
            {year: 2019, outOf3: 1},
            {year: 2020, outOf3: 1},
            {year: 2021, outOf3: 1},
        ],
        iconPath: "svg-icon/dist/svg/logos/babel.svg",
        type: "tool"
    },
    {
        name: "backbone.js",
        progression: [
            {year: 2016, outOf3: 1},
            {year: 2017, outOf3: 2},
            {year: 2018, outOf3: 2},
            {year: 2019, outOf3: 1},
            {year: 2020, outOf3: 1},
            {year: 2021, outOf3: 1},
        ],
        iconPath: "svg-icon/dist/svg/logos/backbone.svg",
        type: "lib"
    },
    {
        name: "bash",
        progression: [
            {year: 2013, outOf3: 1},
            {year: 2014, outOf3: 2},
            {year: 2015, outOf3: 2},
            {year: 2016, outOf3: 2},
            {year: 2017, outOf3: 2},
            {year: 2018, outOf3: 2},
            {year: 2019, outOf3: 2},
            {year: 2020, outOf3: 2},
            {year: 2021, outOf3: 2},
        ],
        iconPath: "svg-icon/dist/svg/logos/bash.svg",
        type: "pl"
    },
    {
        name: "bower",
        progression: [
            {year: 2015, outOf3: 1},
            {year: 2016, outOf3: 1},
            {year: 2017, outOf3: 1},
            {year: 2018, outOf3: 1},
            {year: 2019, outOf3: 1},
            {year: 2020, outOf3: 1},
            {year: 2021, outOf3: 1},
        ],
        iconPath: "svg-icon/dist/svg/logos/bower.svg",
        type: "tool"
    },
    {
        name: "c",
        progression: [
            {year: 2007, outOf3: 1},
            {year: 2008, outOf3: 1},
            {year: 2009, outOf3: 1},
            {year: 2010, outOf3: 1},
            {year: 2011, outOf3: 2},
            {year: 2012, outOf3: 2},
            {year: 2013, outOf3: 3},
            {year: 2014, outOf3: 3},
            {year: 2015, outOf3: 3},
            {year: 2016, outOf3: 2},
            {year: 2017, outOf3: 1},
            {year: 2018, outOf3: 1},
            {year: 2019, outOf3: 1},
            {year: 2020, outOf3: 1},
            {year: 2021, outOf3: 1},
        ],
        iconPath: "svg-icon/dist/svg/logos/c.svg",
        type: "pl"
    },
    {
        name: "chai",
        progression: [
            {year: 2015, outOf3: 1},
            {year: 2016, outOf3: 2},
            {year: 2017, outOf3: 3},
            {year: 2018, outOf3: 2},
            {year: 2019, outOf3: 1},
            {year: 2020, outOf3: 1},
            {year: 2021, outOf3: 1},
        ],
        iconPath: "svg-icon/dist/svg/logos/chai.svg",
        type: "lib"
    },
    {
        name: "debian",
        progression: [
            {year: 2021, outOf3: 1},
        ],
        iconPath: "svg-icon/dist/svg/logos/debian.svg",
        type: "os"
    },
    {
        name: "discord",
        progression: [
            {year: 2021, outOf3: 1},
        ],
        iconPath: "svg-icon/dist/svg/logos/discord.svg",
        type: "tool"
    },
    {
        name: "docker",
        progression: [
            {year: 2018, outOf3: 1},
            {year: 2019, outOf3: 1},
            {year: 2020, outOf3: 2},
            {year: 2021, outOf3: 2},
        ],
        iconPath: "svg-icon/dist/svg/logos/docker.svg",
        type: "tool"
    },
    {
        name: ".NET",
        progression: [
            {year: 2008, outOf3: 1},
            {year: 2009, outOf3: 1},
            {year: 2010, outOf3: 2},
            {year: 2011, outOf3: 2},
            {year: 2012, outOf3: 3},
            {year: 2013, outOf3: 3},
            {year: 2014, outOf3: 3},
            {year: 2015, outOf3: 2},
            {year: 2016, outOf3: 1},
            {year: 2017, outOf3: 1},
            {year: 2018, outOf3: 1},
            {year: 2019, outOf3: 1},
            {year: 2020, outOf3: 1},
            {year: 2021, outOf3: 1},
        ],
        iconPath: "svg-icon/dist/svg/logos/dotnet.svg",
        type: "fw"
    },
    {
        name: "express.js",
        progression: [
            {year: 2016, outOf3: 2},
            {year: 2017, outOf3: 2},
            {year: 2018, outOf3: 2},
            {year: 2019, outOf3: 3},
            {year: 2020, outOf3: 3},
            {year: 2021, outOf3: 3},
        ],
        iconPath: "svg-icon/dist/svg/logos/express.svg",
        type: "fw"
    },
    {
        name: "git",
        progression: [
            {year: 2012, outOf3: 1},
            {year: 2013, outOf3: 1},
            {year: 2014, outOf3: 1},
            {year: 2015, outOf3: 3},
            {year: 2016, outOf3: 3},
            {year: 2017, outOf3: 3},
            {year: 2018, outOf3: 3},
            {year: 2019, outOf3: 2},
            {year: 2020, outOf3: 2},
            {year: 2021, outOf3: 2},
        ],
        iconPath: "svg-icon/dist/svg/logos/git.svg",
        type: "tool"
    },
    {
        name: "github",
        progression: [
            {year: 2012, outOf3: 1},
            {year: 2013, outOf3: 1},
            {year: 2014, outOf3: 1},
            {year: 2015, outOf3: 1},
            {year: 2016, outOf3: 2},
            {year: 2017, outOf3: 2},
            {year: 2018, outOf3: 2},
            {year: 2019, outOf3: 2},
            {year: 2020, outOf3: 2},
            {year: 2021, outOf3: 2},
        ],
        iconPath: "svg-icon/dist/svg/logos/github.svg",
        type: "tool"
    },
    {
        name: "jasmine",
        progression: [
            {year: 2014, outOf3: 1},
            {year: 2015, outOf3: 2},
            {year: 2016, outOf3: 2},
            {year: 2017, outOf3: 2},
            {year: 2018, outOf3: 2},
            {year: 2019, outOf3: 1},
            {year: 2020, outOf3: 1},
            {year: 2021, outOf3: 1},
        ],
        iconPath: "svg-icon/dist/svg/logos/jasmine.svg",
        type: "lib"
    },
    {
        name: "jquery",
        progression: [
            {year: 2010, outOf3: 1},
            {year: 2011, outOf3: 2},
            {year: 2012, outOf3: 3},
            {year: 2013, outOf3: 3},
            {year: 2014, outOf3: 3},
            {year: 2015, outOf3: 3},
            {year: 2016, outOf3: 2},
            {year: 2017, outOf3: 1},
            {year: 2018, outOf3: 1},
            {year: 2019, outOf3: 1},
            {year: 2020, outOf3: 1},
            {year: 2021, outOf3: 1},
        ],
        iconPath: "svg-icon/dist/svg/logos/jquery.svg",
        type: "lib"
    }
];