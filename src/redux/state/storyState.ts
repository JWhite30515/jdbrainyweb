import { IFriendWord } from './friendState';
import { IWord, WordCategory } from './wordState';

import s1 from '../../static/stories/costumeStory/costume';
import s2 from '../../static/stories/santaStory/santa';
import s3 from '../../static/stories/inventionStory/invention';

export interface IStory {
  img: any;
  title: string;
  id: number;
  sections: ISection[];
}

export interface ISection {
  text: string;
  audio: any;
  id?: number;
  word?: IFriendWord | IWord;
  wordCategories: WordCategory[] | WordCategory;
  imgPos?: {
    top: number;
    left: number;
    width?: number;
  }
}

export const initialStoryState: IStoryState = {
  stories: [
    s1,
    s2,
    s3,
  ]
}

export default interface IStoryState {
  stories: IStory[];
}
