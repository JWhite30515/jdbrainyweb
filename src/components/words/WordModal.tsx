import React, { useMemo, useState } from 'react';

import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { bindActionCreators } from 'redux';

import IRootState from '../../redux/state/rootState';
import { selectWord } from '../../redux/actions/storyActions';
import { IFriendWord } from '../../redux/state/friendState';
import { IStory } from '../../redux/state/storyState';
import { IWord, WordCategory } from '../../redux/state/wordState';

import Card from '../common/Card';
import Modal from './Modal';

import '../../css/common.css';
import '../../css/layout.css';
import '../../css/modal.css';

import { AudioState } from '../stories/StoryPage';

export interface ICategorizedWord {
  category: WordCategory;
  words: IWord[];
}

export interface IWordModalProps {
  currStory: IStory;
  currSectionIdx: number;
  words: IWord[];
  selectWord(word: IWord | IFriendWord, storyId: number, currSectionIdx: number): void;
  setAudioState(audioState: string): void;
  setQuizWord(word: IWord): void;
  setShowWordModal(open: boolean): void;
}

export function WordModal(props: IWordModalProps) {
  const {
    currStory,
    currSectionIdx,
    words,
    selectWord,
    setAudioState,
    setQuizWord,
    setShowWordModal,
  } = props;

  const history = useHistory();
  const { path } = useRouteMatch();

  const currSection = currStory.sections[currSectionIdx];

  const wordsCategorized = useMemo(() => {
    const wordsCategorizedMap = new Map<WordCategory, IWord[]>();
    const wordsCategorized: ICategorizedWord[] = [];

    const categories = currSection.wordCategories;

    words.forEach((word) => {
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
      const checkForDuplicates = currSection.duplicateId !== undefined;
      const filteredWords: IWord[] = [];

      if (checkForDuplicates) {
        // find word that cannot have a duplicate
        let wordToFilter: IWord | IFriendWord | null = null;
        for (const section of currStory.sections) {
          if (section.word && section.id === currSection.duplicateId) {
            wordToFilter = section.word;
            break;
          }
        }
        if (wordToFilter !== null) {
          for (const word of value) {
            if (word.text !== wordToFilter.text) {
              filteredWords.push(word);
            }
          }
        }
      }
      wordsCategorized.push(
        { 
          category: key,
          words: checkForDuplicates ? filteredWords : value
        },
      );
    });

    return wordsCategorized;
  }, [currSection, currStory, words]);

  const [currCategory, setCurrCategory] = useState(wordsCategorized.length ?
    wordsCategorized[0].category : null);

  const currCategorizedWord = wordsCategorized.find(cw => cw.category === currCategory);

  return (
    <Modal
      title="Choose a Word"
      setModalOpen={(open: boolean) => setShowWordModal(open)}
    >
      <div
        className="modal-item separator-right separator-bottom"
        style={{ flex: 1, height: '100%'}}
      >
        <h1>Categories</h1>
        <div style={{ overflow: 'scroll', width: '100%' }}>    
          {wordsCategorized.map((categorizedWord, idx) => {
            let catClass = 'category-card clickable flex-column separator-bottom-category';
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
      </div>
      <div className="modal-item" style={{ flex: 2, maxHeight: '100%' }}>
        <h1>Words</h1>
        <div className="flex-row wrap-overflow separator-top">
          {currCategorizedWord &&
            currCategorizedWord.words.map((word, idx) => {
              return (
                <Card
                  disabled={word.audio === null}
                  key={`word_card_${idx}`}
                  onClick={() => {
                    if (word.audio === null) return;

                    setShowWordModal(false);

                    if (!word.completed) {
                      setQuizWord(word);
                      history.push(`${path}/quiz`);
                    } else {
                      selectWord(word, currStory.id, currSectionIdx);
                      setAudioState(AudioState.PLAYING_WORD);
                    }
                  }}
                  style={{ flex: '0.5', margin: '20px' }}
                >
                  <h1>{word.text}</h1>
                  <img
                    className={word.completed ? 'card-img' : 'card-img grayscale'}
                    src={word.img}
                    alt={word.text}
                  />
                </Card>
              );
            })
          }
          {!currCategory &&
            <p>No category selected</p>
          }
        </div>
      </div>
    </Modal>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    words: state.wordState.words,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectWord: bindActionCreators(selectWord, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WordModal);