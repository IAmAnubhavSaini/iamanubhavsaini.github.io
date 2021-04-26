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
                            <td><h2>{edu.certificate}</h2></td>
                            <td>
                                {edu.subjects.map((sub: string, i: number) => {
                                    return (
                                        <Badge style={{margin: ".2em", padding: ".4em"}}
                                               variant={"success"}>{sub}</Badge>
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
