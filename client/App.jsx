import React from 'react';
import Home from './components/Home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useParams
  } from "react-router-dom";

const App = (props) =>{

    return (
        <Router>
            <div>
                <h2>Your Cocktail Bar</h2>
                <div className="nav">
                    <NavLink to="/" className="nav-home">Home</NavLink>
                </div>

                <hr />

                <switch>
                    <Route exact path="/" component={Home} />
                </switch>
            </div>
        </Router>
    )
}

export default App;