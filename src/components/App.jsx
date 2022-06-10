import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => (
  <div>
    <CssBaseline />
    <h1>Filmpire Webapp</h1>
    <NavBar />
    <main>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route path="/movie/:id">
          <MovieInformation />
        </Route>
        <Route path="/actors/:id">
          <Actors />
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
