import IStoryState, { initialStoryState } from './storyState';
import IWordState, { initialWordState } from './wordState';

export default interface IRootState {
  storyState: IStoryState;
  wordState: IWordState;
}

export const initialState = {
  storyState: initialStoryState,
  wordState: initialWordState,
}