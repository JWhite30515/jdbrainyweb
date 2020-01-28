import { IWord } from './wordState';

import s1 from '../../static/stories/costumeStory/costume';
import s2 from '../../static/stories/alienStory/alien';
import s3 from '../../static/stories/inventionStory/invention';

export interface IStory {
  text: string;
  img: any;
  title: string;
  words: IWord[];
  audio: any[];
  currSection: number;
}

export const initialStoryState: IStoryState = {
  stories: [
    s1,
    s2,
    s3,
  ],
  currStory: null
}

export default interface IStoryState {
  stories: IStory[];
  currStory: IStory | null;
}
