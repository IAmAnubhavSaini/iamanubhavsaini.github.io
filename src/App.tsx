import React from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min';
import './App.css';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Resume} from "./Components/Resume";
import Books from './Components/Books';
import Skills from "./Components/Skills";

function App() {


    return (
        <Router basename="/">
            <Container fluid className="App" style={{minWidth: "600px"}}>
                <Row>
                    <Col>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Jumbotron className="landing-area">
                            <h1>Hi. I am Anubhav.</h1>
                            <p>Welcome.</p>
                            <Button variant="info" className="btn btn-lg" href="/">Home</Button>
                            <Button variant="info" className="btn btn-lg" href="/#/resume">Resume</Button>
                            <Button variant="info" className="btn btn-lg" href="/#/books">Books</Button>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path="/" render={Skills}></Route>
                            <Route path="/resume" component={Resume}/>
                            <Route path="/books" component={Books}/>
                            <Redirect to="/"/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;