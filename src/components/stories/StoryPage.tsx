import React, { useEffect, useRef, useState } from 'react';

import { FaCompressArrowsAlt, FaExpandArrowsAlt,  } from 'react-icons/fa';
import { IoIosPause, IoIosPlay } from 'react-icons/io';
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
  setHeader(header: string): void;
}

export const AudioState = {
  PLAYING_SECTION: 'playingSection',
  PLAYING_WORD: 'playingWord',
}

function StoryPage(props: IStoryPageProps) {
  const { stories, setHeader } = props;

  const { id } = useParams();
  const basePath = `/stories/${id}`;
  const currStory = stories.find(story => story.id === Number(id));
  const history = useHistory();

  const [audioState, setAudioState] = useState(AudioState.PLAYING_SECTION);
  const [currSectionIdx, setCurrSectionIdx] = useState(0);
  const [quizWord, setQuizWord] = useState({} as IWord);
  const [showFriendModal, setShowFriendModal] = useState(false);
  const [showWordModal, setShowWordModal] = useState(false);
  const [storyImgExpanded, setStoryImgExpanded] = useState(false);
  const [storyTextExpanded, setStoryTextExpanded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currAudio = useRef<HTMLAudioElement | null>(currStory ? new Audio(currStory.sections[currSectionIdx].audio) : null);
  const currUrl = useRef<any>(history.location);

  useEffect(() => {
    if (!currStory || !currAudio.current || currUrl.current.pathname !== history.location.pathname) return;

    if (showFriendModal || showWordModal) {
      currAudio.current.pause();
      return;
    }
    const currSection = currStory.sections[currSectionIdx];

    if (!currAudio.current.ended) currAudio.current.pause();

    if (audioState === AudioState.PLAYING_SECTION) {
      currAudio.current = new Audio(currSection.audio);
      currAudio.current.addEventListener('ended', () => {
        setAudioState(AudioState.PLAYING_WORD);
        // Only show friend/word modal if current word is undefined and this is not the last section
        if (
          currSection.word === undefined &&
          currSectionIdx !== currStory.sections.length - 1
        ) {
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
      })
      currAudio.current.autoplay = true;
    
    } else if (audioState === AudioState.PLAYING_WORD) {
      if (!currSection.word) return;

      setShowFriendModal(false);
      setShowWordModal(false);
      currAudio.current = new Audio(currSection.word.audio);
      currAudio.current.addEventListener('ended', () => {
        setAudioState(AudioState.PLAYING_SECTION);

        // Only increment sectionIdx if this is not the last section
        if (currSectionIdx !== currStory.sections.length - 1) setCurrSectionIdx(currSectionIdx + 1);
      });
      currAudio.current.autoplay = true;
    }

    const dismount = () => {
      history.listen(() => {
        if (currAudio.current) currAudio.current.pause();
      });
    }

    return dismount;
  }, [audioState, currSectionIdx, currStory, history, showFriendModal, showWordModal]);

  if (!currStory) return <div>No story selected</div>

  setHeader(currStory.title);

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
            scale: `rotate(${currImg.rotate}deg) scale(${currImg.scale})`,
            //boxShadow: `0px 0px 10px ${currImg.boxShadow}`,
            boxShadow: idx === currSectionIdx ? `0px 0px 25px ${currImg.boxShadow}` : 'none'
          }}
        />
      )
    }
  });

  let storyTextClassName = 'story-text';
  if (currSectionIdx !== 0) storyTextClassName += ' flex-row-reverse';
  if (storyTextExpanded) storyTextClassName += ' expanded-height';

  // change line 215 to flex column for image on top of text and change nowrap to wrap
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
              setAudioState={(audioState: string) => setAudioState(audioState)}
              setShowFriendModal={(open: boolean) => setShowFriendModal(open)}
            />
          }
          {showWordModal &&
            <WordModal
              currStory={currStory}
              currSectionIdx={currSectionIdx}
              setAudioState={(audioState: string) => setAudioState(audioState)}
              setQuizWord={(word: IWord) => setQuizWord(word)}
              setShowWordModal={(open: boolean) => setShowWordModal(open)}
            />
          }
          <div className="flex-row" style={{ margin: '0 5%' ,flexWrap: 'nowrap' }}> 
            {!storyTextExpanded &&
              <div className="parent">
                <img
                  className={storyImgExpanded ? 'background-img expanded' : 'background-img'}
                  src={currPart.backgroundImg}
                  alt={currStory.title}
                />
                {!storyImgExpanded &&
                  <FaExpandArrowsAlt
                    className="background-img-icon"
                    onClick={() => {
                      setStoryImgExpanded(true);
                    }}
                    size='5%'
                  />
                }
                {storyImgExpanded &&
                  <FaCompressArrowsAlt
                    className="background-img-icon"
                    onClick={() => {
                      setStoryImgExpanded(false);
                    }}
                    size='5%'
                  />
                }
                {wordImgs}
              </div>
            }
            {!storyImgExpanded &&
              <div className="flex-row card-item">
                <div className={storyTextClassName}>
                  <div>
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
                <div className="flex-column">
                  <div className ="parent">
                    {isPaused &&
                      <IoIosPlay 
                        className="pause-audio"
                        size = "1.75em"
                        onClick={() => {
                          if (currAudio.current) {
                            currAudio.current.play();
                            setIsPaused(false);
                          }
                        }}
                      />  
                    }
                    {!isPaused &&
                      <IoIosPause 
                        className="pause-audio"
                        size = "1.75em"
                        onClick={() => {
                          if (currAudio.current) {
                            currAudio.current.pause();
                            setIsPaused(true);
                          }
                        }}
                      />  
                    }
                  </div>
                  {!storyTextExpanded &&
                    <FaExpandArrowsAlt
                      className="story-icon"
                      size="1.5em"
                      onClick={() => {
                        setStoryTextExpanded(true);
                      }}
                    />
                  }
                  {storyTextExpanded &&
                    <FaCompressArrowsAlt
                      className="story-icon"
                      size="1.5em"
                      onClick={() => {
                        setStoryTextExpanded(false);
                      }}
                    />
                  }
                </div>
              </div>
            }
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
            setAudioState={(audioState: string) => setAudioState(audioState)}
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