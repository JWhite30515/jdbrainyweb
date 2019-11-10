import * as React from 'react';

import { useHistory, useLocation, useParams } from 'react-router-dom';

import { words } from '../../constants/words';

export default function WordsPage() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  return (
    <div>
      <h1>Words</h1>
      <div className="flex-row list-row">
        {words[params.id] && words[params.id].map(word => {
          const disabled = word.name !== 'ape' ? true : false;
          return (
            <div     
              className={disabled ? 'card-item flex-column' : 'card-item flex-column clickable'}
              key={`wordId-${word.id}`}
              onClick={disabled ? null : () => {
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
              <img
                className={disabled ? 'card-img grayscale' : 'card-img'}
                src={word.img}
                alt={word.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  )
}