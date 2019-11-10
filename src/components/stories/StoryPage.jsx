import * as React from 'react';

import { useHistory, useLocation, useParams } from 'react-router-dom';

import { stories } from '../../constants/stories';

export default function StoryPage() {
  // get param of current path, story/:id
  const params = useParams();
  const history = useHistory();
  const location = useLocation();

  const story = stories.find(story => story.id === Number(params.id));

  if (location.state && location.state.fromQuizPage) {
    return (
      <div>

      </div>
    );
  }

  return (
    <div>
      <h1>{story.title}</h1>
      <audio
        id="storyAudio"
        controls
        autoPlay
        type="audio/mp3"
        src={story.audio}
        onEnded={() => {
          history.push({
            pathname: '/categories',
            state: { fromStoryPage: true, storyId: story.id }
          });
        }}
      />
    </div>
  );
}