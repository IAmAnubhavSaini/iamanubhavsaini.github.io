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


function App() {


    return (
        <Router basename="/">
            <Container fluid className="App">
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
                            <Button variant="info" className="btn btn-lg" href="/#/blog">Blog</Button>

                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path="/"></Route>
                            <Route path="/resume" component={Resume}/>
                            <Redirect to="/"/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;

