
import React, { useState } from "react"
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About'
import PokeDex from './components/PokeDex';
import Forum from "./components/Forum";

function App() {
  const [page, setPage] = useState("/")
  
  return (
      <div>
          <NavBar onChangePage={setPage} />
          <Switch>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/pokedex">
                  <PokeDex/>
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path='/forum'>
                  <Forum />
              </Route>
              <Route path="*">
                  <h1>404 not found</h1>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
