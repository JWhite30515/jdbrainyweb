import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
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
  const [playingSectionAudio, setPlayingSectionAudio] = useState(true);
  const [quizWord, setQuizWord] = useState({} as IWord);
  const [showFriendModal, setShowFriendModal] = useState(false);
  const [showWordModal, setShowWordModal] = useState(false);
  const [wordAudio, setWordAudio] = useState<HTMLAudioElement | null>(null);
  const [sectionAudio, setSectionAudio] = useState<HTMLAudioElement | null>(null);

  const history = useHistory();

  useEffect(() => {
    if (currSectionIdx !== 0) {
      if (wordAudio) {
        wordAudio.autoplay = true;
      }
    }
  }, [currSectionIdx, wordAudio]);

  useEffect(() => {
    if (!currStory) return;
    const { sections } = currStory;

    if (sections.length === 0) return;

    let sectionAudio: HTMLAudioElement | null = new Audio(sections[currSectionIdx].audio);
  
    if (playingSectionAudio) {
      const currSection = sections[currSectionIdx];
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
          // show word modals if (a) is not last section
          // and (b) is not a section with an already defined word
          if (
            currSectionIdx !== sections.length - 1 &&
            currSection.word === undefined
          ) {
            console.log('whens this getting set');
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

      setSectionAudio(sectionAudio);
      sectionAudio.autoplay = true;
    }
    
    return history.listen(() => {
      if (wordAudio) {
        wordAudio.pause();
        setWordAudio(null);
      }
      if (sectionAudio) {
        setPlayingSectionAudio(false);
        sectionAudio.pause();
        sectionAudio = null;
      }
    });
  }, [currSectionIdx, currStory, playingSectionAudio, history, wordAudio]);

  if (!currStory) return <div>No story selected</div>

  const currSection = currStory.sections[currSectionIdx];
  const currPart = currStory.parts.find(part => part.id === currSection.part);

  if (!currPart) return <div>Error rendering story</div>;

  const wordImgs: JSX.Element[] = [];

  currStory.sections.forEach((section, idx) => {
    const { word, imgPositions } = section;

    if (!imgPositions) return;

    const currImg = imgPositions.find(img => img.part === currPart.id);

    if (word && word.img && currImg) {
      wordImgs.push(
        <img
          key={`img_${idx}`}
          className="image"
          src={word.img}
          alt={word.text}
          style={{
            top: `${currImg.top}%`,
            left: `${currImg.left}%`,
            maxWidth: currImg.width ? `${currImg.width}%` : '10%',
            transform: `rotate(${currImg.rotate}deg)`,
          }}
        />
      )
    }
  });

  let storyTextClassName = 'story-text card-item';
  if (currSectionIdx !== 0) storyTextClassName += ' flex-column-reverse';

  console.log(showFriendModal);
  console.log(showWordModal);

  return (
    <Switch>
      <Route
        exact
        path={basePath}
      >
        <div className="flex-column">
          {showFriendModal &&
            <FriendModal
              currStory={currStory}
              currSectionIdx={currSectionIdx}
              sectionAudio={sectionAudio}
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
              sectionAudio={sectionAudio}
              setCurrSectionIdx={(idx: number) => setCurrSectionIdx(idx)}
              setPlayingSectionAudio={(playing: boolean) => setPlayingSectionAudio(playing)}
              setQuizWord={(word: IWord) => setQuizWord(word)}
              setShowWordModal={(open: boolean) => setShowWordModal(open)}
              setWordAudio={(audio: HTMLAudioElement) => setWordAudio(audio)}
            />
          }
          <h1>{currStory.title}</h1>
          <div className="flex-column" style={{ margin: '0 10%', flexWrap: 'wrap' }}>
            <div className="parent">
              <img
                className="background-img"
                src={currPart.backgroundImg}
                alt={currStory.title}
              />
              {wordImgs}
            </div>
            <div className={storyTextClassName}>
              <div>
                {currStory.sections.map((section, idx) =>
                  <Section
                    currSectionIdx={currSectionIdx}
                    key={`section_${idx}`}
                    sections={currStory.sections}
                    sectionIdx={idx}
                    setCurrSectionIdx={(idx: number) => setCurrSectionIdx(idx)}
                    setPlayingSectionAudio={(playing: boolean) => setPlayingSectionAudio(playing)}
                    setShowFriendModal={(open: boolean) => setShowFriendModal(open)}
                    setShowWordModal={(open: boolean) => setShowWordModal(open)}
                  />
                )}
              </div>
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