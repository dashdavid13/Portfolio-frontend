import './App.css';
import React from 'react'
import Bio from "./Bio"
import Resume from "./Resume"
import Skills from "./Skills"
import Contact from "./Contact"
import Project from "./Project"
import Nav from "./Nav"
import { Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Nav />
     <Switch>
       <Route exact path= "/">
        <Bio />
       </Route>
       <Route exact path= "/resume">
        <Resume />
       </Route>
       <Route exact path= "/skills">
        <Skills />
       </Route>
       <Route exact path= "/contact">
        <Contact />
       </Route>
       <Route exact path= "/projects">
        <Project />
       </Route>

     </Switch>
    </div>
  );
}

export default App;
