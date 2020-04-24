import * as React from 'react';

import { ISection } from '../../redux/state/storyState';
import { WordCategory } from '../../redux/state/wordState';

export interface ISectionProps {
  currSectionIdx: number;
  playingSectionAudio: boolean;
  playingWordAudio: boolean;
  sections: ISection[];
  sectionIdx: number;
  setCurrSectionIdx(idx: number): void;
  setShowFriendModal(open: boolean): void;
  setShowWordModal(open: boolean): void;
  setPlayingSectionAudio(playing: boolean): void;
}

export default function Section(props: ISectionProps) {
  const {
    currSectionIdx,
    playingSectionAudio,
    playingWordAudio,
    sections,
    sectionIdx,
    setCurrSectionIdx,
    setPlayingSectionAudio,
    setShowFriendModal,
    setShowWordModal,
  } = props;

  const { text, word } = sections[sectionIdx];

  const isLastSection = (sectionIdx === sections.length - 1);
  const sectionHighlighted = (sectionIdx === currSectionIdx);
  const sectionTextVisible = sectionIdx <= currSectionIdx;

  let wordSpanClass = '';
  if (sectionHighlighted) wordSpanClass += ' highlighted';

  if (
    sectionIdx === currSectionIdx ||
    (!playingSectionAudio && !playingWordAudio)
  ) {
    wordSpanClass += ' clickable';
  }

  return (
    <React.Fragment>
      {sectionTextVisible &&
        <React.Fragment>
          <span
            className={sectionHighlighted ? 'highlighted' : ''}
          >
            {text + (isLastSection ? '' : ' ')}
          </span>
          {!isLastSection &&
            <span
              className={wordSpanClass}
              key={`word-${sectionIdx}`}
              onClick={() => {
                // only disable onclick if audio is playing AND section is not currSection
                if (
                  (playingSectionAudio || playingWordAudio) &&
                  !(sectionIdx === currSectionIdx)
                ) {
                  return;
                }

                setCurrSectionIdx(sectionIdx);
                if (sections[sectionIdx].wordCategories === WordCategory.FRIENDS) {
                  setShowFriendModal(true);
                } else if (
                  sections[sectionIdx].wordCategories.length &&
                  sections[sectionIdx].wordCategories[0] === WordCategory.FRIENDS
                ) {
                  setShowFriendModal(true);
                } else {
                  setShowWordModal(true);
                }
                setPlayingSectionAudio(false);
              }}
            >
              <b>{word ? word.text : '____'}</b>
            </span>
          }
        </React.Fragment>
      }
    </React.Fragment>
  );
}