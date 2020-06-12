import React from "react";
import Home from "./components/Home";
import Name from "./components/Name";
import Ingredient from "./components/Ingredient";
import {
    HashRouter as Router,
//   BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  Redirect,
} from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <div>
        <h1 className='title'>Your Cocktail Bar</h1>
        <div className="nav">
          <NavLink to="/" className="nav-home">
            Home
          </NavLink>
          {/* <NavLink to="/cocktail/name" className="nav-cocktail">Name</NavLink>
          <NavLink to="/cocktail/ingredient" className="nav-cocktail">ingredient</NavLink> */}
        </div>

        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cocktail/name" render={() => <Redirect to="/cocktail/name/margarita" />} />
          <Route path="/cocktail/name/:name" component={Name} />
          <Redirect exact from="/cocktail/ingredient/" to="/cocktail/ingredient/vodka" />
          <Route path="/cocktail/ingredient/:ingredient" component={Ingredient} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

/*
Tried to get Browser Route work, couldn't
    <Route path='/' component={Home}>
      <Route path="/cocktail/name" component={Name}/>
      <Route path="/cocktail/ingredient" component={Ingredient}/>
    </Route> 
    //or
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cocktail/name">
        <Name />
        </Route>
        <Route path="/cocktail/ingredient" component={Ingredient} />
     </Switch> 

// different way to write Redirect
        <Route exact path="/cocktail/ingredient/">
            <Redirect to="/cocktail/ingredient/1" />
          </Route> 
*/
