import React, { useEffect, useState } from 'react';

import { FaCompressArrowsAlt, FaExpandArrowsAlt,  } from 'react-icons/fa';
import { IoIosPause } from 'react-icons/io';
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

  const history = useHistory();
  const { id } = useParams();
  const basePath = `/stories/${id}`;

  const currStory = stories.find(story => story.id === Number(id));

  const [audioState, setAudioState] = useState(AudioState.PLAYING_SECTION);
  const [currSectionIdx, setCurrSectionIdx] = useState(0);
  const [playingSectionAudio, setPlayingSectionAudio] = useState(true);
  const [playingWordAudio, setPlayingWordAudio] = useState(false);
  const [quizWord, setQuizWord] = useState({} as IWord);
  const [showFriendModal, setShowFriendModal] = useState(false);
  const [showWordModal, setShowWordModal] = useState(false);
  const [sectionAudio, setSectionAudio] = useState<HTMLAudioElement | null>(null);
  const [wordAudio, setWordAudio] = useState<HTMLAudioElement | null>(null);

  const [storyImgExpanded, setStoryImgExpanded] = useState(false);
  const [storyTextExpanded, setStoryTextExpanded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (currSectionIdx !== 0) {
      if (wordAudio) {
        setPlayingWordAudio(true);
        wordAudio.addEventListener('ended', () => {
          setPlayingWordAudio(false);
        })
        wordAudio.autoplay = true;
      }
    }
  }, [currSectionIdx, wordAudio]);

  /**
  useEffect(() => {
    var myAudio = sectionAudio;
    var isPaused = false;
    function togglePausePlay() {
      if (myAudio != null && isPaused!) {
        isPaused = true;
        return myAudio.pause();
      } else if (myAudio != null && isPaused) {
        isPaused = false;
        return myAudio.play()
      }
    };
    {<IoIosPause className = "background-img-icon"
      onClick={()=>{togglePausePlay()}}/>}
  });
  */

  useEffect(() => {
    if (!currStory) return;
    const { sections } = currStory;

    if (sections.length === 0) return;

    let sectionAudio: HTMLAudioElement | null = new Audio(sections[currSectionIdx].audio);

    if (playingSectionAudio) {
      const currSection = sections[currSectionIdx];
      sectionAudio.addEventListener('ended', () => {
        setPlayingSectionAudio(false);

        // if this section has a word, play that word's audio, move to next section
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

    // prevent audio from playing when navigate away from story page
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
            boxShadow: `0px 0px 10px ${currImg.boxShadow}`,
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
                      playingSectionAudio={playingSectionAudio}
                      playingWordAudio={playingWordAudio}
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
                  <div className="flex-column">
                    <div className ="parent">
                      <IoIosPause 
                        className="pause-audio"
                        size = "1.75em"
                        onClick={() => {
                          if (!isPaused) {
                            if (sectionAudio) {
                              sectionAudio?.pause();
                              setIsPaused(true); 
                            }            
                          } else if (isPaused) {
                            if (sectionAudio) {
                              sectionAudio?.play();
                              setIsPaused(false);
                            }
                          }
                        }}
                    />
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