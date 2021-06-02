import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React from "react";
import _0001_Quantum from "../blog-posts/0001-quantum";

export default function Blog() {
    return (
        <>
            <h2>Blog</h2>
            <Router>
                <div>
                    <a href={"/#/blog/0001"}>0001</a> - <span>Quantum computing beginnings.</span>
                </div>
                <div>
                    <Switch>
                        <Route path="/blog/0001" component={_0001_Quantum}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
}