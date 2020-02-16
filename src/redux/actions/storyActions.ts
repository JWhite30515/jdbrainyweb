import keys from './keys';

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
