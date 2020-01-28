import { IWord } from '../state/wordState';

import keys from './keys';

export function masterWord(word: IWord, storyIdx: number) {
  return (dispatch: any) => {
    dispatch(masterWordSuccess(word, storyIdx))
  }
}

export function masterWordSuccess(word: IWord, storyIdx: number) {
  return {
    type: keys.MASTER_WORD_SUCCESS,
    word,
    storyIdx
  }
}