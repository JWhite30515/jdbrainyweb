import keys from './keys';
import { IWord } from '../state/wordState';

export function selectStory(id: number) {
  return (dispatch: any) => {
    dispatch(selectStorySuccess(id));
  }
}

export function selectStorySuccess(id: number) {
  return {
    type: keys.SELECT_STORY_SUCCESS,
    id,
  }
}

export function changeCurrentSection(id: number, idx: number) {
  return (dispatch: any) => {
    dispatch(changeCurrentSectionSuccess(id, idx));
  }
}

export function changeCurrentSectionSuccess(id: number, idx: number) {
  return {
    type: keys.CHANGE_CURRENT_SECTION_SUCCESS,
    id,
    idx,
  }
}

export function selectWord(word: IWord, storyId: number) {
  return (dispatch: any) => {
    dispatch(selectWordSuccess(word, storyId));
  }
}

export function selectWordSuccess(word: IWord, storyId: number) {
  return {
    type: keys.SELECT_WORD_SUCCESS,
    word,
    storyId,
  }
}

