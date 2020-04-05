import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import IRootState from '../../redux/state/rootState';
import { IStory } from '../../redux/state/storyState';
import { IWord } from '../../redux/state/wordState';

import WordModal from '../words/WordModal';

import '../../css/common.css';
import '../../css/story.css';

import words from './costumeWords';
import QuizPage from '../QuizPage';

import Section from './Section';

export interface IStoryPageProps {
  stories: IStory[];
}

function StoryPage(props: IStoryPageProps) {
  const { stories } = props;

  const { id } = useParams();

  const currStory = stories.find(story => story.id === Number(id));

  const [currSectionIdx, setCurrSectionIdx] = useState(0);
  const [playingSectionAudio, setPlayingSectionAudio] = useState(true);
  const [quizWord, setQuizWord] = useState({} as IWord);
  const [showWordModal, setShowWordModal] = useState(false);
  const [wordAudio, setWordAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (currSectionIdx !== 0) {
      if (wordAudio) {
        wordAudio.autoplay = true;
      }
    }
  }, [currSectionIdx, wordAudio]);

  console.log(playingSectionAudio);

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
            setShowWordModal(true);
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

  // const imgs: JSX.Element[] = [];

  // // TODO should do this in above loop but don't have the time
  // sections.forEach((section, idx) => {
  //   if (section.word && section.word.img && section.imgPos) {
  //     imgs.push(
  //       <img
  //         className="image"
  //         src={section.word.img}
  //         alt={section.word.text}
  //         style={{ 
  //           top: `${section.imgPos.top}px`,
  //           left: `${section.imgPos.left}px`,
  //           maxWidth: '60px',
  //         }}
  //       />
  //     )
  //   }
  // });

  const basePath = `/stories/${id}`;
  return (
    <Switch>
      <Route
        exact
        path={basePath}
      >
        <div className="flex-column">
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
          <div className="flex-row" style={{ margin: '0 10%'}}>
            <div className="parent" style={{ width: '50%' }}>
              <img
                style={{ maxWidth: '600px', margin: '20px 0'}}
                src={currStory.img}
                alt={currStory.title}
              />
              {/* {currSectionIdx === 1 &&
                <img
                  className="image2"
                  src={sections[0].word ? sections[0].word.img : undefined}
                  style={{ maxWidth: '60px' }}
                  alt={'alt text'}
                />
              } */}
              {/* {imgs} */}
            </div>
            <div className="card-item story-text">
              {currStory.sections.map((section, idx) => 
                <Section
                  currSectionIdx={currSectionIdx}
                  key={`section_${idx}`}
                  section={section}
                  sectionIdx={idx}
                  setCurrSectionIdx={(idx: number) => setCurrSectionIdx(idx)}
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
            currStory={currStory}
            quizWord={quizWord}
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