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

  const isLastSection = sectionIdx === sections.length - 1;
  const sectionIsCurrent = sectionIdx === currSectionIdx;
  const sectionTextVisible = sectionIdx <= currSectionIdx;

  let wordSpanClass = '';
  if (sectionIsCurrent) wordSpanClass += ' highlighted';
  if (sectionTextVisible || sectionIsCurrent) wordSpanClass += ' clickable';

  //if (sectionHighlighted) wordSpanClass += ' highlighted';
  //replace first span @57 with <span className={sectionHighlighted ? 'highlighted' : ''} >
  //to highlight whole of read current part

  return (
    <React.Fragment>
      {sectionTextVisible &&
        <React.Fragment>
          <span>
            {text + (isLastSection ? '' : ' ')}
          </span>
          {!isLastSection &&
            <span
              className={wordSpanClass}
              key={`word-${sectionIdx}`}
              onClick={() => {
                // only clickable if either current section, or previous section than currSection
                if (!sectionIsCurrent && !sectionTextVisible) return;
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
              }}
            >
              <b>
                {word ? word.text : 
                <span 
                  style={{ backgroundColor: 'yellow'}} > '____' 
                </span>}
              </b>
            </span>
          }
        </React.Fragment>
      }
    </React.Fragment>
  );
}