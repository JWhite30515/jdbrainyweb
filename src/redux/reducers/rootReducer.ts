import { combineReducers, AnyAction, Reducer } from 'redux';

import IFriendState, { initialFriendState } from '../state/friendState';
import IStoryState, { initialStoryState } from '../state/storyState';
import IWordState, { initialWordState } from '../state/wordState';
import IRootState from '../state/rootState';

import keys from '../actions/keys';

const storyReducer: Reducer<IStoryState, AnyAction> = (
  state = initialStoryState,
  action
): IStoryState => {
  switch (action.type) {
    case keys.SELECT_WORD_SUCCESS: {
      const { word, storyId, currSectionIdx } = action;

      const storyIdx = state.stories.findIndex(story => story.id === storyId);

      const updatedStory = { ...state.stories[storyIdx] };

      if (!updatedStory) return { ...state };

      console.log(currSectionIdx);

      const updatedSection = { ...updatedStory.sections[currSectionIdx] };

      updatedSection.word = word;

      const updatedSections = [...updatedStory.sections];
  
      // if word has an id, set all sections with that id to have that word
      if (updatedSection.id) {
        for (let i = 0; i < updatedSections.length; i += 1) {
          if (updatedSections[i].id === updatedSection.id) {
            updatedSections[i].word = word;
          }
        }
      } else {
        updatedSections[currSectionIdx] = updatedSection;
      }

      updatedStory.sections = updatedSections;

      let updatedStories = [...state.stories];
      updatedStories.splice(storyIdx, 1, updatedStory)

      console.log('here are the updated stories\n');
      console.log(updatedStories);
      return {
        ...state,
        stories: updatedStories,
      }
    }
    // case keys.CHANGE_CURRENT_SECTION_SUCCESS: {
    //   const { id, idx } = action;

    //   const storyIdx = state.stories.findIndex(story => story.id === id);

    //   const storyToUpdate = { ...state.stories[storyIdx] };

    //   // storyToUpdate.currSectionIdx = idx;

    //   const updatedStories = [...state.stories];
    //   updatedStories.splice(storyIdx, 1, storyToUpdate);

    //   return {
    //     ...state,
    //     stories: updatedStories,
    //   }
    // }
    default:
      return state
  }
}

const wordReducer: Reducer<IWordState, AnyAction> = (
  state = initialWordState,
  action
): IWordState => {
  switch (action.type) {
    case keys.MASTER_WORD_SUCCESS: {
      const { word } = action;

      const newWords = [...state.words];

      for (const newWord of newWords) {
        if (newWord.text === word.text) {
          newWord.completed = true;
        }
      }

      return {
        ...state,
        words: newWords
      }
    }
    default:
      return state
  }
}

const friendReducer: Reducer<IFriendState, AnyAction> = (
  state = initialFriendState,
  action
): IFriendState => {
  switch (action.type) {
    case keys.CREATE_FRIEND_SUCCESS: {
      const { friend } = action;

      const friendsList = [...state.friends];
      friendsList.push(friend);

      return {
        ...state,
        friends: friendsList,
      }
    }
    default:
      return state
  }
}

const rootReducer = combineReducers<IRootState>({
  storyState: storyReducer,
  wordState: wordReducer,
  friendState: friendReducer,
});

export default rootReducer;