import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nepage from "./nepage";
import CopiedProject from "./copiedproject";


const Main = () => (
    
  <Switch>
      console.log("ki banu");
    <Route exact path="/Nepage" component={Nepage} />
    <Route path="/CopiedProject" component={CopiedProject} />
  </Switch>
)

export default Main;