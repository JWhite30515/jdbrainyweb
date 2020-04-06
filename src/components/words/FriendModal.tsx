import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from './Modal';
import Card from '../common/Card';
import IRootState from '../../redux/state/rootState';
import { createFriend } from '../../redux/actions/friendActions';
import { selectWord } from '../../redux/actions/storyActions';
import { IFriendWord, IName } from '../../redux/state/friendState';
import { IWord } from '../../redux/state/wordState';

import '../../css/common.css';
import '../../css/layout.css';
import '../../css/modal.css';

export interface IFriendModalProps {
  currSectionIdx: number;
  currStoryId: number;
  friends: IFriendWord[];
  imgs: any[];
  names: IName[];
  createFriend(friend: IFriendWord): void;
  selectWord(word: IWord | IFriendWord, storyId: number, currSectionIdx: number): void,
  setCurrSectionIdx(idx: number): void;
  setPlayingSectionAudio(playing: boolean): void;
  setShowFriendModal(open: boolean): void;
  setWordAudio(audio: HTMLAudioElement): void;
}

function FriendModal(props: IFriendModalProps) {
  const {
    currSectionIdx,
    currStoryId,
    friends,
    imgs,
    names,
    createFriend,
    selectWord,
    setCurrSectionIdx,
    setPlayingSectionAudio,
    setShowFriendModal,
    setWordAudio,
  } = props;

  const [isCreatingFriend, setIsCreatingFriend] = useState(friends.length === 0);
  const [currImg, setCurrImg] = useState<any | null>(null);
  const [currName, setCurrName] = useState<IName | null>(null);

  useEffect(() => {
    if (currImg && currName) {
      setShowFriendModal(false);

      const newFriendWord: IFriendWord = {
        audio: currName.audio,
        gender: currName.gender,
        img: currImg,
        text: currName.text
      };

      // add this friend word to the list of friends in state
      createFriend(newFriendWord);
      // update this section's word to be the newly created friend word
      selectWord(newFriendWord, currStoryId, currSectionIdx);

      const wordAudio = new Audio(newFriendWord.audio);
      wordAudio.addEventListener('ended', () => {
        setPlayingSectionAudio(true);
      });

      setWordAudio(wordAudio);
      setCurrSectionIdx(currSectionIdx + 1);
    }
  },
    [
      currSectionIdx,
      currStoryId,
      createFriend,
      currImg,
      currName,
      selectWord,
      setCurrSectionIdx,
      setPlayingSectionAudio,
      setShowFriendModal,
      setWordAudio
    ]);

  return (
    <Modal
      footerElement={
        <div className="nav light-green-back flex-row" style={{ height: '10%' }}>
          <button
            className="button-dark-green"
            onClick={() => setIsCreatingFriend(!isCreatingFriend)}
          >
            {isCreatingFriend ? 'Choose a Friend' : 'Create a Friend'}
          </button>
        </div>
      }
      title={isCreatingFriend ? 'Create a Friend' : 'Choose a Friend'}
      setModalOpen={(open: boolean) => setShowFriendModal(open)}
    >
      {isCreatingFriend &&
        <React.Fragment>
          <div
            className="flex-column flex-start separator-right"
            style={{ flex: 1, height: '100%' }}
          >
            <h1>Choose a New Friend</h1>
            <div className="flex-row wrap-overflow separator-top">
              {imgs.map((img, idx) => {
                return (
                  <Card
                    key={`friend_img_${idx}`}
                    onClick={() => {
                      setCurrImg(img);
                    }}
                    selected={currImg === img}
                    style={{ margin: '20px' }}
                  >
                    <img
                      className="card-img"
                      src={img}
                      alt="Friend"
                    />
                  </Card>
                );
              })}
            </div>
          </div>
          <div
            className="flex-column"
            style={{ flex: 2, maxHeight: '100%' }}
          >
            <h1>Choose a Name</h1>
            <div className="flex-row wrap-overflow separator-top">
              {names.map((name, idx) => {
                return (
                  <Card
                    key={`friend_name_${idx}`}
                    onClick={() => {
                      setCurrName(name);
                    }}
                    selected={currName === name}
                    style={{ margin: '20px' }}
                  >
                    <h1>{name.text}</h1>
                  </Card>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      }
      {!isCreatingFriend &&
        <React.Fragment>
          <div
            className="flex-column"
            style={{ maxHeight: '100%' }}
          >
            <div className="flex-row wrap-overflow separator-top">
              {friends.length === 0 &&
                <span>You have not created any friends yet!</span>
              }
              {friends.map((friend, idx) => {
                return (
                  <Card
                    key={`friend_${idx}`}
                    onClick={() => {
                      setShowFriendModal(false);
                      selectWord(friend, currStoryId, currSectionIdx);

                      const wordAudio = new Audio(friend.audio);
                      wordAudio.addEventListener('ended', () => {
                        setPlayingSectionAudio(true);
                      });

                      setWordAudio(wordAudio);
                      setCurrSectionIdx(currSectionIdx + 1);
                    }}
                    style={{ margin: '20px' }}
                  >
                    <h1>{friend.text}</h1>
                    <img
                      className="card-img"
                      alt={friend.text}
                      src={friend.img}
                    />
                  </Card>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      }
    </Modal>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    friends: state.friendState.friends,
    imgs: state.friendState.imgs,
    names: state.friendState.names,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createFriend: bindActionCreators(createFriend, dispatch),
    selectWord: bindActionCreators(selectWord, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendModal);