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
      <div className="flex-row-wrap-container space-between list-row">
        {stories.map((story, idx) => {
          return (
            <Card storyCard style={{ flex: '33%' }} key={`story_card_${idx}`}>
              <h2>{story.title}</h2>
              <img
                className="card-img"
                src={story.parts[0] ? story.parts[0].backgroundImg : null}
                alt={story.title}
              />
              <button>
                <Link
                  to={'/stories/' + story.id}
                  className="card-img"
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