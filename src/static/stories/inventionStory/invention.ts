import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img from './0Special_Inventions_2_without_templates.png';

const a1 = require('./audio/SPS_2_1');
const a2 = require('./audio/SPS_2_2');
const a3 = require('./audio/SPS_2_3');
const a4 = require('./audio/SPS_2_4');
const a5 = require('./audio/SPS_2_5');
const a6 = require('./audio/SPS_2_6');
const a7 = require('./audio/SPS_2_7');
const a8 = require('./audio/SPS_2_8');
const a9 = require('./audio/SPS_2_9');
const a10 = require('./audio/SPS_2_10');
const a11 = require('./audio/SPS_2_11');
const a12 = require('./audio/SPS_2_12');
const a13 = require('./audio/SPS_2_13');
const a14 = require('./audio/SPS_2_14');
const a15 = require('./audio/SPS_2_15');
const a16 = require('./audio/SPS_2_16');
const a17 = require('./audio/SPS_2_17');

const story: IStory = {
  title: 'The Special Invention',
  id: 1,
  sections: [
    {
      text:
        ``,
      audio: a2,
      wordCategories: [
        WordCategory.PEOPLE,
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.THINGS,
    },
  ],
  img,
}

export default story;