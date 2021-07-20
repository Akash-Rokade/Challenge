import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CctechChallenge from '../pages/cctechChallenge';

const Routes = () => {
    return (
        <Router>
            <Link to=""></Link>
            <Route path="/" component={CctechChallenge}></Route>
            
        </Router>
    )
}
export default Routes;