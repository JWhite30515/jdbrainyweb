import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import StoriesPage from './stories/StoriesPage';
import StoryPage from './stories/StoryPage';
import CategoriesPage from './words/CategoriesPage';
import WordsPage from './words/WordsPage';
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
            <StoriesPage />
          </Route>
          <Route path='/stories/:id'>
            <StoryPage />
          </Route>
          <Route exact path='/categories'>
            <CategoriesPage />
          </Route>
          <Route path='/categories/:id'>
            <WordsPage />
          </Route>
          <Route path='/quiz/:id'>
            <QuizPage />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
