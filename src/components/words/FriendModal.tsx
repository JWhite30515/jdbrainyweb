import * as React from 'react';

import Modal from './Modal';

export interface IFriendModalProps {
  setFriendModalOpen(open: boolean): void;
}

export function FriendModal(props: IFriendModalProps) {
  const { setFriendModalOpen } = props;

  return (
    <Modal
      title="Create a Friend"
      setModalOpen={(open: boolean) => setFriendModalOpen(open)}
    >
      <span>what's up doc</span>
    </Modal>
  )
}