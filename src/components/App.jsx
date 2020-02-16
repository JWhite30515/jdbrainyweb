import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import StoryPage from './stories/StoryPage';
import StorySelectPage from './stories/StorySelectPage';
import Layout from './Layout';
import QuizPage from './QuizPage';
import WelcomePage from './WelcomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <WelcomePage />
        </Route>
        <Layout>
          <Route exact path='/stories'>
            <StorySelectPage />
          </Route>
          <Route path='/stories/:id'>
            <StoryPage />
          </Route>
          <Route path='/quiz'>
            <QuizPage />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
