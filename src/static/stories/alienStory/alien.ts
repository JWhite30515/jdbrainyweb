import { IStory } from '../../../redux/state/storyState';

import img1 from './Space-Alien3-no_landings.png';

const story: IStory = {
  id: 3,
  title: 'The Space Alien',
  parts: [
    {
      backgroundImg: img1,
      id: 1,
    }
  ],
  sections: [],
}

export default story;