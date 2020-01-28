import React, { useState } from 'react';

import { connect } from 'react-redux';
import { IWord } from '../../redux/state/wordState';
import { WordType } from '../../redux/state/wordState';

import { WordsPage } from './WordsPage';
import IRootState from '../../redux/state/rootState';
import '../../css/common.css';

const animalImg = require('../../static/words/img/ape.png');
const burgerImg = require('../../static/words/img/burger.png');
const clothingImg = require('../../static/words/img/clothes.png');

const categories = [
  {
    name: WordType.ANIMALS,
    img: animalImg
  },
  {
    name: WordType.CLOTHES,
    img: clothingImg
  },
  {
    name: WordType.FOOD,
    img: burgerImg
  }
]

export interface IWordSelectPageProps {
  words: IWord[];
}


export function WordSelectPage(props: IWordSelectPageProps) {
  const { words } = props;

  const [category, setCategory] = useState<any | null>(null);

  if (category) {
    const catWords = words.filter(word => word.type === category);
    return (
      <WordsPage
        words={catWords}
      />
    );
  }
  return (
    <div>
      <h1>Categories</h1>
      <div className="flex-row list-row">
        {[...categories].map((cat, idx) => {
          // only allow animal category
          const disabled = !(idx + 1 === 1) ? true : false;

          return (
            <div   
              className={disabled ? 'card-item flex-column' : 'card-item flex-column clickable'}
              key={`catId-${idx + 1}`}
              style={{ borderStyle: 'solid', borderWidth: 'medium' }}
              onClick={disabled ? () => null : () => {
                setCategory(cat.name)
              }}
            >
              <h1>{cat.name}</h1>
              <img
                className={disabled ? 'card-img grayscale' : 'card-img'}
                src={cat.img}
                alt={cat.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    words: state.wordState.words,
  }
}

export default connect(
  mapStateToProps,
  () => ({})
)(WordSelectPage);