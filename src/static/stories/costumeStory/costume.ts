import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img from './wacky_costume.png';

const a1 = require('./audio/SPS_1_1 Copy.mp3');
const a2 = require('./audio/SPS_1_2 Copy.mp3');
const a3 = require('./audio/SPS_1_3 Copy.mp3');
const a4 = require('./audio/SPS_1_4 Copy.mp3');
const a5 = require('./audio/SPS_1_5 Copy.mp3');
const a6 = require('./audio/SPS_1_6 Copy.mp3');
const a7 = require('./audio/SPS_1_7 Copy.mp3');
const a8 = require('./audio/SPS_1_8 Copy.mp3');
const a9 = require('./audio/SPS_1_9 Copy.mp3');
const a10 = require('./audio/SPS_1_10 Copy.mp3');
const a11 = require('./audio/SPS_1_10 Copy.mp3');

const story: IStory = {
  title: 'The Wacky Costume Party',
  id: 1,
  sections: [
    {
      text:
        `Do you like wearing costumes and pretending to be somebody different?
        The spelling kids really do, and enjoyed the goofiest, silliest, craziest, wackiest
        mixed-up costume party-- ever! And had their pets dress up too! The only rule was
        — no... scary... costumes. Some kids dressed like a`,
      audio: a1,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.THINGS,
      ]
    },
    {
      text: `or`,
      audio: a2,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
      ]
    },
    {
      text: `or`,
      audio: a3,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
      ]
    },
    {
      text: 
        `, but the spelling kids shared and traded different costume parts so their pets all
        looked really strange and weird and kind of especially — wondersome!  Except —`,
      audio: a4,
      wordCategories: [
        WordCategory.FRIENDS,
      ]
    },
    {
      text:
        ` didn’t plan to mean to intend to break the rule, or be really naughty,
        just maybe a tiny bit mischievous, so `,
      audio: a5,
      wordCategories: [
        WordCategory.FRIENDS,
      ]
    },
    {
      text: `convinced`,
      audio: a6,
      wordCategories: [
        WordCategory.FRIENDS,
      ]
    },
    {
      text: 
        `it would be okay if the costume wasn’t scary all by itself,
        only just scary if people decided to be frightened, and if people decided to,`,
      audio: a7,
      wordCategories: [
        WordCategory.FRIENDS,
      ]
    },
    {
      text: `decided that`,
      audio: a8,
      wordCategories: [
        WordCategory.FRIENDS,
      ]
    },
    {
      text: `wasn’t to blame.  Uh-hunh.`,
      audio: a9,
      wordCategories: [],
    }
  ],
  img,
  currSectionIdx: 0
}

export default story;