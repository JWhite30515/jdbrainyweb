import { WordCategory } from '../state/wordState';

export interface ISegmentedWord {
  text: string;
  img: any;
  audio: any;
  category: WordCategory;
}

const segmentedWords: ISegmentedWord[] = [
 {
   text: 'test',
   img: {},
   audio: {},
   category: WordCategory.HEAD,
 }
]