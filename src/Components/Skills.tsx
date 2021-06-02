import React from 'react';
import {SKILLS, SkillType} from "../data/skills.data";
import {Badge, Card, CardColumns} from "react-bootstrap";

import javascriptSvg from 'svg-icon/dist/svg/logos/javascript.svg';
import html5Svg from 'svg-icon/dist/svg/dev/html5.svg';
import css3Svg from 'svg-icon/dist/svg/dev/css3.svg';
import bootstrapSvg from 'svg-icon/dist/svg/logos/bootstrap.svg';
import babelSvg from 'svg-icon/dist/svg/logos/babel.svg';
import backboneSvg from 'svg-icon/dist/svg/logos/backbone.svg';
import bashSvg from 'svg-icon/dist/svg/logos/bash.svg';
import bowerSvg from 'svg-icon/dist/svg/logos/bower.svg';
import cSvg from 'svg-icon/dist/svg/logos/c.svg';
import chaiSvg from 'svg-icon/dist/svg/logos/chai.svg';
import debianSvg from 'svg-icon/dist/svg/logos/debian.svg';
import discordSvg from 'svg-icon/dist/svg/logos/discord.svg';
import dockerSvg from 'svg-icon/dist/svg/logos/docker.svg';
import dotnetSvg from 'svg-icon/dist/svg/logos/dotnet.svg';
import expressSvg from 'svg-icon/dist/svg/logos/express.svg';
import gitSvg from 'svg-icon/dist/svg/logos/git.svg';
import githubSvg from 'svg-icon/dist/svg/logos/github.svg';
import jasmineSvg from 'svg-icon/dist/svg/logos/jasmine.svg';
import jquerySvg from 'svg-icon/dist/svg/logos/jquery.svg';

const SVGMap: any = {
    javascriptSvg,
    html5Svg,
    css3Svg,
    bootstrapSvg,
    babelSvg,
    backboneSvg,
    bashSvg,
    bowerSvg,
    cSvg,
    chaiSvg,
    debianSvg,
    discordSvg,
    dockerSvg,
    dotnetSvg,
    expressSvg,
    gitSvg,
    githubSvg,
    jasmineSvg,
    jquerySvg,
};

function Skills() {
    return (
        <>
            <h3>Skills</h3>
            <p>Experience in years</p>

            {
                SKILLS.map((skill: SkillType, index: number) => {
                    return (
                        <Card style={{
                            padding: ".5em", display: 'inline-block', minWidth: "10%", margin: ".5em",
                            textAlign: "center"
                        }}
                              key={'skills-card-' + index}>
                            <ColoredBadge skill={skill} index={index}/>
                            <SkillLogo skill={skill}/>

                        </Card>

                    );
                })
            }
        </>
    );
}

export default Skills;

function SkillLogo(props: any) {
    const skill: SkillType = props.skill;
    return (
        <>
            {
                skill.iconPath !== '' ? (
                        <img height={"35px"} src={getSVG(skill.iconPath)} alt={skill.iconPath}
                             title={skill.name}/>)
                    : ''
            }
        </>
    );
}

function getSVG(iconPath: string): any {
    const name: string = iconPath.split('.')[0].split('/').pop() + 'Svg';
    return SVGMap[name];

}

function variantCalculator(type: string) {
    switch (type) {
        case 'pl':
            return 'warning';
        case 'fw':
            return 'danger';
        case 'os':
            return 'dark';
        case 'lib':
            return 'success';
        case 'tool':
            return 'primary';
        default:
            return 'light';
    }
}

function ColoredBadge(props: any) {
    const skill: SkillType = props.skill;
    const index: number = props.index;
    const variant = variantCalculator(skill.type);
    const exp = skill.progression[skill.progression.length - 1].year - skill.progression[0].year + 1;
    return (
        <Badge key={'skill-badge-' + index}
               variant={variant}
               style={{margin: ".2em", padding: ".5em 1em", fontSize: "1em"}}
               title={`${exp} years of experience`}>

            {skill.name}
            <Badge variant={"light"}
                   style={{padding: ".2em .5em", position: "relative", right: "-1em", fontWeight: "bold"}}>
                {exp}
            </Badge>
        </Badge>
    );
}