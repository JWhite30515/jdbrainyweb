import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img from './Wacky-Costume-no-templates.png';

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
const a11 = require('./audio/SPS_1_11 Copy.mp3');
const a12 = require('./audio/SPS_1_12 Copy.mp3');
const a13 = require('./audio/SPS_1_13 Copy.mp3');
const a14 = require('./audio/SPS_1_14 Copy.mp3');
const a15 = require('./audio/SPS_1_15 Copy.mp3');
const a16 = require('./audio/SPS_1_16 Copy.mp3');
const a17 = require('./audio/SPS_1_17 Copy.mp3');
const a18 = require('./audio/SPS_1_18 Copy.mp3');
const a19 = require('./audio/SPS_1_19 Copy.mp3');
const a20 = require('./audio/SPS_1_20 Copy.mp3');
const a21 = require('./audio/SPS_1_21 Copy.mp3');
const a22 = require('./audio/SPS_1_22 Copy.mp3');
const a23 = require('./audio/SPS_1_23 Copy.mp3');
const a24 = require('./audio/SPS_1_24 Copy.mp3');
const a25 = require('./audio/SPS_1_25 Copy.mp3');

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
      ],
    },
    {
      text: ` or`,
      audio: a2,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
      ],
    },
    {
      text: ` or`,
      audio: a3,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
      ],
    },
    {
      text: 
        `, but the spelling kids shared and traded different costume parts so their pets all
        looked really strange and weird and kind of especially — wondersome!  Except —`,
      audio: a4,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text:
        ` didn’t plan to mean to intend to break the rule, or be really naughty,
        just maybe a tiny bit mischievous, so`,
      audio: a5,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: ` convinced`,
      audio: a6,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: 
        ` it would be okay if the costume wasn’t scary all by itself,
        only just scary if people decided to be frightened, and if people decided to,`,
      audio: a7,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: ` decided that`,
      audio: a8,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: ` wasn’t to blame. Uh-hunh.`,
      audio: a9,
      wordCategories: WordCategory.FRIENDS,
    },
    // friend costume 1
    {
      text: ` went to the party dressed as a`,
      audio: a10,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
      ],
      imgPos: {
        top: 25,
        left: 44,
      }
    },
    // animal parts 1
    {
      text: `, and brought a pet`,
      audio: a11,
      wordCategories: [
        WordCategory.HEAD,
      ],
      imgPos: {
        top: 37,
        left: 30.6,
        width: 12.7,
      }
    },
    {
      text: ` who looked very interesting with a`,
      audio: a12,
      wordCategories: [
        WordCategory.MIDDLE,
      ],
      imgPos: {
        top: 37,
        left: 30.6,
        width: 12.7,
      }
    },
    {
      text: ` body and a`,
      audio: a13,
      wordCategories: [
        WordCategory.TAIL,
      ],
      imgPos: {
        top: 37,
        left: 30.6,
        width: 12.7,
      }
    },
    {
      text: ` tail.`,
      audio: a14,
      wordCategories: WordCategory.FRIENDS,
    },
    // friend costume 2
    {
      text: ` came costumed as a`,
      audio: a15,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
      ],
      imgPos: {
        top: 31,
        left: 76,
      }
    },
    // animal with parts 2
    {
      text: `, and had a pet`,
      audio: a16,
      wordCategories: [
        WordCategory.HEAD,
      ],
      imgPos: {
        top: 60,
        left: 77.4,
        width: 12.7,
      }
    },
    {
      text: ` who looked great with a`,
      audio: a17,
      wordCategories: [
        WordCategory.TAIL,
      ],
      imgPos: {
        top: 60,
        left: 77.4,
        width: 12.7,
      }
    },
    {
      text: ` tail and a`,
      audio: a18,
      wordCategories: [
        WordCategory.MIDDLE,
      ],
      imgPos: {
        top: 60,
        left: 77.4,
        width: 12.7,
      }
    },
    {
      text: ` middle.`,
      audio: a19,
      wordCategories: WordCategory.FRIENDS,
    },
    // friend costume 3
    {
      text: ` thought and wondered and cogitated and finally decided to be a`,
      audio: a20,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
      ],
      imgPos: {
        top: 40,
        left: 88,
      }
    },
    // animal parts 3
    {
      text: `, and brought a strange pet`,
      audio: a21,
      wordCategories: [
        WordCategory.HEAD,
      ],
      imgPos: {
        top: 76,
        left: 66,
        width: 12.7,
      }
    },
    {
      text: ` with`,
      audio: a22,
      wordCategories: [
        WordCategory.MIDDLE,
      ],
      imgPos: {
        top: 76,
        left: 66,
        width: 12.7,
      }
    },
    {
      text: ` tummy parts and a`,
      audio: a23,
      wordCategories: [
        WordCategory.TAIL,
      ],
      imgPos: {
        top: 76,
        left: 66,
        width: 12.7,
      }
    },
    {
      text: ` tail part. And a wonderful time was had by all — until`,
      audio: a24,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: ` appeared in a Bigfoot Sasquatch costume! Which didn't scare...`,
      audio: a25,
      wordCategories: []
    },
  ],
  img,
}

export default story;