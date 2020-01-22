import * as React from 'react';

import { Link } from 'react-router-dom';

import { stories } from '../../constants/stories';

import '../../css/common.css';

export default function StoriesPage() {
  return (
    <div>
      <h1>Stories</h1>
      <div className="list-row flex-row">
        {stories.map((story, idx) => {
          // only allow first item for demo purposes
          const disabled = !(idx === 0);
          return (
            <div
              key={`storyId-${story.id}`}
              className="card-item flex-column"
            >
              <h2>{story.title}</h2>
              <img
                className={disabled ? 'grayscale card-img' : 'card-img'}
                src={story.img}
                alt={story.title}
              />
              <button className={disabled ? 'grayscale' : ''}>
                <Link
                  to={'/stories/' + story.id}
                  className={disabled ? 'disabled-link' : ''}
                >
                  Start story
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}