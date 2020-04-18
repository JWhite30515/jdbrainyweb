import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Section from './Section';
import QuizPage from '../QuizPage';
import FriendModal from '../words/FriendModal';
import WordModal from '../words/WordModal';
import IRootState from '../../redux/state/rootState';
import { IStory } from '../../redux/state/storyState';
import { IWord, WordCategory } from '../../redux/state/wordState';

import '../../css/common.css';
import '../../css/story.css';

export interface IStoryPageProps {
  stories: IStory[];
}

function StoryPage(props: IStoryPageProps) {
  const { stories } = props;

  const { id } = useParams();

  const basePath = `/stories/${id}`;

  const currStory = stories.find(story => story.id === Number(id));

  const [currSectionIdx, setCurrSectionIdx] = useState(0);
  const [fromQuiz, setFromQuiz] = useState(false);
  const [playingSectionAudio, setPlayingSectionAudio] = useState(true);
  const [quizWord, setQuizWord] = useState({} as IWord);
  const [showFriendModal, setShowFriendModal] = useState(false);
  const [showWordModal, setShowWordModal] = useState(false);
  const [wordAudio, setWordAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (currSectionIdx !== 0) {
      if (wordAudio) {
        if (fromQuiz) {
          // need to attach onEnded event listener here if from quiz page redirect
          wordAudio.addEventListener('ended', () => {
            setPlayingSectionAudio(true);
          });
        }

        wordAudio.autoplay = true;
      }
    }
  }, [currSectionIdx, fromQuiz, playingSectionAudio, wordAudio]);

  useEffect(() => {
    if (!currStory) return;
    const { sections } = currStory;

    if (sections.length === 0) return;
    if (playingSectionAudio) {
      const currSection = sections[currSectionIdx];
      const sectionAudio = new Audio(sections[currSectionIdx].audio);
      sectionAudio.addEventListener('ended', () => {
        setPlayingSectionAudio(false);
        if (currSection.word) {
          const wordAudio = new Audio(currSection.word.audio);
          wordAudio.addEventListener('ended', () => {
            if (currSectionIdx < sections.length - 1) {
              setCurrSectionIdx(currSectionIdx + 1);
            }
            setPlayingSectionAudio(true);
          });
          wordAudio.play();
        } else {
          if (currSectionIdx !== sections.length - 1) {
            if (
              currSection.wordCategories === WordCategory.FRIENDS
            ) {
              setShowFriendModal(true);
            } else {
              if (
                currSection.wordCategories.length &&
                currSection.wordCategories[0] === WordCategory.FRIENDS
              ) {
                setShowFriendModal(true);
              } else {
                setShowWordModal(true);
              }
            }
          }
        }
      });

      sectionAudio.autoplay = true;
    }
  }, [currSectionIdx, currStory, playingSectionAudio]);

  if (!currStory) return <div>No story selected</div>

  const currSection = currStory.sections[currSectionIdx];
  const currPart = currStory.parts.find(part => part.id === currSection.part);

  if (!currPart) return <div>Error rendering story</div>;

  const wordImgs: JSX.Element[] = [];

  currStory.sections.forEach((section, idx) => {
    const { word, imgPos, part } = section;
  
    if (word && word.img && imgPos && part === currPart.id) {
      wordImgs.push(
        <img
          key={`img_${idx}`}
          className="image"
          src={word.img}
          alt={word.text}
          style={{ 
            top: `${imgPos.top}%`,
            left: `${imgPos.left}%`,
            maxWidth: imgPos.width ? `${imgPos.width}%` : '10%',
          }}
        />
      )
    }
  });

  return (
    <Switch>
      <Route
        exact
        path={basePath}
      >
        <div className="flex-column">
          {showFriendModal &&
            <FriendModal
              currStoryId={currStory.id}
              currSectionIdx={currSectionIdx}
              setCurrSectionIdx={(idx: number) => setCurrSectionIdx(idx)}
              setPlayingSectionAudio={(playing: boolean) => setPlayingSectionAudio(playing)}
              setShowFriendModal={(open: boolean) => setShowFriendModal(open)}
              setWordAudio={(audio: HTMLAudioElement) => setWordAudio(audio)}
            />
          }
          {showWordModal &&
            <WordModal
              currStory={currStory}
              currSectionIdx={currSectionIdx}
              setCurrSectionIdx={(idx: number) => setCurrSectionIdx(idx)}
              setPlayingSectionAudio={(playing: boolean) => setPlayingSectionAudio(playing)}
              setQuizWord={(word: IWord) => setQuizWord(word)}
              setShowWordModal={(open: boolean) => setShowWordModal(open)}
              setWordAudio={(audio: HTMLAudioElement) => setWordAudio(audio)}
            />
          }
          <h1>{currStory.title}</h1>
          <div className="flex-row" style={{ margin: '0 10%', flexWrap: 'wrap' }}>
            <div className="parent" style={{ width: '50%' }}>
              <img
                style={{ width: '100%', margin: '20px 0' }}
                src={currPart.backgroundImg}
                alt={currStory.title}
              />
              {wordImgs}
            </div>
            <div className="card-item story-text">
              {currStory.sections.map((section, idx) =>
                <Section
                  currSectionIdx={currSectionIdx}
                  key={`section_${idx}`}
                  sections={currStory.sections}
                  sectionIdx={idx}
                  setCurrSectionIdx={(idx: number) => setCurrSectionIdx(idx)}
                  setShowFriendModal={(open: boolean) => setShowFriendModal(open)}
                  setShowWordModal={(open: boolean) => setShowWordModal(open)}
                />
              )}
            </div>
          </div>
        </div>
      </Route>
      <Route
        path={`${basePath}/quiz`}
        render={() =>
          <QuizPage
            currSectionIdx={currSectionIdx}
            currStoryId={currStory.id}
            quizWord={quizWord}
            setCurrSectionIdx={(idx: number) => setCurrSectionIdx(idx)}
            setFromQuiz={(fromQuiz: boolean) => setFromQuiz(fromQuiz)}
            setPlayingSectionAudio={(playing: boolean) => setPlayingSectionAudio(playing)}
            setWordAudio={(audio: HTMLAudioElement) => setWordAudio(audio)}
          />
        }
      />
    </Switch>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    stories: state.storyState.stories,
  }
}

export default connect(
  mapStateToProps,
  () => ({})
)(StoryPage);