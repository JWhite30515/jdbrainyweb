import apeImg from '../../static/words/img/ape.png';
import bearImg from '../../static/words/img/bear.png';
import burgerImg from '../../static/words/img/burger.png';
import catImg from '../../static/words/img/cat.png';
import clothesImg from '../../static/words/img/clothes.png';
import cowImg from '../../static/words/img/cow.png';
import camelImg from '../../static/words/img/camel.png';
import dogImg from '../../static/words/img/dog.png';
import dogsImg from '../../static/words/img/dog.png';
import foxImg from '../../static/words/img/fox.png';
import kittenImg from '../../static/words/img/kitten.png';
import moleImg from '../../static/words/img/mole.png';
import mothImg from '../../static/words/img/moth.png';
import mouseImg from '../../static/words/img/mouse.png';
import rabbitImg from '../../static/words/img/rabbit.png';
import ramImg from '../../static/words/img/Ram.png';
import tailImg from '../../static/words/img/tail.png';
import whaleImg from '../../static/words/img/whale.png';
import wolfImg from '../../static/words/img/wolf.png';
import zebraImg from '../../static/words/img/zebra.png';


const apeAudio = require('../../static/words/audio/ape.mp3');
const catAudio = require('../../static/words/audio/cat.mp3');
const cowAudio = require('../../static/words/audio/cow.mp3');
const camelAudio = require('../../static/words/audio/camel.mp3');
const dogAudio = require('../../static/words/audio/dog.mp3');
const dogsAudio = require('../../static/words/audio/dogs.mp3');
const foxAudio = require('../../static/words/audio/fox.mp3');
const goatAudio = require('../../static/words/audio/goat.mp3');
const kittenAudio = require('../../static/words/audio/kitten.mp3');
const moleAudio = require('../../static/words/audio/mole.mp3');
const mothAudio = require('../../static/words/audio/moth.mp3');
const mouseAudio = require('../../static/words/audio/mouse.mp3');
const rabbitAudio = require('../../static/words/audio/rabbit.mp3');
const ramAudio = require('../../static/words/audio/Ram.mp3');
const tailAudio = require('../../static/words/audio/tail.mp3');
const whaleAudio = require('../../static/words/audio/whale.mp3');
const wolfAudio = require('../../static/words/audio/wolf.mp3');
const zebraAudio = require('../../static/words/audio/zebra.mp3');



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
  FOOD = 'Food'
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
      audio: catAudio,
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
      audio: cowAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'camel',
      img: camelImg,
      audio: camelAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'dog',
      img: dogImg,
      audio: dogAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'dogs',
      img: dogsImg,
      audio: dogsAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'fox',
      img: foxImg,
      audio: foxAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'kitten',
      img: kittenImg,
      audio: kittenAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'mole',
      img: moleImg,
      audio: moleAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'moth',
      img: mothImg,
      audio: mothAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'mouse',
      img: mouseImg,
      audio: mouseAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'rabbit',
      img: rabbitImg,
      audio: rabbitAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'ram',
      img: ramImg,
      audio: ramAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'tail',
      img: tailImg,
      audio: tailAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'whale',
      img: whaleImg,
      audio: whaleAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'wolf',
      img: wolfImg,
      audio: wolfAudio,
      type: WordType.ANIMALS,
    },
    {
      completed: false,
      text: 'zebra',
      img: zebraImg,
      audio: zebraAudio,
      type: WordType.ANIMALS,
    },
  ]
};