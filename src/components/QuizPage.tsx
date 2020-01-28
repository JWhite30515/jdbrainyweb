import React, { useState, useEffect } from 'react';

import { IoIosStar, IoIosStarOutline, IoIosVolumeHigh } from 'react-icons/io';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import IRootState from '../redux/state/rootState';
import { IWord } from '../redux/state/wordState';
import { masterWord } from '../redux/actions/wordActions';

import '../css/common.css';
import '../css/quiz.css';

export interface IQuizPageProps {
  word: IWord;
  words: IWord[];
  storyIdx: number;
  masterWord: (word: IWord, storyIdx: number) => void
}

function QuizPage(props: IQuizPageProps) {
  const { word, words, storyIdx } = props;

  const history = useHistory();

  const [score, setScore] = useState(0);
  const [options, setOptions] = useState(randomizeOptions(words));
  const [hasStreak, setHasStreak] = useState(false);
  const [maxScore, setMaxScore] = useState(0);

  const wordAudio = new Audio(word.audio);
  wordAudio.play();

  useEffect(() => {
    console.log(storyIdx);
    wordAudio.play();
    if (score === 3 && !(storyIdx < 0)) {
      const newWord = { ...word, completed: true };
      props.masterWord(newWord, storyIdx)
      history.push({
        pathname: '/stories/' + storyIdx,
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
        {options.map((option, idx) => {
          return (
            <div
              className="quiz-item card-item"
              key={`option-${idx + 1}`}
              onClick={() => {
                if (option.text === word.text) {
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
              <h1>{option.text}</h1>
              <img
                className={'card-img'}
                style={{ maxWidth: '120px' }}
                src={option.img}
                alt={option.text}
              />
            </div>
          );
        })}
      </div>
      <div onClick={() => wordAudio.play()}>
        <IoIosVolumeHigh size={'3em'} />
      </div>
    </div>
  );
}

const randomizeOptions = (words: IWord[]) => {
  const randomizedOptions = [];
  const usedIdxs: number[] = [];
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

const mapStateToProps = (state: IRootState) => {
  const storyIdx = state.storyState.stories.findIndex(
    story => state.storyState.currStory ? story.title === state.storyState.currStory.title : false
  );

  return {
    storyIdx,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    masterWord: bindActionCreators(masterWord, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage);