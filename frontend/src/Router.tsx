import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Recommendations from "./components/Recommendations/Recommendations";

const RouterOutput: React.FC = () => {
  return (
    // <Router>
    <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/detail/:movieId" children={<MovieDetail />} />
            
 
          <Route path="/">
            <Recommendations />
          </Route>
        </Switch>
        </>
    // </Router>
  )
};

export default RouterOutput;
