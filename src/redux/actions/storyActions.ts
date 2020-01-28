import { IStory } from '../state/storyState';

import keys from './keys';

export function selectStory(story: IStory) {
  return (dispatch: any) => {
    dispatch(selectStorySuccess(story));
  }
}

export function selectStorySuccess(story: IStory) {
  return {
    type: keys.SELECT_STORY_SUCCESS,
    story,
  }
}
