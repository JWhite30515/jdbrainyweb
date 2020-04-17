import IFriendState, { initialFriendState } from './friendState';
import IStoryState, { initialStoryState } from './storyState';
import IWordState, { initialWordState } from './wordState';

export default interface IRootState {
  friendState: IFriendState;
  storyState: IStoryState;
  wordState: IWordState;
}

export const initialState = {
  friendState: initialFriendState,
  storyState: initialStoryState,
  wordState: initialWordState,
}