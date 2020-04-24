import * as React from 'react';

import '../../css/common.css';
import '../../css/quiz.css';

export interface ICardProps {
  children: any;
  onClick?: () => void;
  clickDisabled?: boolean;
  isQuizCard?: boolean;
  style?: object;
  selected?: boolean;
  disabled?: boolean;
  storyCard?: boolean;
}

export default function Card(props: ICardProps) {
  // TODO: this can be fixed by having ICardProps extend ReactHTMLElement<DivElement>
  const {
    isQuizCard,
    onClick,
    clickDisabled,
    selected,
    style,
    disabled,
    storyCard
  } = props;

  let className = 'card-item flex-column';

  if (isQuizCard) className += ' quiz-item';
  if (onClick && !(clickDisabled === true)) className += ' clickable';
  if (selected) className += ' card-selected';
  if (disabled) className += ' disabled-link';
  if (storyCard) className += ' story-card';

  return (
    <div
      className={className}
      onClick={onClick ? () => onClick() : undefined}
      style={style ? style : {}}
    >
      {props.children}
    </div>
  )
}