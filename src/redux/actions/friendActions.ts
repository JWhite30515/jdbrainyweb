import { IFriendWord } from '../state/friendState';

import keys from './keys';

export function createFriend(friend: IFriendWord) {
  return (dispatch: any) => {
    dispatch(createFriendSuccess(friend));
  }
}

export function createFriendSuccess(friend: IFriendWord) {
  return {
    type: keys.CREATE_FRIEND_SUCCESS,
    friend
  }
}