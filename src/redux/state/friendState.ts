import { IBaseWord } from './wordState';

import boy_1 from '../../static/words/friends/img/boy_1.png';
import boy_2 from '../../static/words/friends/img/boy_2.png';
import boy_3 from '../../static/words/friends/img/boy_3.png';
import boy_4 from '../../static/words/friends/img/boy_4.png';
import boy_5 from '../../static/words/friends/img/boy_5.png';
import boy_6 from '../../static/words/friends/img/boy_6.png';
import boy_7 from '../../static/words/friends/img/boy_7.png';
import boy_8 from '../../static/words/friends/img/boy_8.png';
import boy_9 from '../../static/words/friends/img/boy_9.png';
import boy_10 from '../../static/words/friends/img/boy_10.png';
import boy_11 from '../../static/words/friends/img/boy_11.png';
import boy_12 from '../../static/words/friends/img/boy_12.png';
import boy_13 from '../../static/words/friends/img/boy_13.png';
import boy_14 from '../../static/words/friends/img/boy_14.png';
import boy_15 from '../../static/words/friends/img/boy_15.png';
import boy_16 from '../../static/words/friends/img/boy_16.png';
import boy_17 from '../../static/words/friends/img/boy_17.png';

import girl_1 from '../../static/words/friends/img/girl_1.png';
import girl_2 from '../../static/words/friends/img/girl_2.png';
import girl_3 from '../../static/words/friends/img/girl_3.png';
import girl_4 from '../../static/words/friends/img/girl_4.png';
import girl_5 from '../../static/words/friends/img/girl_5.png';
import girl_6 from '../../static/words/friends/img/girl_6.png';
import girl_7 from '../../static/words/friends/img/girl_7.png';
import girl_8 from '../../static/words/friends/img/girl_8.png';
import girl_9 from '../../static/words/friends/img/girl_9.png';
import girl_10 from '../../static/words/friends/img/girl_10.png';
import girl_11 from '../../static/words/friends/img/girl_11.png';
import girl_12 from '../../static/words/friends/img/girl_12.png';
import girl_13 from '../../static/words/friends/img/girl_13.png';
import girl_14 from '../../static/words/friends/img/girl_14.png';

const adam_audio = require('../../static/words/friends/audio/Adam.mp3');
const alex_audio = require('../../static/words/friends/audio/Alex.mp3');
const ann_audio = require('../../static/words/friends/audio/Ann.mp3');
const ava_audio = require('../../static/words/friends/audio/Ava.mp3');
const beth_audio = require('../../static/words/friends/audio/Beth.mp3');
const bill_audio = require('../../static/words/friends/audio/Bill.mp3');
const bob_audio = require('../../static/words/friends/audio/Bob.mp3');
const deb_audio = require('../../static/words/friends/audio/Deb.mp3');
const dev_audio = require('../../static/words/friends/audio/Dev.mp3');
const eva_audio = require('../../static/words/friends/audio/Eva.mp3');

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female'
}

export interface IFriendWord extends IBaseWord {
  gender: Gender;
}

export interface IName {
  text: string;
  gender: Gender;
  audio: any;
}

export const names: IName[] = [
  {
    text: 'Adam',
    gender: Gender.MALE,
    audio: adam_audio,
  },
  {
    text: 'Alex',
    gender: Gender.MALE,
    audio: alex_audio,
  },
  {
    text: 'Bill',
    gender: Gender.MALE,
    audio: bill_audio,
  },
  {
    text: 'Bob',
    gender: Gender.MALE,
    audio: bob_audio,
  },
  {
    text: 'Dev',
    gender: Gender.MALE,
    audio: dev_audio,
  },
  {
    text: 'Ann',
    gender: Gender.FEMALE,
    audio: ann_audio,
  },
  {
    text: 'Ava',
    gender: Gender.FEMALE,
    audio: ava_audio,
  },
  {
    text: 'Beth',
    gender: Gender.FEMALE,
    audio: beth_audio,
  },
  {
    text: 'Deb',
    gender: Gender.FEMALE,
    audio: deb_audio,
  },
  {
    text: 'Eva',
    gender: Gender.FEMALE,
    audio: eva_audio,
  },
];

export const imgs: any[] = [
  boy_1,
  boy_2,
  boy_3,
  boy_4,
  boy_5,
  boy_6,
  boy_7,
  boy_8,
  boy_9,
  boy_10,
  boy_11,
  boy_12,
  boy_13,
  boy_14,
  boy_15,
  boy_16,
  boy_17,
  girl_1,
  girl_2,
  girl_3,
  girl_4,
  girl_5,
  girl_6,
  girl_7,
  girl_8,
  girl_9,
  girl_10,
  girl_11,
  girl_12,
  girl_13,
  girl_14,
]

export default interface IFriendState {
  names: IName[];
  imgs: any[];
  friends: IFriendWord[];
}

export const initialFriendState: IFriendState = {
  names,
  imgs,
  friends: [],
}
