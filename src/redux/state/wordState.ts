import apeImg from '../../static/words/img/ape.png';
import bearImg from '../../static/words/img/bear.png';
import burgerImg from '../../static/words/img/burger.png';
import catImg from '../../static/words/img/cat.png';
import clothesImg from '../../static/words/img/clothes.png';
import cowImg from '../../static/words/img/cow.png';

import babyImg from '../../static/words/img/baby.png';
import boyImg from '../../static/words/img/boy.png';
import girlImg from '../../static/words/img/girl.png';
import clownImg from '../../static/words/img/clown.png';
import dancerImg from '../../static/words/img/dancer.png';
import familyImg from '../../static/words/img/family.png';
import jugglerImg from '../../static/words/img/juggler.png';
import kingImg from '../../static/words/img/king.png';
import manImg from '../../static/words/img/man.png';
import queenImg from '../../static/words/img/queen.png';

import faceImg from '../../static/words/img/face.png';
import handImg from '../../static/words/img/hand.png';
import lipImg from '../../static/words/img/lip.png';
import mouthImg from '../../static/words/img/mouth.png';
import noseImg from '../../static/words/img/nose.png';
import toeImg from '../../static/words/img/toe.png';

import beaverImg from '../../static/words/img/beaver.png';

import bridgeImg from '../../static/words/img/bridge.png';
import volcanoImg from '../../static/words/img/volcano.png';
import zooImg from '../../static/words/img/zoo.png';


const apeAudio = require('../../static/words/audio/ape.mp3');
const babyAudio = require('../../static/words/audio/baby.mp3');
const boyAudio = require('../../static/words/audio/boy.mp3');
const clownAudio = require('../../static/words/audio/clown.mp3');
const dancerAudio = require('../../static/words/audio/dancer.mp3');
const familyAudio = require('../../static/words/audio/family.mp3');
const girlAudio = require('../../static/words/audio/girl.mp3');
const jugglerAudio = require('../../static/words/audio/juggler.mp3');
const kingAudio = require('../../static/words/audio/king.mp3');
const manAudio = require('../../static/words/audio/man.mp3');
const queenAudio = require('../../static/words/audio/queen.mp3');


const faceAudio = require('../../static/words/audio/face.mp3');
const handAudio = require('../../static/words/audio/hand.mp3');
const lipAudio = require('../../static/words/audio/lip.mp3');
const mouthAudio = require('../../static/words/audio/mouth.mp3');
const noseAudio = require('../../static/words/audio/nose.mp3');
const toeAudio = require('../../static/words/audio/toe.mp3');

const beaverAudio = require('../../static/words/audio/beaver.mp3');

const bridgeAudio = require('../../static/words/audio/bridge.mp3');
const volcanoAudio = require('../../static/words/audio/volcano.mp3');
const zooAudio = require('../../static/words/audio/zoo.mp3');

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
  PEOPLE = 'People',
  BODYPARTS = 'Bodyparts'
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
      text: 'baby',
      img: babyImg,
      audio: babyAudio,
      type: WordType.PEOPLE,
    },
    {
      completed: false,
      text: 'boy',
      img: boyImg,
      audio: boyAudio,
      type: WordType.PEOPLE,
    },
    {
      completed: false,
      text: 'clown',
      img: clownImg,
      audio: clownAudio,
      type: WordType.PEOPLE,
    },
    {
      completed: false,
      text: 'dancer',
      img: dancerImg,
      audio: dancerAudio,
      type: WordType.PEOPLE,
    },
    {
      completed: false,
      text: 'family',
      img: familyImg,
      audio: familyAudio,
      type: WordType.PEOPLE,
    },
    {
      completed: false,
      text: 'girl',
      img: girlImg,
      audio: girlAudio,
      type: WordType.PEOPLE,
    },
    {
      completed: false,
      text: 'juggler',
      img: jugglerImg,
      audio: jugglerAudio,
      type: WordType.PEOPLE,
    },
    {
      completed: false,
      text: 'king',
      img: kingImg,
      audio: kingAudio,
      type: WordType.PEOPLE,
    },
    {
      completed: false,
      text: 'man',
      img: manImg,
      audio: manAudio,
      type: WordType.PEOPLE,
    },
    {
      completed: false,
      text: 'queen',
      img: queenImg,
      audio: queenAudio,
      type: WordType.PEOPLE,
    },
    {
      completed: false,
      text: 'face',
      img: faceImg,
      audio: faceAudio,
      type: WordType.BODYPARTS,
    },
    {
      completed: false,
      text: 'hand',
      img: handImg,
      audio: handAudio,
      type: WordType.BODYPARTS,
    },
    {
      completed: false,
      text: 'lip',
      img: lipImg,
      audio: lipAudio,
      type: WordType.BODYPARTS,
    },
    {
      completed: false,
      text: 'mouth',
      img: mouthImg,
      audio: mouthAudio,
      type: WordType.BODYPARTS,
    },
    {
      completed: false,
      text: 'nose',
      img: noseImg,
      audio: noseAudio,
      type: WordType.BODYPARTS,
    },
    {
      completed: false,
      text: 'toe',
      img: toeImg,
      audio: toeAudio,
      type: WordType.BODYPARTS,
    },
    {
      completed: false,
      text: 'beaver',
      img: beaverImg,
      audio: beaverAudio,
      type: WordType.BODYPARTS,
    },
    {
      completed: false,
      text: 'bridge',
      img: bridgeImg,
      audio: bridgeAudio,
      type: WordType.BODYPARTS,
    },
    {
      completed: false,
      text: 'volcano',
      img: volcanoImg,
      audio: volcanoAudio,
      type: WordType.BODYPARTS,
    },
    {
      completed: false,
      text: 'zoo',
      img: zooImg,
      audio: zooAudio,
      type: WordType.BODYPARTS,
    },
  ]
};