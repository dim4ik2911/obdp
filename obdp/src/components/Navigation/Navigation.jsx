import React from "react";
// import styles from "./Navigation.module.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Main from "../Main";
import Saved from "../Saved";

const Navigation = (props) => {
  const { movies } = props;
  return (
    <Router>
      <>
        <div>
          <Link to="/">Main</Link>
          <Link to="/saved">Saved</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Main movies={movies} />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default Navigation;
