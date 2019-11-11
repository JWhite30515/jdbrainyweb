import React, { useState, useEffect } from 'react';

import { IoIosStar, IoIosStarOutline, IoIosVolumeHigh } from 'react-icons/io';
import { useHistory, useLocation } from 'react-router-dom';

import '../css/common.css';
import '../css/quiz.css';

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
    starRatings.push(
      <IoIosStar
        key={starRatings.length}
        color="#ffb621"
        // if they are middle most, increase size
        size={starRatings.length === 1 ? '5em' : '3em'}
      />
    );
  }
  if (maxScore > score) {
    const difference = maxScore - score;
    for (let i = 0; i < difference; i += 1) {
      starRatings.push(
        <IoIosStar
          key={starRatings.length}
          color="#0000ff"
          size={starRatings.length === 1 ? '5em' : '3em'}
        />
      );
    }
  }
  if (starRatings.length < 3) {
    while (starRatings.length !== 3) {
      starRatings.push(
        <IoIosStarOutline
          key={starRatings.length}
          color="#0000ff"
          size={starRatings.length === 1 ? '5em' : '3em'}
        />
      );
    }
  }

  return (
    <div className="flex-column">
      <div className="flex-row star-row">
        {starRatings}
      </div>
      <div className="flex-row">
        {options.map((option) => {
          return (
            <div
              className="quiz-item card-item"
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
              <img
                className={'card-img'}
                style={{ maxWidth: '120px' }}
                src={option.img}
                alt={option.name}
              />
            </div>
          );
        })}
      </div>
      <div onClick={() => correctWordAudio.play()}>
        <IoIosVolumeHigh size={'3em'} />
      </div>
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