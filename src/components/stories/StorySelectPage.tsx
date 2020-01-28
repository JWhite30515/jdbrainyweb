import * as React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import IRootState from '../../redux/state/rootState';
import { selectStory } from '../../redux/actions/storyActions';
import { IStory } from '../../redux/state/storyState';

import '../../css/common.css';

export interface IStorySelectPageProps {
  stories: IStory[];
  selectStory: (story: IStory) => void;
}

function StorySelectPage(props: IStorySelectPageProps) {
  const { stories } = props;
  return (
    <div>
      <h1>Stories</h1>
      <div className="list-row flex-row">
        {stories.map((story, idx) => {
          // only allow first item for demo purposes
          const disabled = !(idx === 0);
          return (
            <div
              key={`storyId-${idx}`}
              className="card-item flex-column"
            >
              <h2>{story.title}</h2>
              <img
                className={disabled ? 'grayscale card-img' : 'card-img'}
                src={story.img}
                alt={story.title}
              />
              <button
                className={disabled ? 'grayscale' : ''}
                onClick={() => props.selectStory(story)}
              >
                <Link
                  to={'/stories/' + idx}
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

const mapStateToProps = (state: IRootState) => {
  return {
    stories: state.storyState.stories,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectStory: bindActionCreators(selectStory, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StorySelectPage);