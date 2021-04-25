import { Badge, Card, Table } from "react-bootstrap";
import React from "react";

export function GitHubRepoCards(props: any) {
    return (
        <>
            {
                props.repos.map((repo: any, index: number) => {
                    return <Card key={"github-repo-" + index} border="success"
                        style={{ width: '18%', display: "inline-block", margin: "1em" }} className="text-center">
                        <Card.Header>{repo.name} </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {repo.description}
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">{new Date(repo.created_at).toUTCString()}</small>
                            </Card.Text>
                            <Card.Text>
                                <LinkBadges repo={repo} />
                            </Card.Text>
                            <Card.Text>
                                <MutedBadge text={repo.owner.login} />
                                <LicenseBadge license={repo.license} />
                                <LanguageBadge language={repo.language} />
                                <DefaultBranchBadge branch={repo.default_branch} />
                            </Card.Text>
                        </Card.Body>
                    </Card>;
                })
            }
        </>
    );
}

export function GitHubRepoTable(props: any) {
    return (
        <Table striped bordered hover size="sm">
            <tbody>
                {
                    props.repos.map((repo: any, index: number) => {
                        return <tr key={"github-repo-" + index}>
                            <td><LinkBadges repo={repo} /></td>
                            <td>{repo.name}
                                <NonZeroMutedBadge text={'fork'} count={repo.forks} />
                                <NonZeroMutedBadge text={'issue'} count={repo.issues} />
                                <NonZeroMutedBadge text={'watcher'} count={repo.watchers} />
                            </td>

                            <td>
                                {repo.description}
                            </td>
                            <td>
                                <small className="text-muted">{new Date(repo.created_at).toUTCString()}</small>
                            </td>
                            <td>
                                <MutedBadge text={repo.owner.login} />
                                <LicenseBadge license={repo.license} />
                                <LanguageBadge language={repo.language} />
                                <DefaultBranchBadge branch={repo.default_branch} />
                            </td>
                        </tr>;
                    })
                }
            </tbody>
        </Table>
    );
}

export function MutedBadge(props: any) {
    return (
        <Badge variant="light"><small className="text-muted">{props.text}</small></Badge>
    );
}

export function LicenseBadge(props: any) {
    const isNull = props.license === null;
    const isGPL = !isNull && props.license.spdx_id.includes('GPL');
    const isMIT = !isNull && props.license.spdx_id.startsWith('MIT');
    const variant = isNull || isGPL ? "danger" :
        isMIT ? "success" : 'dark';
    const value = isNull ? '' : props.license.spdx_id;

    return (
        <Badge variant={variant}>{value}</Badge>
    );
}

export function LinkBadges(props: any) {
    return (
        <>
            <Badge variant="light"><a href={props.repo.html_url}>GH</a></Badge>
            <Badge variant="light"><a href={props.repo.html_url + "/issues"}>issues</a></Badge>
        </>
    );
}

export function LanguageBadge(props: any) {
    return (
        <Badge variant="warning">{props.language}</Badge>
    );
}

export function NonZeroMutedBadge(props: any) {
    const text = props.count > 1 ? props.text + "s" : props.text;
    const rendered = props.count > 0 ? (<MutedBadge text={props.count + " " + text} />) : (<></>);
    return (
        <>
            {rendered}
        </>
    );
}

export function DefaultBranchBadge(props: any) {
    const branch = props.branch;
    const rendered = branch === 'master' ? (<></>) : (<MutedBadge text={"branch: " + branch} />);
    return rendered;
}