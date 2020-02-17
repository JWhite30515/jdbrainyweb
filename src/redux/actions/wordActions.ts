import { IWord } from '../state/wordState';

import keys from './keys';

export function masterWord(word: IWord) {
  return (dispatch: any) => {
    dispatch(masterWordSuccess(word))
  }
}

export function masterWordSuccess(word: IWord) {
  return {
    type: keys.MASTER_WORD_SUCCESS,
    word,
  }
}