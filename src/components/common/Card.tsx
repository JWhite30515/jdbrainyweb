import * as React from 'react';

import '../../css/common.css';
import '../../css/quiz.css';

export interface ICardProps {
  children: any;
  onClick?: () => void;
  isQuizCard?: boolean;
  style?: object;
  selected?: boolean;
  disabled?: boolean;
}

export default function Card(props: ICardProps) {
  const { isQuizCard, onClick, selected, style, disabled } = props;

  let className = 'card-item flex-column';

  if (isQuizCard) className += ' quiz-item';
  if (onClick) className += ' clickable';
  if (selected) className += ' card-selected';
  if (disabled) className += ' disabled-link';

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