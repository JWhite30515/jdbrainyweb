import keys from './keys';
import { IWord } from '../state/wordState';

export function selectWord(word: IWord, storyId: number, currSectionIdx: number) {
  return (dispatch: any) => {
    dispatch(selectWordSuccess(word, storyId, currSectionIdx));
  }
}

export function selectWordSuccess(word: IWord, storyId: number, currSectionIdx: number) {
  return {
    type: keys.SELECT_WORD_SUCCESS,
    word,
    storyId,
    currSectionIdx,
  }
}

