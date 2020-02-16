import apeImg from '../../static/words/img/ape.png';
import bearImg from '../../static/words/img/bear.png';
import burgerImg from '../../static/words/img/burger.png';
import catImg from '../../static/words/img/cat.png';
import clothesImg from '../../static/words/img/clothes.png';
import cowImg from '../../static/words/img/cow.png';

// thing imgs
import bagImg from '../../static/words/img/bag.png';
import bedImg from '../../static/words/img/bed.png';
import boxImg from '../../static/words/img/box.png';
import bubbleImg from '../../static/words/img/bubble.png';
import clarinetImg from '../../static/words/img/clarinet.png';
import fluteImg from '../../static/words/img/flute.png';
import forkImg from '../../static/words/img/fork.png';
import fridgeImg from '../../static/words/img/fridge.png';
import fringeImg from '../../static/words/img/fringe.png';
import glassImg from '../../static/words/img/glass.png';

// thing audio
const bagAudio = require('../../static/words/audio/bag.mp3');
const bedAudio = require('../../static/words/audio/bed.mp3');
const bubbleAudio = require('../../static/words/audio/bubble.mp3');
const clarinetAudio = require('../../static/words/audio/clarinet.mp3');
const fluteAudio = require('../../static/words/audio/flute.mp3');
const forkAudio = require('../../static/words/audio/fork.mp3');
const fridgeAudio = require('../../static/words/audio/fridge.mp3');
const fringeAudio = require('../../static/words/audio/fringe.mp3');
const glassAudio = require('../../static/words/audio/glass.mp3');

const apeAudio = require('../../static/words/audio/ape.mp3');

export interface IWord {
  completed: boolean;
  text: string;
  img: any;
  audio?: any;
  category: WordCategory;
}

export enum WordCategory {
  PEOPLE = 'People',
  FRIENDS = 'Friends',
  PRETEND = 'Pretend',
  BODY_PARTS = 'Body Parts',
  ANIMALS = 'Animals',
  WATER_ANIMALS = 'Water Animals',
  BIRDS = 'Birds',
  THINGS = 'Things',
  HOUSE_STUFF = 'House Stuff',
  TOYS = 'Toys',
  TOOLS = 'Tools', 
  CLOTHES = 'Clothes',
  VEHICLES = 'Vehicles',
  FOOD = 'Food',
  PLACES = 'Places',
  OUTDOORS = 'Outdoors',
  DOING = 'Doing',
  DESCRIBE = 'Describe',
  COLORS = 'Colors',
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
      category: WordCategory.ANIMALS,
    },
    {
      completed: false,
      text: 'bear',
      img: bearImg,
      category: WordCategory.ANIMALS,
    },
    {
      completed: false,
      text: 'burger',
      img: burgerImg,
      category: WordCategory.FOOD,
    },
    {
      completed: false,
      text: 'cat',
      img: catImg,
      category: WordCategory.ANIMALS,
    },
    {
      completed: false,
      text: 'clothes',
      img: clothesImg,
      category: WordCategory.CLOTHES
    },
    {
      completed: false,
      text: 'cow',
      img: cowImg,
      category: WordCategory.ANIMALS,
    },
    {
      completed: false,
      text: 'bag',
      img: bagImg,
      audio: bagAudio,
      category: WordCategory.THINGS
    },
    {
      completed: false,
      text: 'bed',
      img: bedImg,
      audio: bedAudio,
      category: WordCategory.THINGS
    },
    {
      completed: false,
      text: 'box',
      img: boxImg,
      category: WordCategory.THINGS
    },
    {
      completed: false,
      text: 'bubble',
      img: bubbleImg,
      audio: bubbleAudio,
      category: WordCategory.THINGS
    },
    {
      completed: false,
      text: 'clarinet',
      img: clarinetImg,
      audio: clarinetAudio,
      category: WordCategory.THINGS
    },
    {
      completed: false,
      text: 'flute',
      img: fluteImg,
      audio: fluteAudio,
      category: WordCategory.THINGS
    },
    {
      completed: false,
      text: 'fork',
      img: forkImg,
      audio: forkAudio,
      category: WordCategory.THINGS
    },
    {
      completed: false,
      text: 'fridge',
      img: fridgeImg,
      audio: fridgeAudio,
      category: WordCategory.THINGS
    },
    {
      completed: false,
      text: 'fringe',
      img: fringeImg,
      audio: fringeAudio,
      category: WordCategory.THINGS
    },
    {
      completed: false,
      text: 'glass',
      img: glassImg,
      audio: glassAudio,
      category: WordCategory.THINGS
    },
  ]
};