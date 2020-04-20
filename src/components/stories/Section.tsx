import * as React from 'react';

import { ISection } from '../../redux/state/storyState';
import { WordCategory } from '../../redux/state/wordState';

export interface ISectionProps {
  currSectionIdx: number;
  playingSectionAudio: boolean;
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
    sections,
    sectionIdx,
    setCurrSectionIdx,
    setPlayingSectionAudio,
    setShowFriendModal,
    setShowWordModal,
  } = props;

  const { text, word } = sections[sectionIdx];

  let sectionTextVisible = false;

  if (sectionIdx <= currSectionIdx) sectionTextVisible = true;

  // only need to make this check if sectionTextVisible is false
  if (!sectionTextVisible) {

    let wordsForPrevSectionsDefined = true;

    // check that all previous sections before this section have
    // their word defined
    for (let i = 0; i < sectionIdx; i += 1) {
      if (!sections[i].word) wordsForPrevSectionsDefined = false;
    }
    if (wordsForPrevSectionsDefined) {
      sectionTextVisible = true;
    }
  }

  const isLastSection = (sectionIdx === sections.length - 1);

  return (
    <React.Fragment>
      {sectionTextVisible &&
        <React.Fragment>
          <span>
            {text + (isLastSection ? '' : ' ')}
          </span>
          {!isLastSection &&
            <span
              className={!playingSectionAudio ? 'clickable' : ''}
              key={`word-${sectionIdx}`}
              onClick={() => {
                if (playingSectionAudio) return;

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