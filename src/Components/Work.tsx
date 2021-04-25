import React from 'react';
import {Table, Card, Badge, Tab, Tabs} from 'react-bootstrap';
import {WORK} from '../data/work.data';

function Work() {
    const defaultWork = WORK;
    const work = defaultWork;

    return (

        <Tabs defaultActiveKey="table">
            <Tab eventKey="table" title="table" style={{padding: "1em"}}>
                <WorkTable work={work} style={{margin: "1em"}}/>
            </Tab>
            <Tab eventKey="card" title="card" style={{padding: "1em"}}>
                <WorkCards work={work} style={{margin: "1em"}}/>
            </Tab>
        </Tabs>

    );
}

export default Work;


export function WorkCards(props: any) {
    return (
        <>
            {
                props.work.map((w: any, index: number) => {
                    return <Card key={"w-" + index} border="success"
                                 style={{width: '30%', display: "inline-block", margin: "1em"}} className="text-center">
                        <Card.Header>
                            <Badge variant="danger">{w.position}</Badge>
                            <hr/>
                            <small className="text-muted">
                                {`${w.started.year}/${w.started.month} - ${w.stopped.year}/${w.stopped.month}`}
                            </small>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <WorkExperience company={w.company}/>
                            </Card.Text>
                            <Card.Text>
                                <Projects projects={w.projects}/>
                            </Card.Text>
                            
                            <Card.Text>
                                <LanguageBadges languages={w.skills.lang}/>
                                <ToolBadges tools={w.skills.tool}/>
                                <FrameworkBadges frameworks={w.skills.framework}/>
                                <LibraryBadges libraries={w.skills.library}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>;
                })
            }
        </>
    );
}

export function WorkTable(props: any) {
    return (
        <Table striped hover>
            <tbody>
            {
                props.work.map((w: any, index: number) => {
                    return <tr key={"w-" + index}>
                        <td>
                            <Badge variant="danger">{w.position}</Badge>
                            <hr/>
                            <small className="text-muted">
                                {`${w.started.year}/${w.started.month} - ${w.stopped.year}/${w.stopped.month}`}
                            </small>
                        </td>
                        <td>
                            <WorkExperience company={w.company}/>
                            <Projects projects={w.projects}/>
                        </td>

                        <td>
                            <LanguageBadges languages={w.skills.lang}/>
                            <ToolBadges tools={w.skills.tool}/>
                            <FrameworkBadges frameworks={w.skills.framework}/>
                            <LibraryBadges libraries={w.skills.library}/>
                        </td>
                    </tr>;
                })
            }
            </tbody>
        </Table>
    );
}

export function LanguageBadges(props: any) {
    return <GenericBadges keyPrefix={"language"} variant={"warning"} data={props.languages}/>;
}

export function ToolBadges(props: any) {
    return <GenericBadges keyPrefix={"tool"} variant={"light"} data={props.tools}/>;
}

export function FrameworkBadges(props: any) {
    return <GenericBadges keyPrefix={"framework"} variant={"success"} data={props.frameworks}/>;
}

export function LibraryBadges(props: any) {
    return <GenericBadges keyPrefix={"library"} variant={"dark"} data={props.libraries}/>;
}

export function GenericBadges(props: any) {
    return (
        <div>
            {props.data.map((value: string, index: number) => {
                return (<Badge style={{margin: ".2em", padding: ".4em"}}
                               key={props.keyPrefix + "_" + index}
                               variant={props.variant}>
                    {value}
                </Badge>);
            })}

        </div>
    );
}

export function WorkExperience(props: any) {
    return (
        <>
            {props.company.isSame ?
                (<>
                        <h3>{props.company.payroll.name}</h3>
                        <h6>{props.company.payroll.location}</h6>
                    </>
                ) :
                (
                    <>
                        <h3>{props.company.client.name} <Badge>/ {props.company.payroll.name}</Badge></h3>
                        <h6>{props.company.client.location}</h6>
                    </>
                )}
        </>
    );
}

export function Projects(props: any) {
    return (
        <Table striped size="sm">
            {props.projects.map((project: any, index: number) => {
                return (

                    <tr key={"project-" + index}>
                        <td><Badge pill variant="primary">{project.name}</Badge></td>
                        <td>{project.description}</td>
                    </tr>
                );
            })}
        </Table>
    );
}