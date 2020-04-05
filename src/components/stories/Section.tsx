import React, { useState } from 'react';

import { ISection } from '../../redux/state/storyState';

export interface ISectionProps {
  currSectionIdx: number;
  section: ISection;
  sectionIdx: number;
  setCurrSectionIdx(idx: number): void;
  setShowWordModal(open: boolean): void;
}

export default function Section(props: ISectionProps) {
  const { text, word } = props.section;
  const { 
    currSectionIdx,
    sectionIdx,
    setCurrSectionIdx,
    setShowWordModal,
  } = props;

  const sectionTextVisible = !!word || sectionIdx <= currSectionIdx;

  return (
    <React.Fragment>
      {sectionTextVisible &&
        <React.Fragment>
          <span>
            {text + ' '}
          </span>
          <span
            className="clickable"
            key={`word-${sectionIdx}`}
            onClick={() => {
              setCurrSectionIdx(sectionIdx);
              setShowWordModal(true);
            }}
          >
            <b>{word ? word.text + ' ' : '____'}</b>
          </span>
        </React.Fragment>
      }
    </React.Fragment>
  );
}