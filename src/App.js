import './App.css';
import React from 'react'
import Bio from "./Bio"
import Resume from "./resume"
import Skills from "./Skills"

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path= "/">
        <Nav />
       </Route>
       <Route exact path= "/bio">
        <Bio />
       </Route>
       <Route exact path= "/resume">
        <Resume />
       </Route>
       <Route exact path= "/skills">
        <Skills />
       </Route>

     </Switch>
    </div>
  );
}

export default App;
