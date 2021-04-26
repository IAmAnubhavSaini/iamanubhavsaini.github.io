import {Table} from "react-bootstrap";
import React from "react";

export function PackageTable(props: any) {
    return (
        <Table striped bordered hover size="sm">
            <tbody>
            {props.packages.map((npm: string, index: number) => {
                return (
                    <tr key={"npm-package" + index}>
                        <td>{npm}</td>
                        <td><a href={"https://www.npmjs.com/package/" + npm}>npm</a></td>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    );
}