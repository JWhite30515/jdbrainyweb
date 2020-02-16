import IQuizState, { initialQuizState } from './quizState';
import IStoryState, { initialStoryState } from './storyState';
import IWordState, { initialWordState } from './wordState';

export default interface IRootState {
  quizState: IQuizState;
  storyState: IStoryState;
  wordState: IWordState;
}

export const initialState = {
  quizState: initialQuizState,
  storyState: initialStoryState,
  wordState: initialWordState,
}