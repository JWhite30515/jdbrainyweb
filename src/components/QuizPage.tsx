import React, { useState, useEffect } from 'react';

import { IoIosStar, IoIosStarOutline, IoIosVolumeHigh } from 'react-icons/io';
import { connect } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import IRootState from '../redux/state/rootState';
import { masterWord } from '../redux/actions/wordActions';
import { selectWord } from '../redux/actions/storyActions';
import { IStory } from '../redux/state/storyState';
import { IWord } from '../redux/state/wordState';

import Card from './common/Card';

import '../css/common.css';
import '../css/quiz.css';

export interface IQuizPageProps {
  words: IWord[];
  currStory: IStory;
  quizWord: IWord;
  masterWord: (word: IWord) => void;
  selectWord: (word: IWord, storyId: number) => void;
}

function QuizPage(props: IQuizPageProps) {
  const { currStory, quizWord, words } = props;
  console.log(props);

  const history = useHistory();

  const [score, setScore] = useState(0);
  const [options, setOptions] = useState(randomizeOptions(quizWord, words));
  const [hasStreak, setHasStreak] = useState(false);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    if (!quizWord.audio) return;

    const { id } = currStory;
    
    quizWordAudio.addEventListener('ended', async () => {
      if (score === 3) {
        const newWord = { ...quizWord, completed: true };
        console.log('how many times is this getting called');

        props.masterWord(newWord);
        props.selectWord(newWord, id);

        history.push(`/stories/${id}`);
      }
    });
    quizWordAudio.play();
  }, [score]);


  if (!quizWord || !quizWord.audio) return <div>Error rendering quiz</div>

  const quizWordAudio = new Audio(quizWord.audio);


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
            <Card
              isQuizCard={true}
              onClick={() => {
                if (option.text === quizWord.text) {
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
                setOptions(randomizeOptions(quizWord, words));
              }}
            >
              <h1>{option.text}</h1>
              <img
                className={'card-img'}
                style={{ maxWidth: '120px' }}
                src={option.img}
                alt={option.text}
              />
            </Card>
          );
        })}
      </div>
      <div onClick={() => quizWordAudio.play()}>
        <IoIosVolumeHigh size={'3em'} />
      </div>
    </div>
  );
}

const randomizeOptions = (word: IWord | null, words: IWord[]): IWord[] => {
  if (!word) return [];

  const randomizedOptions: IWord[] = [];
  // used indexes of words in words[] array
  const usedWordIdxs: number[] = [];
  // used indexes of options, 0 - 3
  const usedOptionIdxs: number[] = []; 

  // first randomize index of correct word option, 0 - 3
  const correctIdx = Math.floor(Math.random() * 4);

  randomizedOptions[correctIdx] = word;
  usedOptionIdxs.push(correctIdx);

  // then randomly select 3 other sight words
  for (let i = 0; i < 3; i += 1) {
    let randWordIdx = Math.floor(Math.random() * words.length);

    // make sure idx has not already been used, and is not correct word
    // also make sure no other duplicate words
    while (
      usedWordIdxs.includes(randWordIdx) ||
      words[randWordIdx] === word ||
      randomizedOptions.includes(words[randWordIdx])
    ) {
      randWordIdx = Math.floor(Math.random() * words.length);
    }

    const randomOption = words[randWordIdx];

    // now assign idx 0 - 3, !== correctIdx
    let randOptionIdx = Math.floor(Math.random() * 4);
    while (usedOptionIdxs.includes(randOptionIdx)) {
      randOptionIdx = Math.floor(Math.random() * 4);
    }
    usedOptionIdxs.push(randOptionIdx);
    randomizedOptions[randOptionIdx] = randomOption;
  }

  return randomizedOptions;
}

const mapStateToProps = (state: IRootState) => {
  return {
    words: state.wordState.words,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    masterWord: bindActionCreators(masterWord, dispatch),
    selectWord: bindActionCreators(selectWord, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage);