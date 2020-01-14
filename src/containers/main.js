import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nepage from "./nepage";
import Project from "./project";


const Main = () => (
    
  <Switch>
      console.log("ki banu");
    <Route exact path="/Nepage" component={Nepage} />
    <Route path="/Project" component={Project} />
  </Switch>
)

export default Main;