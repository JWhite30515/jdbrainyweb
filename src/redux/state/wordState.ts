import apeImg from '../../static/words/img/ape.png';
import bearImg from '../../static/words/img/bear.png';
import burgerImg from '../../static/words/img/burger.png';
import catImg from '../../static/words/img/cat.png';
import clothesImg from '../../static/words/img/clothes.png';
import cowImg from '../../static/words/img/cow.png';
import jayImg from '../../static/words/img/jay.png';
import owlImg from '../../static/words/img/owl.png';
import swanImg from '../../static/words/img/swan.png';

const apeAudio = require('../../static/words/audio/ape.mp3');

export interface IWord {
  completed: boolean;
  text: string;
  img: any;
  audio?: any;
  type: WordType;
}

export enum WordType {
  CLOTHES = 'Clothes',
  ANIMALS = 'Animals',
  FOOD = 'Food',
  BIRDS = 'Birds'
}

export default interface IWordState {
  words: IWord[];
}

export const initialWordState: IWordState = {
  words: [
    {
      completed: false,
      text: 'ape',
      img: apeImg,
      audio: apeAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'bear',
      img: bearImg,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'burger',
      img: burgerImg,
      type: WordType.FOOD,
    },
    {
      completed: false,
      text: 'cat',
      img: catImg,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'clothes',
      img: clothesImg,
      type: WordType.CLOTHES
    },
    {
      completed: false,
      text: 'cow',
      img: cowImg,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'jay',
      img: jayImg,
      type: WordType.BIRDS,
    },
    {
      completed: false,
      text: 'owl',
      img: owlImg,
      type: WordType.BIRDS,
    },
    {
      completed: false,
      text: 'swan',
      img: swanImg,
      type: WordType.BIRDS,
    },
  ]
};