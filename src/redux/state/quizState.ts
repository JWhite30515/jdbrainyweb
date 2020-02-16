import { IWord } from './wordState';

export const initialQuizState: IQuizState = {
  word: null,
}

export default interface IQuizState {
  word: IWord | null;
}