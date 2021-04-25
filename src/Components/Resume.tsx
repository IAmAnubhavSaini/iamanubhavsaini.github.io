import {REPOS} from "../data/repos.data";
import React, {useState} from "react";
import {PACKAGES} from "../data/npm.data";
import {Accordion, Badge, Card, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {GitHubRepoCards, GitHubRepoTable} from "./GitHub";
import {PackageTable} from "./Npm";
import Work from "./Work";

export function Resume() {
    const defaultRepos = REPOS.filter((repo: any) => repo.fork === false);
    const [repos, setRepos] = useState(defaultRepos);
    const [repoSearch, setRepoSearch] = useState('');

    const defaultNPMPackages = PACKAGES;
    const [npmPackages, setNPMPackages] = useState(defaultNPMPackages);
    const [packageSearch, setPackageSearch] = useState('');


    function searchRepos(input: string) {
        setRepoSearch(input.toLocaleLowerCase());
        if (input !== '') {
            setRepos(defaultRepos.filter((repo: any) => {

                return (repo.description && repo.description.toLocaleLowerCase().includes(input)) ||
                    (repo.name && repo.name.toLocaleLowerCase().includes(input));
            }));
        } else {
            setRepos(defaultRepos);
        }

    }

    function searchPackages(input: string) {
        setPackageSearch(input.toLocaleLowerCase());
        if (input !== '') {
            setNPMPackages(defaultNPMPackages.filter((npm: string) => {

                return npm.includes(input);
            }));
        } else {
            setNPMPackages(defaultNPMPackages);
        }

    }

    return (
        <Tabs defaultActiveKey="projects">
            <Tab eventKey="projects" title="Projects">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            GitHub
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <input type="text" placeholder="Search" value={repoSearch}
                                                   onChange={(e: any) => searchRepos(e.target.value)}
                                                   style={{margin: "1em"}}/>
                                            <Badge variant={repoSearch !== '' ? "primary" : "light"}
                                                   style={{padding: ".3em", margin: ".3em", cursor: 'pointer'}}
                                                   onClick={() => searchRepos('')}>clear</Badge>
                                            <Badge variant="light"
                                                   style={{padding: ".3em", margin: ".3em", cursor: 'pointer'}}
                                                   onClick={() => searchRepos('showcase')}>showcase</Badge>
                                            <Badge variant="light"
                                                   style={{padding: ".3em", margin: ".3em", cursor: 'pointer'}}
                                                   onClick={() => searchRepos('git')}>git</Badge>
                                            <Badge variant="light"
                                                   style={{padding: ".3em", margin: ".3em", cursor: 'pointer'}}
                                                   onClick={() => searchRepos('node')}>node</Badge>
                                            <Badge variant="light"
                                                   style={{padding: ".3em", margin: ".3em", cursor: 'pointer'}}
                                                   onClick={() => searchRepos('react')}>react</Badge>
                                            <Badge variant="light"
                                                   style={{padding: ".3em", margin: ".3em", cursor: 'pointer'}}
                                                   onClick={() => searchRepos('service')}>service</Badge>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Tabs defaultActiveKey="table">
                                                <Tab eventKey="table" title="table" style={{padding: "1em"}}>
                                                    <GitHubRepoTable repos={repos} style={{margin: "1em"}}/>
                                                </Tab>
                                                <Tab eventKey="card" title="card" style={{padding: "1em"}}>
                                                    <GitHubRepoCards repos={repos} style={{margin: "1em"}}/>
                                                </Tab>
                                            </Tabs>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            NPM
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Card.Text>
                                    <input type="text" placeholder="Search" value={packageSearch}
                                           onChange={(e: any) => searchPackages(e.target.value)}
                                           style={{margin: "1em"}}/>
                                </Card.Text>

                                <Card.Text>
                                    <PackageTable packages={npmPackages}/>
                                </Card.Text>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Tab>
            <Tab eventKey="work" title="Work">
                <Work/>
            </Tab>
            <Tab eventKey="education" title="Education">
                Education
            </Tab>
        </Tabs>
    );
}
