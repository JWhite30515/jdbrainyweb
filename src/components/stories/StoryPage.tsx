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
            if (currSection.wordCategories === WordCategory.FRIENDS) {
              setShowFriendModal(true);
            } else {
              setShowWordModal(true);
            }
          }
        }
      });

      sectionAudio.autoplay = true;
    }
  }, [currSectionIdx, currStory, playingSectionAudio]);

  if (!currStory) return <div>No story selected</div>

  // useEffect(() => {
  //   if (!currStory) return;
  //   const { sections } = currStory;
  //   const storyAudio = new Audio(sections[currSectionIdx].audio);

  //   storyAudio.addEventListener('ended', () => {
  //     // if clause for DEMO purposes
  //     if (currSectionIdx < 3) {
  //       setPlayStoryAudio(false);
  //       setShowWordModal(true);
  //     }
  //   });

  //   // for DEMO purposes, this will be fixed up in future
  //   if (currSectionIdx === 0) {
  //     storyAudio.addEventListener('timeupdate', (event) => {
  //       const audio = event.target as unknown as { currentTime: any, duration: any };

  //       let currWordFound = false;
  //       for (let i = 0; i < words.length; i += 1) {
  //         if (currWordFound) break;
  //         if (audio.currentTime >= words[i].start && audio.currentTime <= words[i].end) {
  //           currWordFound = true;
  //           setCurrWordIdx(i);
  //           // console.log(currWordIdx);
  //         }
  //       }
  //     });
  //   }

  //   if (playStoryAudio) storyAudio.autoplay = true;
  // }, [playStoryAudio])

  // if (!currStory) return <div>No story selected</div>

  // const { currSectionIdx, sections } = currStory;

  // let storyText: JSX.Element[] = [];

  // let demoText: JSX.Element[] = [];

  // sections.forEach((section, idx) => {
  //   // this if case for DEMO purposes
  //   if (currSectionIdx === 0 && idx === 0) {
  //     words.forEach((word, wordIdx) => {
  //       if (wordIdx === currWordIdx) {
  //         demoText.push(
  //         <span key={`demo-word-${wordIdx}`} style={{ backgroundColor: 'yellow' }}>
  //           {word.text + ' '}
  //           </span>
  //         );
  //      } else {
  //         demoText.push(<span key={`demo-word-${wordIdx}`}>{word.text + ' '}</span>);
  //       }
  //     });

  //     demoText.push(
  //       <span
  //         className="clickable"
  //         key={`word-${idx}`}
  //         onClick={() => {
  //           props.changeCurrentSection(currStory.id, idx);
  //           setPlayStoryAudio(false);
  //           setWord(null);
  //           setShowWordModal(true);
  //         }}
  //       >
  //         <b>{section.word ? section.word.text + ' ' : '_____'}</b>
  //       </span>
  //     );
  //   } else {
  //     if (idx <= currSectionIdx) {
  //       storyText.push(<span key={`text-${idx}`}>{section.text + ' '}</span>);
  //       storyText.push(
  //         <span
  //           className={currSectionIdx < 3 ? 'clickable' : ''}
  //           key={`word-${idx}`}
  //           onClick={() => {
  //             props.changeCurrentSection(currStory.id, idx);
  //             setPlayStoryAudio(false);
  //             setWord(null);
  //             setShowWordModal(true);
  //           }}
  //         >
  //           <b>{section.word ? section.word.text + ' ' : '_____'}</b>
  //         </span>
  //       );
  //     }
  //   }
  // });

  // // for DEMO purposes
  // const textToShow = currSectionIdx === 0 ? demoText : storyText;

  const wordImgs: JSX.Element[] = [];

  currStory.sections.forEach((section, idx) => {
    const { word, imgPos } = section;
  
    if (word && word.img && imgPos) {
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
                src={currStory.img}
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