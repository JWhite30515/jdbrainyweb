import * as React from 'react';

import { Link } from 'react-router-dom';

import { stories } from '../../constants/stories';

export default function StoriesPage() {
  return (
    <div>
      <h1>Stories</h1>
      {stories.map((story) => {
        return (
          <div
            key={`storyId-${story.id}`}
            style={{ borderStyle: 'solid', borderWidth: 'medium' }}
          >
            <h1>{story.title}</h1>
              <button disabled>
              <Link
                to={'/stories/' + story.id}
              >
                Start story
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
}