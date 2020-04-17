import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img from './Wacky-Costume-no-templates.png';

const a1 = require('./audio/SPS_1_26 Copy.mp3');
const a2 = require('./audio/SPS_1_26 Copy.mp3');
const a3 = require('./audio/SPS_1_27 Copy.mp3');
const a4 = require('./audio/SPS_1_28 Copy.mp3');
const a5 = require('./audio/SPS_1_29 Copy.mp3');
const a6 = require('./audio/SPS_1_30 Copy.mp3');
const a7 = require('./audio/SPS_1_31 Copy.mp3');
const a8 = require('./audio/SPS_1_32 Copy.mp3');
const a9 = require('./audio/SPS_1_33 Copy.mp3');
const a10 = require('./audio/SPS_1_34 Copy.mp3');
const a11 = require('./audio/SPS_1_35 Copy.mp3');
const a12 = require('./audio/SPS_1_36 Copy.mp3');
const a13 = require('./audio/SPS_1_37 Copy.mp3');
const a14 = require('./audio/SPS_1_38 Copy.mp3');
const a15 = require('./audio/SPS_1_39 Copy.mp3');
const a16 = require('./audio/SPS_1_40 Copy.mp3');

const story: IStory = {
  title: 'The Wacky Costume Party',
  id: 1,
  sections: [
    {
      text: ` Which didn’t scare [D-2]`,
      id: 2,
       audio: a1,
      wordCategories: WordCategory.FRIENDS,
    },{
      text: ` or [G-2]`,
      id: 3,
      audio: a2,
      wordCategories: WordCategory.FRIENDS,
    },{
      text: ` or [K-2]`,
      id: 4,
      audio: a3,
      wordCategories: WordCategory.FRIENDS,
    },{
      text:
      ` they didn’t decide to befrightened—but those poor pets didn’t know they could decide,
      and justgothowlishouslyscared without even thinking about it! The [E-H E-M E-T]`,
      audio: a4,
      wordCategories: [
        WordCategory.HEAD,
        WordCategory.MIDDLE,
        WordCategory.TAIL,]
    },{
      text: `spilled the fruit punch bowl and the [J-H J-M J-T]`,
      audio: a5,
      wordCategories:  [
        WordCategory.HEAD,
        WordCategory.MIDDLE,
        WordCategory.TAIL,]
    },{
      text:
      ` tumbled into the big party chocolate angel-food cake and the [L-H L-M L-T]`,
      audio: a6,
      wordCategories: [
        WordCategory.HEAD,
        WordCategory.MIDDLE,
        WordCategory.TAIL,]
    },{
      text:
      `  knocked over the treats table and in all the commotion [D-2]`,
      id: 2,
      audio: a7,
      wordCategories: WordCategory.FRIENDS,
    },{
      text: ` hid behind the [N-8_9]`,
      audio: a8,
      wordCategories:  [
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF]
    },{
      text: ` , and [G-2]`,
      id: 3,
      audio: a9,
      wordCategories: WordCategory.FRIENDS,
    },
    {
      text: ` peeeeked out of the [P-8_9]`,
      audio: a10,
      wordCategories:  [
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF]
    },
    {
      text: ` ,and [K-2]`,
      id: 4,
      audio: a11,
      wordCategories: WordCategory.FRIENDS,
    },{
      text: ` sneaked under the [Q-8_9]`,
      audio: a12,
      wordCategories: [
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF]
    },{
      text: ` , and when the grown-ups rushed in [C-2]`,
      id: 5,
      audio: a13,
      wordCategories: WordCategory.FRIENDS,
    },{
      text:
      ` thought it was a very good time to hide in a costume, 
      only maybe not in a BigfootSasquatch costume. And the grownups made [C-2]`,
      id: 5,
      audio: a14,
      wordCategories: WordCategory.FRIENDS,
    },{
      text:
      ` keep that costume on and do all the work all alone to wipe up the fruit 
      punch and clean up the spilled cake and tidy up the treats table. And [C-2]`,
      id: 5,
      audio: a15,
      wordCategories: WordCategory.FRIENDS,
    },{
      text:
      ` decided not to decide again that it would be okay fun to decide to scare anybody, whether they decided to be scared or not `,
      audio: a16,
      wordCategories: []
    }
  ],
  img,
}

export default story;