import { IStory } from '../../../redux/state/storyState';

import img1 from './Santas-Elf-2-no_landings.png';

const a1 = require('./audio/SPS_3_1.mp3');
const a2 = require('./audio/SPS_3_2.wav');

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
      wordCategories: [],
      part: 1,
    },
  ],
  parts: [
    {
      backgroundImg: img1,
      id: 1,
    },
  ]
};

export default story;