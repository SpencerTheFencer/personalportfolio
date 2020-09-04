import React from "react";
import "./styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/AboutComponents/About";
import Skills from "./components/SkillComponents/Skills";
import Projects from "./components/ProjectComponents/Projects";

function App() {
  return (
    <>
      <div id="page">
        <Menu />
        <div id="pageContainer">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
