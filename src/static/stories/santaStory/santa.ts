import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img1 from './Santas-Elf-picture_1.png';
import img2 from './Santas-Elf-picture_2.png';

const a1 = require('./audio/SPS_3_1.mp3');
const a2 = require('./audio/SPS_3_2.mp3');
const a3 = require('./audio/SPS_3_3.mp3');
const a4 = require('./audio/SPS_3_4.mp3');
const a5 = require('./audio/SPS_3_5.mp3');
const a6 = require('./audio/SPS_3_6.mp3');
const a7 = require('./audio/SPS_3_7.mp3');
const a8 = require('./audio/SPS_3_8.mp3');
const a9 = require('./audio/SPS_3_9.mp3');
const a10 = require('./audio/SPS_3_10.mp3');
const a11 = require('./audio/SPS_3_11.mp3');
const a12 = require('./audio/SPS_3_12.mp3');
const a13 = require('./audio/SPS_3_13.mp3');
const a14 = require('./audio/SPS_3_14.mp3');
const a15 = require('./audio/SPS_3_15.mp3');
const a16 = require('./audio/SPS_3_16.mp3');
const a17 = require('./audio/SPS_3_17.mp3');
const a18 = require('./audio/SPS_3_18.mp3');


const story: IStory = {
  title: 'Santa\'s Mixed-Up Helper-Elf',
  id: 2,
  sections: [
    {
      text:
        `Late one Christmas Eve, frazzled and exhausted and sleepy-
        tired more than ever, poor
        shy Elmer, one of Santa’s helper-elves, began climbing into his top bunk-
        bed bed when a paper
        stuck in his sleeve fluttered at his wrist. Uh-oh. He checked. Uh-oh. A list of toys he’d
        forgotten to pack up in Santa’s sleigh. A mother had written and mailed to Santa the list
        for some children at the homeless shelter, a place families go when they can’t stay in their own
        home any more and don’t have any place else to go. Staying there means they don’t have
        much room, and usually can’t bring more than just one little toy.
        Their letter she sent from them to Santa said that`,
      audio: a1,
      part: 1,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text:
        ` wanted first a soft fluffy stuffed`,
      audio: a2,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
      ],
      part: 1,
    },
    {
      text:
        ` little enough to carry anywhere, and second a wooden`,
      audio: a3,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS,
        WordCategory.VEHICLES,
      ],
      part: 1,
    },
    {
      text:
        ` big enough to sit and rock on and pretend to ride far away. The first request for`,
      audio: a4,
      id: 2,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },
    {
      text:
        ` was a`,
      audio: a5,
      wordCategories: [
        WordCategory.TOYS,
      ],
      part: 1,
    },
    {
      text:
        ` like nobody else’s, and second a battery powered remote control`,
      audio: a6,
      wordCategories: [
        WordCategory.VEHICLES,
      ],
      part: 1,
    },
    {
      text:
        ` to race across the floor and under chairs and tables and maybe chase a cat or scare
        bump somebody’s shoes from behind.`,
      audio: a7,
      id: 3,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },
    {
      text:
        ` wanted most a brand new`,
      audio: a8,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS,
        WordCategory.CLOTHES,
      ],
      part: 1,
    },
    {
      text:
        ` to show off and look pretty with, and a pretty white sweater with a picture of her very 
        favorite animal, a`,
      audio: a9,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
      ],
      part: 1,
    },
    {
      text:
        ` Timid helper-elf Elmer felt terribly, horribly awful that he’d found the list so 
        late and quickly raced around Santa’s big toy warehouse to gather the gifts, but 
        poor Elmer’s sleepy eyes didn’t read the list’s words very well, and poor Elmer’s 
        sleepy memory didn’t remember very well, and — oh no! — at the very last minute 
        poor timid Elmer had mistakenly loaded into Santa’s sleigh for`,
      audio: a10,
      id: 1,
      wordCategories: WordCategory.FRIENDS,
      part: 1,
    },
    {
      text:
        ` -uh oh– a soft fluffy stuffed little`,
      audio: a11,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
      ],
      part: 2,
    },
    {
      text:
        ` to carry and a big wooden`,
      audio: a12,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS,
        WordCategory.VEHICLES,
      ],
      part: 2,
    },
    {
      text:
        ` to ride, for`,
      audio: a13,
      id: 2,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
    },
    {
      text:
        ` -uh uh oh– a RC`,
      audio: a14,
      wordCategories: [
        WordCategory.VEHICLES,
      ],
      part: 2,
    },
    {
      text:
        ` and`,
      audio: a15,
      wordCategories: [
        WordCategory.TOYS,
      ],
      part: 2,
    },
    {
      text:
        ` for`,
      audio: a16,
      id: 3,
      wordCategories: WordCategory.FRIENDS,
      part: 2,
    },
    {
      text:
        ` -uh no– one`,
      audio: a17,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.TOYS,
        WordCategory.CLOTHES,
      ],
      part: 2,
    },
    {
      text:
        ` and a pink sweater with a`,
      audio: a18,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
      ],
      part: 2,
    },
  ],
  parts: [
    {
      backgroundImg: img1,
      id: 1,
    },
    {
      backgroundImg: img2,
      id: 2,
    }
  ]
};

export default story;