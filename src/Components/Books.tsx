import React from 'react';
import {Button, Card, Tab, Table, Tabs} from "react-bootstrap";
import {BOOKS as books} from '../data/books.data';
import goepub from '../data/books/Data Structures, Algorithms, and Functions in Go.epub';
import gopdf from '../data/books/Data Structures, Algorithms, and Functions in Go.pdf';
import jsepub from '../data/books/Data Structures, Algorithms, and Functions in JavaScript.epub';
import jspdf from '../data/books/Data Structures, Algorithms, and Functions in JavaScript.pdf';
import es from '../data/books/ecmascript.pdf';

function Books() {

    return (
        <Tabs defaultActiveKey="table">
            <Tab eventKey="table" title="table" style={{padding: "1em"}}>
                <BookTable books={books} style={{margin: "1em"}}/>
            </Tab>
            <Tab eventKey="card" title="card" style={{padding: "1em"}}>
                <BookCards books={books} style={{margin: "1em"}}/>
            </Tab>
        </Tabs>
    );
}

export default Books;

function BookTable(props: any) {
    return (
        <Table striped>
            {
                props.books.map((book: any, index: number) => {
                    return (<tr key={"book-tr-" + index}>
                        <td><h3>{book.name}</h3></td>
                        <td>
                            {book.types.map((ext: string, i: number) => {
                                const href = bookSelector("../data/books/" + book.name + "." + ext);
                                return (
                                    <Button style={{margin: ".25em", minWidth: "10em"}} variant={"success"}
                                            key={"book-tr-" + index + "-a-" + i}
                                            href={href}>
                                        {ext}
                                    </Button>
                                );
                            })}
                        </td>
                    </tr>);
                })
            }
        </Table>
    );
}

export function BookCards(props: any) {
    return (
        <>
            {
                props.books.map((book: any, index: number) => {
                    return <Card key={"book-" + index} border="info"
                                 style={{display: "block", margin: "2em"}} className="text-center">
                        <Card.Header>
                            <h2>{book.name}</h2>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {book.types.map((ext: string, i: number) => {
                                    const href = bookSelector("../data/books/" + book.name + "." + ext);

                                    return (
                                        <Button style={{margin: ".25em", minWidth: "10em"}} variant={"success"}
                                                key={"book-tr-" + index + "-a-" + i}
                                                href={href}>
                                            {ext}
                                        </Button>

                                    );
                                })}
                            </Card.Text>
                        </Card.Body>
                    </Card>;
                })
            }
        </>
    );
}

function bookSelector(href: string) {
    console.log(href);
    switch (href) {
        case '../data/books/Data Structures, Algorithms, and Functions in Go.pdf':
            return gopdf;
        case '../data/books/Data Structures, Algorithms, and Functions in Go.epub':
            return goepub;
        case '../data/books/Data Structures, Algorithms, and Functions in JavaScript.pdf':
            return jspdf;
        case '../data/books/Data Structures, Algorithms, and Functions in JavaScript.epub':
            return jsepub;
        case '../data/books/ecmascript.pdf':
            return es;
    }
}