import React, { useEffect, useState } from 'react';

import { useHistory, useLocation, useParams } from 'react-router-dom';
import Typist from 'react-typist';

import santaAudio_2 from '../../static/audio/stories/santa/SPS_3_2.wav';

import { stories } from '../../constants/stories';

import '../../css/common.css';
import '../../css/story.css';

export default function StoryPage() {
  // get param of current path, story/:id
  const params = useParams();
  const history = useHistory();
  const location = useLocation();

  const [audioEnded, setAudioEnded] = useState(false);
  const [textEnded, setTextEnded] = useState(false);
  useEffect(() => {
    if (audioEnded && textEnded) {
      history.push({
        pathname: '/categories',
        state: { fromStoryPage: true, storyId: story.id }
      });
    }
  })

  const story = stories.find(story => story.id === Number(params.id));

  if (
    location.state &&
    location.state.fromQuizPage &&
    location.state.selectedWord
  ) {
    return (
      <div className="flex-column">
        <h1>{story.title}</h1>
        <div className="parent">
          <img
            className="image1"
            style={{ maxWidth: '300px', margin: '20px 0'}}
            src={story.img}
            alt={story.title}
          />
          <img
            className="image2"
            src={location.state.selectedWord.img}
            style={{ maxWidth: '50px' }}
            alt={'alt text'}
          />
        </div>
        <audio
          id="storyAudio"
          // controls
          autoPlay
          type="audio/mp3"
          src={santaAudio_2}
          // onEnded={() => setAudioEnded(true)}
        />
        <div className="card-item story-text">  
          {story.initialText}
          <b>{location.state.selectedWord.name}</b>
          <Typist
            avgTypingDelay={75}
            // onTypingDone={() => setTextEnded(true)}
          >
            wanted first a soft fluffy stuffed...
          </Typist>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-column">
      <h1>{story.title}</h1>
      <img
        style={{ maxWidth: '300px', margin: '20px 0'}}
        src={story.img}
        alt={story.title}
      />
      <audio
        id="storyAudio"
        // controls
        autoPlay
        type="audio/mp3"
        src={story.audio}
        onEnded={() => setAudioEnded(true)}
      />
      <div className="card-item story-text">   
        <Typist
          avgTypingDelay={75}
          startDelay={4000}
          onTypingDone={() => setTextEnded(true)}
        >
          {story.initialText + '___'}
        </Typist>
      </div>
    </div>
  );
}