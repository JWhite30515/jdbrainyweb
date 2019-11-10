import React, { useState, useEffect } from 'react';

import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { useHistory, useLocation } from 'react-router-dom';

export default function QuizPage() {
  const history = useHistory();
  const location = useLocation();
  // const params = useParams();
  const correctWord = location.state.selectedWord;
  const words = location.state.words;

  const [score, setScore] = useState(0);
  const [options, setOptions] = useState(randomizeOptions(words));
  const [hasStreak, setHasStreak] = useState(false);
  const [maxScore, setMaxScore] = useState(0);

  const correctWordAudio = new Audio(correctWord.audio);
  correctWordAudio.play();

  useEffect(() => {
    correctWordAudio.play();
    if (score === 3) {
      history.push({
        pathname: '/stories/' + location.state.storyId,
        state: { 
          ...location.state,
          fromQuizPage: true
        }
      });
    }
  })

  const starRatings = [];
  for (let i = 0; i < score; i += 1) {
    starRatings.push(<IoIosStar key={starRatings.length} color="#ffb621"/>);
  }
  if (maxScore > score) {
    const difference = maxScore - score;
    for (let i = 0; i < difference; i += 1) {
      starRatings.push(<IoIosStar key={starRatings.length} color="#0000ff"/>);
    }
  }
  if (starRatings.length < 3) {
    while (starRatings.length !== 3) {
      starRatings.push(<IoIosStarOutline key={starRatings.length} color="#0000ff"/>);
    }
  }

  return (
    <div>
      {starRatings}
      {options.map((option) => {
        return (
          <div
            key={`option-${option.id}`}
            onClick={() => {
              if (option.id === correctWord.id) {
                if (hasStreak) {
                  // increment points if make consecutive correct answer
                  const newScore = score + 1;
                  setScore(newScore);
                  setMaxScore(newScore);
                } else {
                  setScore(1);
                }
                setHasStreak(true);
              } else {
                setHasStreak(false);
                setScore(0);
              }
              setOptions(randomizeOptions(words));
            }}
          >
            <h1>{option.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

function randomizeOptions(words) {
  const randomizedOptions = [];
  const usedIdxs = [];
  for (let i = 0; i < 4; i += 1) {
    let randIdx = Math.floor(Math.random() * 4);
    while (usedIdxs.includes(randIdx)) {
      randIdx = Math.floor(Math.random() * 4);
    }
    randomizedOptions.push(words[randIdx]);
    usedIdxs.push(randIdx);
  }
  return randomizedOptions;
}