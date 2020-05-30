import { IFriendWord } from './friendState';
import { IWord, WordCategory } from './wordState';

import s1 from '../../static/stories/costumeStory/costume';
import s2 from '../../static/stories/santaStory/santa';
import s3 from '../../static/stories/inventionStory/invention';
import s4 from '../../static/stories/circusStory/circus';
import s5 from '../../static/stories/wheelStory/wheel';
import s6 from '../../static/stories/alienStory/alien';

export interface IPart {
  backgroundImg: any;
  id: number;
}

export interface IStory {
  title: string;
  id: number;
  sections: ISection[];
  parts: IPart[];
}

export interface ISection {
  part: number;
  text: string;
  audio: any;
  id?: number | string;
  word?: IFriendWord | IWord;
  wordCategories: WordCategory[] | WordCategory;
  imgPositions?: {
    part: number;
    top: number;
    left: number;
    width?: number;
    // degrees by which to rotate img CW
    rotate?: number;
    //rate by which img is enlarged/minimized
    scale?: number;
  }[];
  // id of word in story that this section's word cannot match
  duplicateId?: number | string;
}

export const initialStoryState: IStoryState = {
  stories: [
    s1,
    s2,
    s3,
    s4,
    s5,
    s6
  ]
}

export default interface IStoryState {
  stories: IStory[];
}
