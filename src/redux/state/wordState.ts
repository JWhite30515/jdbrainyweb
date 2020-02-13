import apeImg from '../../static/words/img/ape.png';
import bearImg from '../../static/words/img/bear.png';
import burgerImg from '../../static/words/img/burger.png';
import catImg from '../../static/words/img/cat.png';
import clothesImg from '../../static/words/img/clothes.png';
import cowImg from '../../static/words/img/cow.png';
import jayImg from '../../static/words/img/jay.png';
import owlImg from '../../static/words/img/owl.png';
import swanImg from '../../static/words/img/swan.png';
import axeImg from '../../static/words/img/axe.png';
import rakeImg from '../../static/words/img/rake.png';
import nailImg from '../../static/words/img/nail.png';
import sawImg from '../../static/words/img/saw.png';

const apeAudio = require('../../static/words/audio/ape.mp3');
const owlAudio = require('../../static/words/audio/owl.mp3');
const swanAudio = require('../../static/words/audio/swan.mp3');
const sawAudio = require('../../static/words/audio/saw.mp3');
const nailAudio = require('../../static/words/audio/nail.mp3');
const axeAudio = require('../../static/words/audio/axe.mp3');
const rakeAudio = require('../../static/words/audio/rake.mp3');

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
  BIRDS = 'Birds',
  TOOLS = 'Tools'
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
      audio: owlAudio,
      type: WordType.BIRDS,
    },
    {
      completed: false,
      text: 'swan',
      img: swanImg,
      audio: swanAudio,
      type: WordType.BIRDS,
    },
    {
      completed: false,
      text: 'axe',
      img: axeImg,
      audio: axeAudio,
      type: WordType.TOOLS,
    },
    {
      completed: false,
      text: 'nail',
      img: nailImg,
      audio: nailAudio,
      type: WordType.TOOLS,
    },
    {
      completed: false,
      text: 'saw',
      img: sawImg,
      audio: sawAudio,
      type: WordType.TOOLS,
    },
    {
      completed: false,
      text: 'rake',
      img: rakeImg,
      audio: rakeAudio,
      type: WordType.TOOLS,
    },
  ]
};