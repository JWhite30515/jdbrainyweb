import { combineReducers, AnyAction, Reducer } from 'redux';

import IStoryState, { initialStoryState } from '../state/storyState';
import IWordState, { initialWordState } from '../state/wordState';
import IRootState from '../state/rootState';

import keys from '../actions/keys';

const storyReducer: Reducer<IStoryState, AnyAction> = (
  state = initialStoryState,
  action
): IStoryState => {
  switch (action.type) {
    case keys.SELECT_STORY_SUCCESS:
      return {
        ...state,
        currStory: action.story,
      }
    case keys.MASTER_WORD_SUCCESS:
      const storyToUpdate = state.stories[action.storyIdx];

      const storyNewWords = storyToUpdate.words;
      storyNewWords.push(action.word);
      // update story with new words bank and move to next section
      const newStory = {
        ...storyToUpdate,
        words: storyNewWords,
        currSection: storyToUpdate.currSection + 1,
      };

      const newStories = [...state.stories];
      newStories.splice(action.storyIdx, 1, newStory)

      console.log(newStories);
      return {
        ...state,
        stories: newStories,
      }
    default:
      return state
  }
}

const wordReducer: Reducer<IWordState, AnyAction> = (
  state = initialWordState,
  action
): IWordState => {
  switch (action.type) {
    case keys.MASTER_WORD_SUCCESS:
      const idxToUpdate = state.words.findIndex(word => word.text === action.word.text);

      if (idxToUpdate < 0) return { ...state };

      const newWords = [...state.words];
      newWords.splice(idxToUpdate, 1, action.word)
      console.log(newWords);
      return {
        ...state,
        words: newWords
      }
    default:
      return state
  }
}

const rootReducer = combineReducers<IRootState>({
  storyState: storyReducer,
  wordState: wordReducer
});

export default rootReducer;