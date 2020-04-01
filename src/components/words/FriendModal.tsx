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
      <div
        className="flex-column flex-start separator-right"
        style={{ flex: 1, height: '100%' }}
      >
        <h1>Choose a Friend</h1>
      </div>
      <div className="flex-column">
        <h1>Choose a Name</h1>
      </div>
    </Modal>
  )
}