import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import IRootState from '../../redux/state/rootState';
import { selectStory, changeCurrentSection } from '../../redux/actions/storyActions';
import { IStory } from '../../redux/state/storyState';
import { IWord } from '../../redux/state/wordState';

import WordModal from '../words/WordModal';

import '../../css/common.css';
import '../../css/story.css';

export interface IStoryPageProps {
  story: IStory | null;
  changeCurrentSection(idx: number): void;
  selectStory(id: number): void;
}

function StoryPage(props: IStoryPageProps) {
  const params: { id?: string | undefined } = useParams();

  const { story } = props;

  const [currWordIdx, setCurrWordIdx] = useState(0);

  const [showWordModal, setShowWordModal] = useState(false);
  const [playStoryAudio, setPlayStoryAudio] = useState(false);
  const [selectedSectionIdx, setSelectedSectionIdx] = useState(story ? story.currSectionIdx : 0);

  const [word, setWord] = useState<IWord | null>(null);

  useEffect(() => {
    props.selectStory(Number(params.id));
  }, []);

  useEffect(() => {
    if (!story) return;

    const prevSection = story.sections[story.currSectionIdx - 1];
    if (prevSection && prevSection.word && prevSection.word.audio) {
      // const wordAudio = new Audio(prevSection.word.audio);
      // wordAudio.addEventListener('ended', () => {
      //   setCanPlayStoryAudio(true);
      // });
      // wordAudio.play();
      // setPlayStoryAudio(false);
      console.log(story.currSectionIdx);
      console.log(prevSection.word);
      console.log('setting word');
      setWord(prevSection.word);
      // setPlayWordAudio(true);

    } else {
      setPlayStoryAudio(true);
    }
  }, [story]);

  useEffect(() => {
    if (!story) return;
    const { sections } = story;
    const storyAudio = new Audio(sections[currSectionIdx].audio);

    storyAudio.addEventListener('ended', () => {
      // if (currSection.word && currSection.word.completed) {
      // } else {
      // }
      setPlayStoryAudio(false);
      setShowWordModal(true);
    });

    if (playStoryAudio) storyAudio.autoplay = true;
  }, [playStoryAudio])

  useEffect(() => {
    const wordAudio = new Audio(word ? word.audio : null);
    wordAudio.addEventListener('ended', () => {
      setPlayStoryAudio(true);
    });
    if (word) wordAudio.autoplay = true;
  }, [word, story]);

  if (!story) return <div>No story selected</div>
  const { currSectionIdx, sections } = story;

  const currSection = sections[currSectionIdx];
  const currWord = currSection.word;

  const words = [
    {
      start: 3.72, end: 3.86, text: 'Do'
    },
    {
      start: 4.0, end: 4.2, text: 'you'
    },
    {
      start: 4.25, end: 4.5, text: 'like'
    },
    {
      start: 4.6, end: 4.94, text: 'wearing'
    },
    {
      start: 5.2, end: 6.16, text: 'costumes'
    },
    {
      start: 6.2, end: 6.3, text: 'and'
    },
    {
      start: 6.39, end: 6.73, text: 'pretending'
    },
    {
      start: 6.8, end: 7.0, text: 'to'
    },
    {
      start: 7.1, end: 7.2, text: 'be'
    },
    {
      start: 7.25, end: 7.65, text: 'somebody'
    },
    {
      start: 8.3, end: 8.85, text: 'different?'
    },
    {
      start: 9.4, end: 9.46, text: 'The'
    },
    {
      start: 9.52, end: 10.07, text: 'spelling'
    },
    {
      start: 10.3, end: 10.5, text: 'kids'
    },
    {
      start: 10.53, end: 10.73, text: 'really'
    },
    {
      start: 11.2, end: 11.28, text: 'do,'
    },
    {
      start: 11.9, end: 12, text: 'and'
    },
    {
      start: 12.09, end: 12.44, text: 'enjoyed'
    },
    {
      start: 12.94, end: 13.1, text: 'the'
    },
    {
      start: 13.54, end: 14.2, text: 'goofiest,'
    },
    {
      start: 14.3, end: 15.12, text: 'silliest,'
    },
    {
      start: 15.7, end: 16.2, text: 'craziest,'
    },
    {
      start: 16.4, end: 17.1, text: 'wackiest'
    },
    {
      start: 17.6, end: 18.34, text: 'mixed-up'
    },
    {
      start: 18.6, end: 18.9, text: 'costume'
    },
    {
      start: 18.94, end: 19.33, text: 'party--'
    },
    {
      start: 19.95, end: 20.47, text: 'ever!'
    },
    {
      start: 21.6, end: 21.64, text: 'And'
    },
    {
      start: 21.71, end: 21.87, text: 'had'
    },
    {
      start: 21.92, end: 22.01, text: 'their'
    },
    {
      start: 22.39, end: 22.81, text: 'pets'
    },
    {
      start: 22.89, end: 23.11, text: 'dress'
    },
    {
      start: 23.30, end: 23.39, text: 'up'
    },
    {
      start: 23.64, end: 23.93, text: 'too!'
    },
    {
      start: 24.2, end: 24.28, text: 'The'
    },
    {
      start: 24.42, end: 24.55, text: 'only'
    },
    {
      start: 24.7, end: 24.89, text: 'rule'
    },
    {
      start: 25, end: 25.22, text: 'was-'
    },
    {
      start: 25.48, end: 26.32, text: 'no...'
    },
    {
      start: 26.35, end: 27.12, text: 'scary...'
    },
    {
      start: 27.68, end: 28.34, text: 'costumes.'
    },
    {
      start: 29.3, end: 29.49, text: 'Some'
    },
    {
      start: 29.8, end: 30, text: 'kids'
    },
    {
      start: 30.3, end: 30.6, text: 'dressed'
    },
    {
      start: 30.6, end: 30.7, text: 'like'
    },
    {
      start: 30.7, end: 30.8, text: 'a'
    },
  ]
  const wordElts: any[] = [];

  words.forEach((word, idx) => {
    // secondary or condition is for DEMO purposes
    if (idx <= currWordIdx || currSectionIdx > 0) {
      wordElts.push(
       <span key={`${word.text}_${idx}`} style={{ backgroundColor: 'yellow' }}>
         {word.text + ' '}
        </span>
      );
    } else {
      wordElts.push(<span key={`${word.text}_${idx}`}>{word.text + ' '}</span>);
    }
  });

  const masteredWordElts: any[] = [];
  story.sections.forEach((section, idx) => {
    const { word } = section;

    if (!word) return;

    // if (word.audio) {
    //   const aud = new Audio(word.audio);
    //   aud.play();
    // }
    masteredWordElts.push(
      <span
        key={`${word.text}_${idx}`} style={{ backgroundColor: 'yellow'}}
      >
        <b>{word.text + ' '}</b>
      </span>
    );
  });

  let storyText: JSX.Element[] = [];

  sections.forEach((section, idx) => {
    if (idx <= currSectionIdx) {
      storyText.push(<span key={`text-${idx}`}>{section.text + ' '}</span>);
      if (section.word) storyText.push(
        <span
          className="clickable"
          onClick={() => {
            console.log(selectedSectionIdx);
            // setShowWordModal(true);
          }}
          key={`word-${idx}`}
        >
          <b>{section.word.text + ' '}</b>
        </span>
      );
    }
  });

  return (
    <div className="flex-column">
      {showWordModal &&
        <WordModal
          setShowWordModal={(open: boolean) => setShowWordModal(open)}
          selectedSectionIdx={selectedSectionIdx}
        />
      }
      <h1>{story.title}</h1>
      <h1>{playStoryAudio}</h1>
      <div className="flex-row" style={{ margin: '0 10%'}}>
        <div className="parent" style={{ width: '50%' }}>
          <img
            style={{ maxWidth: '600px', margin: '20px 0'}}
            src={story.img}
            alt={story.title}
          />
          {currSectionIdx === 1 &&
            <img
              className="image2"
              src={sections[0].word ? sections[0].word.img : undefined}
              style={{ maxWidth: '60px' }}
              alt={'alt text'}
            />
          }
        </div>
        <div className="card-item story-text">
          {/* {wordElts}
          {masteredWordElts}
          {currSectionIdx > 0 && <span style={{ backgroundColor: 'yellow' }}>or...</span>} */}
          {storyText}
        </div>
        {/* <audio
          id="storyAudio"
          autoPlay={playStoryAudio}
          controls={true}
          src={sections[currSectionIdx].audio}
          onPlay={() => {
            console.log('story audio is playing');
          }}
          onEnded={() => {
            // setPlayStoryAudio(false);
            if (currSection.word && currSection.word.completed) {
            } else {
              setShowWordModal(true);
            }
          }}
          onTimeUpdate={(e) => {
            const audio = e.target as unknown as { currentTime: any, duration: any };

            let currWordFound = false;

            for (let i = 0; i < words.length; i += 1) {
              if (currWordFound) break;
              if (audio.currentTime >= words[i].start && audio.currentTime <= words[i].end) {
                currWordFound = true;
                setCurrWordIdx(i);
              }
            }
          }}
        />
        <audio
          id="wordAudio"
          src={word ? word.audio : null}
          autoPlay={playWordAudio}
          onPlay={() => {
            console.log('playing here');
          }}
          onEnded={() => {
            setPlayWordAudio(false);
            setPlayStoryAudio(true);
          }}
        /> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    story: state.storyState.currStory,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeCurrentSection: bindActionCreators(changeCurrentSection, dispatch),
    selectStory: bindActionCreators(selectStory, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryPage);