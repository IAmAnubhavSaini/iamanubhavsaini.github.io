import React from "react";
import {EDUCATION} from "../data/education.data";
import {Badge, Table} from "react-bootstrap";

function Education() {
    return (
        <Table>
            {
                EDUCATION.map((edu: any, index: number) => {
                    return (
                        <tr key={"education-" + index}>
                            <td>
                                {edu.institute}
                                <hr/>
                                <small className="text-muted">
                                    {`${edu.started.year}/${edu.started.month} - ${edu.stopped.year}/${edu.stopped.month}`}
                                </small>
                            </td>
                            <td>{edu.certificate}</td>
                            <td>
                                {edu.subjects.map((sub: string, i: number) => {
                                    return (
                                        <Badge variant={"success"}>{sub}</Badge>
                                    );
                                })}
                            </td>
                        </tr>
                    );
                })
            }
        </Table>
    );
}

export default Education;
