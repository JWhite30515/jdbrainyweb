import React, { useState } from 'react';

import { IoMdCloseCircle } from 'react-icons/io';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { bindActionCreators } from 'redux';

import IRootState from '../../redux/state/rootState';
import { selectQuizWord } from '../../redux/actions/quizActions';
import { IWord, WordCategory } from '../../redux/state/wordState';

import '../../css/common.css';
import '../../css/layout.css';
import '../../css/modal.css';

export interface ICategorizedWord {
  category: WordCategory;
  words: IWord[];
}

export interface IWordModalProps {
  wordsCategorized: ICategorizedWord[];
  selectQuizWord(word: IWord): void;
  setShowWordModal(open: boolean): void;
}

export function WordModal(props: IWordModalProps) {
  const { wordsCategorized } = props;
  const history = useHistory();

  const [currCategory, setCurrCategory] = useState(wordsCategorized.length ?
    wordsCategorized[0].category : null);

  const currCategorizedWord = wordsCategorized.find(cw => cw.category === currCategory);

  return (
    <div className="modal-background">
      <div className="modal-content">
        <div className="nav light-green-back flex-row" style={{ height: '20%' }}>
          <span style={{ flex: 1 }}/>
          <h1 style={{ flex: 1 }}>Choose a Word</h1>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IoMdCloseCircle
              className="clickable"
              onClick={() => props.setShowWordModal(false)}
              style={{ paddingRight: '10px' }}
              size={'3em'}
            />
          </div>
        </div>
        <div className="flex-row" style={{ maxHeight: '80%', alignItems: 'flex-start' }}>
          <div
            className="flex-column flex-start separator-right"
            style={{ flex: 1, height: '100%' }}
          >
            <h1>Categories</h1>
            {wordsCategorized.map((categorizedWord, idx) => {
              let catClass = 'category-card clickable flex-column separator-bottom';
              if (currCategory === categorizedWord.category) catClass += ' category-selected';
              if (idx === 0) catClass += ' separator-top';

              return (
                <div
                  className={catClass}
                  key={`${categorizedWord.category}_${idx}`}
                  onClick={() => setCurrCategory(categorizedWord.category)}
                >
                  <h2>
                    {categorizedWord.category}
                  </h2>
                </div>
              );
            })}
          </div>
          <div className="flex-column" style={{ flex: 2, maxHeight: '100%'}}>
            <h1>Words</h1>
            <div className="flex-row wrap-overflow separator-top">
              {currCategorizedWord &&
                currCategorizedWord.words.map((word, idx) => {
                  return (
                    <div     
                      className={'card-item flex-column clickable'}
                      style={{ margin: '20px' }}
                      key={`${word.text}-${idx}`}
                      onClick={() => {
                        props.selectQuizWord(word);
                        history.push('/quiz');
                      }}
                    >
                      <h1>{word.text}</h1>
                      <img
                        className={word.completed ? 'card-img' : 'card-img grayscale'}
                        src={word.img}
                        alt={word.text}
                      />
                    </div>
                  );
                })
              }
              {!currCategory &&
                <p>No category selected</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: IRootState) => {
  const currStory = state.storyState.currStory;
  const wordsCategorizedMap = new Map<WordCategory, IWord[]>();
  const wordsCategorized: ICategorizedWord[] = [];

  if (!currStory) return { wordsCategorized };

  const currSectionIdx = currStory.currSectionIdx;
  const currSection = currStory.sections[currSectionIdx];
  const categories = currSection.wordCategories;

  state.wordState.words.forEach((word) => {
    if (categories.includes(word.category)) {
      const updatedWordsList = wordsCategorizedMap.get(word.category);
      if (updatedWordsList) {
        updatedWordsList.push(word);
        wordsCategorizedMap.set(word.category, updatedWordsList);
      } else {
        wordsCategorizedMap.set(word.category, [word])
      }
    }
  });

  wordsCategorizedMap.forEach((value, key) => {
    wordsCategorized.push({ category: key, words: value });
  });

  console.log(wordsCategorized);

  return {
    wordsCategorized,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectQuizWord: bindActionCreators(selectQuizWord, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WordModal);