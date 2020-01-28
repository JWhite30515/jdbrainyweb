import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import StoryPage from './stories/StoryPage';
import StorySelectPage from './stories/StorySelectPage';
import WordSelectPage from './words/WordSelectPage';
import Layout from './Layout';
// import QuizPage from './QuizPage';
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
          <Route exact path='/word-select'>
            <WordSelectPage />
          </Route>
          {/* <Route path='/categories/:id'>
            <WordsPage />
          </Route> */}
          {/* <Route path='/quiz/:id'>
            <QuizPage />
          </Route> */}
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
