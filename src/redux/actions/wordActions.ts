import { IWord } from '../state/wordState';

import keys from './keys';

export function masterWord(word: IWord, storyId: number) {
  return (dispatch: any) => {
    dispatch(masterWordSuccess(word, storyId))
  }
}

export function masterWordSuccess(word: IWord, storyId: number) {
  return {
    type: keys.MASTER_WORD_SUCCESS,
    word,
    storyId,
  }
}