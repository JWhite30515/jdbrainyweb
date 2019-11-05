import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import StoriesPage from './stories/StoriesPage';
import Layout from './Layout';
import WelcomePage from './WelcomePage';

import '../App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <WelcomePage />
        </Route>
        <Layout>
          <Route path='/stories'>
            <StoriesPage />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
