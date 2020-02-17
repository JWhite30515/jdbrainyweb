import apeImg from '../../static/words/img/ape.png';
import bearImg from '../../static/words/img/bear.png';
import burgerImg from '../../static/words/img/burger.png';
import catImg from '../../static/words/img/cat.png';
import clothesImg from '../../static/words/img/clothes.png';
import cowImg from '../../static/words/img/cow.png';
import yetiImg from '../../static/words/img/yeti.png';
import elfImg from '../../static/words/img/elf.png';

const apeAudio = require('../../static/words/audio/ape.mp3');
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
  PRETEND = 'Pretend',
  HOUSE_STUFF = 'House Stuff',
  TOYS = 'Toys'
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