import { IWord } from '../state/wordState';

import keys from './keys';

export function selectQuizWord(word: IWord) {
  return (dispatch: any) => {
    dispatch(selectQuizWordSuccess(word))
  }
}

export function selectQuizWordSuccess(word: IWord) {
  console.log('hello');
  return {
    type: keys.SELECT_QUIZ_WORD_SUCCESS,
    word,
  }
}