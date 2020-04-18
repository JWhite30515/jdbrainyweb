import * as React from 'react';

import { ISection } from '../../redux/state/storyState';
import { WordCategory } from '../../redux/state/wordState';

export interface ISectionProps {
  currSectionIdx: number;
  sections: ISection[];
  sectionIdx: number;
  setCurrSectionIdx(idx: number): void;
  setShowFriendModal(open: boolean): void;
  setShowWordModal(open: boolean): void;
}

export default function Section(props: ISectionProps) {
  const {
    currSectionIdx,
    sections,
    sectionIdx,
    setCurrSectionIdx,
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
              className="clickable"
              key={`word-${sectionIdx}`}
              onClick={() => {
                setCurrSectionIdx(sectionIdx);
                if (sections[sectionIdx].wordCategories === WordCategory.FRIENDS) {
                  setShowFriendModal(true);
                } else {
                  setShowWordModal(true);
                }
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