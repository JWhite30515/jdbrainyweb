import santaAudio from '../static/audio/stories/santa/SPS_3_1.mp3';
import santaImg from '../static/img/Santas-Elf-2-no_landings.png'

import alienImg from '../static/img/Space-Alien3-no_landings.png';
import inventionsImg from '../static/img/0Special_Inventions_1_without_templates.png';

const initialText = `
Late one Christmas Eve, frazzled and exhausted and sleepy-
tired more than ever, poor
shy Elmer, one of Santa’s helper-
elves, began climbing into his top bunk-
bed bed when a paper
stuck in his sleeve fluttered at his wrist. Uh-oh. He checked. Uh-oh. A list of toys he’d
forgotten to pack up in Santa’s sleigh. A nice grown-up had written and mailed to Santa the list
for some children at a homeless shelter, a place families go when they can’t stay in their own
home any more and don’t have any place else to go. Staying there means they don’t have
much room, and usually can’t bring more than just one little toy.
Their letter she sent from them to Santa said that
`;

export const stories = [
  {
    id: 1,
    title: 'Santa\'s Mixed-Up Helper Elf',
    audio: santaAudio,
    img: santaImg,
    initialText
  },
  {
    id: 2,
    title: 'Space Alien Encounter',
    img: alienImg
  },
  {
    id: 3,
    title: 'The Boy Who Cried Vampire',
    img: inventionsImg
  }
]

