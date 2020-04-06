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

  if (word) {
    const prevSection = sections[sectionIdx - 1];
    if (prevSection && prevSection.word) {
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