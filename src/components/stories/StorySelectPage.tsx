import * as React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import IRootState from '../../redux/state/rootState';
import { IStory } from '../../redux/state/storyState';

import Card from '../common/Card';
import '../../css/common.css';

export interface IStorySelectPageProps {
  stories: IStory[];
}

function StorySelectPage(props: IStorySelectPageProps) {
  const { stories } = props;
  return (
    <React.Fragment>
      <h1>Stories</h1>
      <div className="list-row flex-row">
        {stories.map((story, idx) => {
          // only allow first item for demo purposes
          const disabled = !(idx === 0);
          return (
            <Card key={`story_card_${idx}`}>
              <h2>{story.title}</h2>
              <img
                className={disabled ? 'grayscale card-img' : 'card-img'}
                src={story.img}
                alt={story.title}
              />
              <button
                className={disabled ? 'grayscale' : ''}
              >
                <Link
                  to={'/stories/' + story.id}
                  className={disabled ? 'disabled-link' : ''}
                >
                  Start story
                </Link>
              </button>
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    stories: state.storyState.stories,
  }
}

export default connect(
  mapStateToProps,
  () => ({})
)(StorySelectPage)