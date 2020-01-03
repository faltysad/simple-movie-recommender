import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Recommendations from "./components/Recommendations/Recommendations";


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
            <li>
              <Link to="/">Recommendations</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/detail">
            <MovieDetail />
          </Route>
          <Route path="/">
            <Recommendations />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
