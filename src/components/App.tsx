import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import StoryPage from './stories/StoryPage';
import StorySelectPage from './stories/StorySelectPage';
import Layout from './Layout';
import WelcomePage from './WelcomePage';

function App() {
  const [header, setHeader] = useState('');
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <WelcomePage />
        </Route>
        <Layout header={header}>
          <Route
            exact
            path='/stories'
            render={() =>
              <StorySelectPage setHeader={(header: string) => setHeader(header)} />
            }
          />
          <Route
            path='/stories/:id'
            render={() =>
              <StoryPage setHeader={(header: string) => setHeader(header)} />
            }
          />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
