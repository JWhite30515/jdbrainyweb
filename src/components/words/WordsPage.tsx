import React, { useState } from 'react';

import { IWord } from "../../redux/state/wordState";
import QuizPage from '../QuizPage';

export interface IWordsPageProps {
  words: IWord[];
}

export function WordsPage(props: IWordsPageProps) {
  const { words } = props;

  const [word, setWord] = useState<any | null>(null);

  if (word) {
    return (
      <QuizPage
        word={word}
        words={words}
      />
    );
  }
  return (
    <div>
      <h1>Words</h1>
      <div className="flex-row list-row">
        {words.map((word, idx) => {
          const disabled = word.text !== 'ape' ? true : false;
          return (
            <div     
              className={disabled ? 'card-item flex-column' : 'card-item flex-column clickable'}
              key={`wordId-${idx + 1}`}
              onClick={disabled ? () => null : () => {
                if (!word.completed) {
                  setWord(word);
                }
              }}
            >
              <h1>{word.text}</h1>
              <img
                className={disabled ? 'card-img grayscale' : 'card-img'}
                src={word.img}
                alt={word.text}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}