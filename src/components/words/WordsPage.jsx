import * as React from 'react';

import { useHistory, useLocation, useParams } from 'react-router-dom';

import { words } from '../../constants/words';

export default function WordsPage() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  return (
    <div>
      {words[params.id] && words[params.id].map(word => {
        return (
          <div     
            key={`wordId-${word.id}`}
            style={{ borderStyle: 'solid', borderWidth: 'medium' }}
            onClick={() => {
              if (!word.complete) {
                history.push({
                  pathname: '/quiz/' + word.name,
                  state: {
                    ...location.state,
                    selectedWord: word,
                    words: words[params.id]
                  }
                });
              }
            }}
          >
            <h1>{word.name}</h1>
          </div>
        );
      })}
    </div>
  )
}