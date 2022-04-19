
import React, { useState } from "react"
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About'
import PokeDex from './components/PokeDex';

function App() {
  const [page, setPage] = useState("/")
  
  return (
      <div>
          <NavBar onChangePage={setPage} />
          <Switch>
              <Route path="/about">
                  
              </Route>
              <Route path="/pokedex">
                  <PokeDex/>
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="*">
                  <h1>404 not found</h1>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
