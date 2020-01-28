import { IStory } from '../../../redux/state/storyState';
import img from './wacky_costume.png';

const a1 = require('./audio/SPS_1_1 Copy.mp3');
const a2 = require('./audio/SPS_1_2 Copy.mp3');

const story: IStory = {
  title: 'The Wacky Costume Party',
  text:
`Do you like wearing costumes and pretending to be somebody different?
The spelling kids really do, and enjoyed the goofiest, silliest, craziest, wackiest
mixed-up costume party-- ever! And had their pets dress up too! The only rule was
— no... scary... costumes. Some kids dressed like a`,
  words: [],
  img,
  audio: [
    a1,
    a2,
  ],
  currSection: 0
}

export default story;