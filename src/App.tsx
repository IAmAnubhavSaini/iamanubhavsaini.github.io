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
import Blog from "./Components/Blog";

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
                            <Button variant="info" className="btn btn-lg" href="/">Home</Button>
                            <Button variant="info" className="btn btn-lg" href="/#/resume">Resume</Button>
                            <Button variant="info" className="btn btn-lg" href="/#/books">Books</Button>
                            <Button variant="info" className="btn btn-lg" href="/#/blog">Blog</Button>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path="/" render={Skills}></Route>
                            <Route path="/resume" component={Resume}/>
                            <Route path="/books" component={Books}/>
                            <Route path="/blog" component={Blog}/>
                            <Redirect to="/"/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
