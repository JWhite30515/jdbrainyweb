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
import wigImg from '../../static/words/img/wig.png';
import suitImg from '../../static/words/img/suit.png';
import tieImg from '../../static/words/img/tie.png';
import purseImg from '../../static/words/img/purse.png';
import gloveImg from '../../static/words/img/glove.png';
import ambulanceImg from '../../static/words/img/ambulance.png';
import bugImg from '../../static/words/img/bug.png';
import busImg from '../../static/words/img/bus.png';
import carImg from '../../static/words/img/car.png';

const apeAudio = require('../../static/words/audio/ape.mp3');
const owlAudio = require('../../static/words/audio/owl.mp3');
const swanAudio = require('../../static/words/audio/swan.mp3');
const sawAudio = require('../../static/words/audio/saw.mp3');
const nailAudio = require('../../static/words/audio/nail.mp3');
const axeAudio = require('../../static/words/audio/axe.mp3');
const rakeAudio = require('../../static/words/audio/rake.mp3');
const gloveAudio = require('../../static/words/audio/glove.mp3');
const tieAudio = require('../../static/words/audio/tie.mp3');
const wigAudio = require('../../static/words/audio/wig.mp3');
const purseAudio = require('../../static/words/audio/purse.mp3');
const suitAudio = require('../../static/words/audio/suit.mp3');
const ambulanceAudio = require('../../static/words/audio/ambulance.mp3');
const busAudio = require('../../static/words/audio/bus.mp3');
const bugAudio = require('../../static/words/audio/bug.mp3');
const carAudio = require('../../static/words/audio/car.mp3');

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
  TOOLS = 'Tools',
  VEHICLES  = 'Vehicles'
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
    {
      completed: false,
      text: 'glove',
      img: gloveImg,
      audio: gloveAudio,
      type: WordType.CLOTHES
    },
    {
      completed: false,
      text: 'purse',
      img: purseImg,
      audio: purseAudio,
      type: WordType.CLOTHES
    },
    {
      completed: false,
      text: 'suit',
      img: suitImg,
      audio: suitAudio,
      type: WordType.CLOTHES
    },
    {
      completed: false,
      text: 'tie',
      img: tieImg,
      audio: tieAudio,
      type: WordType.CLOTHES
    },
    {
      completed: false,
      text: 'wig',
      img: wigImg,
      audio: wigAudio,
      type: WordType.CLOTHES
    },
    {
      completed: false,
      text: 'ambulance',
      img: ambulanceImg,
      audio: ambulanceAudio,
      type: WordType.VEHICLES
    },
    {
      completed: false,
      text: 'bus',
      img: busImg,
      audio: busAudio,
      type: WordType.VEHICLES
    },
    {
      completed: false,
      text: 'bug',
      img: bugImg,
      audio: bugAudio,
      type: WordType.VEHICLES
    },
    {
      completed: false,
      text: 'car',
      img: carImg,
      audio: carAudio,
      type: WordType.VEHICLES
    },
  ]
};