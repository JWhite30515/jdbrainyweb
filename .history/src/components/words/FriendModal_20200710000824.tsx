import React, { useCallback, useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from './Modal';
import Card from '../common/Card';
import IRootState from '../../redux/state/rootState';
import { createFriend } from '../../redux/actions/friendActions';
import { selectWord } from '../../redux/actions/storyActions';
import { IFriendWord, IName } from '../../redux/state/friendState';
import { IStory } from '../../redux/state/storyState';
import { IWord, WordCategory } from '../../redux/state/wordState';

import '../../css/common.css';
import '../../css/layout.css';
import '../../css/modal.css';

export interface IFriendModalProps {
  currSectionIdx: number;
  currStory: IStory;
  friends: IFriendWord[];
  imgs: any[];
  names: IName[];
  sectionAudio: HTMLAudioElement | null;
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
    currStory,
    friends,
    imgs,
    names,
    sectionAudio,
    createFriend,
    selectWord,
    setCurrSectionIdx,
    setPlayingSectionAudio,
    setShowFriendModal,
    setWordAudio,
  } = props;

  const [currImg, setCurrImg] = useState<any | null>(null);
  const [currName, setCurrName] = useState<IName | null>(null);

  const createAndSetWordAudio = useCallback((audio: HTMLAudioElement) => {
    setShowFriendModal(false);
    audio.addEventListener('ended', () => {
      setPlayingSectionAudio(true);
    });

    setWordAudio(audio);
    setCurrSectionIdx(currSectionIdx + 1);
    setPlayingSectionAudio(false);

    if (sectionAudio) sectionAudio.pause();
  }, [
    currSectionIdx,
    setShowFriendModal,
    setPlayingSectionAudio,
    setWordAudio,
    setCurrSectionIdx,
    sectionAudio,
  ]);

  useEffect(() => {
    if (currImg && currName) {
      const newFriendWord: IFriendWord = {
        audio: currName.audio,
        gender: currName.gender,
        img: currImg,
        text: currName.text
      };

      // add this friend word to the list of friends in state
      createFriend(newFriendWord);
      // update this section's word to be the newly created friend word
      selectWord(newFriendWord, currStory.id, currSectionIdx);

      const wordAudio = new Audio(newFriendWord.audio);

      createAndSetWordAudio(wordAudio);
    }
  },
    [
      createAndSetWordAudio,
      currSectionIdx,
      currStory,
      createFriend,
      currImg,
      currName,
      selectWord,
    ]
  );

  const usableFriends = filterUsableFriends(friends, currStory);

  return (
    <Modal
      title={'Choose a Friend'}
      setModalOpen={(open: boolean) => setShowFriendModal(open)}
    >
      {/* pick old friend column */}
      <div
        className="modal-item separator-right separator-bottom"
        style={{ flex: 1, height: '100%', justifyContent: 'flex-start' }}
      >
        <h1>Choose an Old Friend</h1>
        <div className="wrap-overflow separator-top">
          {usableFriends.length === 0 &&
            <span style={{ margin: '0 20px' }}>
              You have no available friends yet!
            </span>
          }
          {usableFriends.map((friend, idx) => {
            return (
              <Card
                key={`friend_${idx}`}
                onClick={() => {
                  selectWord(friend, currStory.id, currSectionIdx);

                  const wordAudio = new Audio(friend.audio);

                  createAndSetWordAudio(wordAudio);
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
      <div
        className="modal-item separator-right separator-bottom"
        style={{ flex: 1, height: '100%' }}
      >
        <h1>Choose a New Friend</h1>
        <div className="wrap-overflow separator-top">
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
        className="modal-item separator-bottom"
        style={{ flex: 1 }}
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
                style={{ flex: 1, margin: '20px' }}
              >
                <h1>{name.text}</h1>
              </Card>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}

const filterUsableFriends = (friends: IFriendWord[], currStory: IStory): IFriendWord[] => {
  const usableFriends: IFriendWord[] = [];

  for (const friend of friends) {
    let isUsable = true;
    for (const section of currStory.sections) {
      // check if section is already using this friend
      if (
        section.wordCategories === WordCategory.FRIENDS ||
        (section.wordCategories[0] && section.wordCategories[0] === WordCategory.FRIENDS)
      ) {
        if (!section.word) break;
        const { text, img } = section.word;

        if (
          friend.text === text &&
          friend.img === img
        ) {
          isUsable = false;
          break;
        }
      }
    }
    if (isUsable) usableFriends.push(friend);
  }

  return usableFriends;
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