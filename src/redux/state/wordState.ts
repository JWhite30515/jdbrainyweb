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
import goatImg from '../../static/words/img/goat.png';
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
import candyImg from '../../static/words/img/candy.png';
import goldImg from '../../static/words/img/gold.png';
import grassImg from '../../static/words/img/grass.png';
import iceImg from '../../static/words/img/ice.png';
import nutsImg from '../../static/words/img/nuts.png';
import plumImg from '../../static/words/img/plum.png';
import rainbowImg from '../../static/words/img/rainbow.png';
import silverImg from '../../static/words/img/silver.png';
import teaImg from '../../static/words/img/tea.png';
import treeImg from '../../static/words/img/tree.png';
import wallImg from '../../static/words/img/wall.png';
import yellowImg from '../../static/words/img/yellow.png';
import jayImg from '../../static/words/img/jay.png';
import owlImg from '../../static/words/img/owl.png';
import swanImg from '../../static/words/img/swan.png';
import axeImg from '../../static/words/img/axe.png';
import rakeImg from '../../static/words/img/rake.png';
import nailImg from '../../static/words/img/nail.png';
import sawImg from '../../static/words/img/saw.png';


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
const candyAudio = require('../../static/words/audio/candy.mp3');
const goldAudio = require('../../static/words/audio/gold.mp3');
const grassAudio = require('../../static/words/audio/grass.mp3');
const iceAudio = require('../../static/words/audio/ice.mp3');
const nutsAudio = require('../../static/words/audio/nuts.mp3');
const plumAudio = require('../../static/words/audio/plum.mp3');
const rainbowAudio = require('../../static/words/audio/rainbow.mp3');
const silverAudio = require('../../static/words/audio/silver.mp3');
const teaAudio = require('../../static/words/audio/Tea.mp3');
const treeAudio = require('../../static/words/audio/tree.mp3');
const wallAudio = require('../../static/words/audio/wall.mp3');
const yellowAudio = require('../../static/words/audio/yellow.mp3');
const owlAudio = require('../../static/words/audio/owl.mp3');
const swanAudio = require('../../static/words/audio/swan.mp3');
const sawAudio = require('../../static/words/audio/saw.mp3');
const nailAudio = require('../../static/words/audio/nail.mp3');
const axeAudio = require('../../static/words/audio/axe.mp3');
const rakeAudio = require('../../static/words/audio/rake.mp3');
import yetiImg from '../../static/words/img/yeti.png';
import elfImg from '../../static/words/img/elf.png';

const yetiAudio = require('../../static/words/audio/Yeti.mp3');
const elfAudio = require('../../static/words/audio/elf.mp3');

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
  COLORS = 'Colors',
  OUTDOORS = 'Outdoors',
  BIRDS = 'Birds',
  TOOLS = 'Tools',
  PRETEND = 'Pretend'
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
      text: 'goat',
      img: goatImg,
      audio: goatAudio,
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
    {
      completed: false,
      text: 'candy',
      img: candyImg,
      audio: candyAudio,
      type: WordType.FOOD,
    },
    {
      completed: false,
      text: 'gold',
      img: goldImg,
      audio: goldAudio,
      type: WordType.COLORS,
    },
    {
      completed: false,
      text: 'grass',
      img: grassImg,
      audio: grassAudio,
      type: WordType.OUTDOORS,
    },
    {
      completed: false,
      text: 'ice',
      img: iceImg,
      audio: iceAudio,
      type: WordType.OUTDOORS,
    },
    {
      completed: false,
      text: 'nuts',
      img: nutsImg,
      audio: nutsAudio,
      type: WordType.FOOD,
    },
    {
      completed: false,
      text: 'plum',
      img: plumImg,
      audio: plumAudio,
      type: WordType.FOOD,
    },
    {
      completed: false,
      text: 'rainbow',
      img: rainbowImg,
      audio: rainbowAudio,
      type: WordType.OUTDOORS,
    },
    {
      completed: false,
      text: 'silver',
      img: silverImg,
      audio: silverAudio,
      type: WordType.COLORS,
    },
    {
      completed: false,
      text: 'tea',
      img: teaImg,
      audio: teaAudio,
      type: WordType.FOOD,
    },
    {
      completed: false,
      text: 'tree',
      img: treeImg,
      audio: treeAudio,
      type: WordType.OUTDOORS,
    },
    {
      completed: false,
      text: 'wall',
      img: wallImg,
      audio: wallAudio,
      type: WordType.OUTDOORS,
    },
    {
      completed: false,
      text: 'yellow',
      img: yellowImg,
      audio: yellowAudio,
      type: WordType.COLORS,
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
      text: 'elf',
      img: elfImg,
      audio: elfAudio,
      type: WordType.PRETEND,
    },
    {
      completed: false,
      text: 'yeti',
      img: yetiImg,
      audio: yetiAudio,
      type: WordType.PRETEND,
    }
  ]
};