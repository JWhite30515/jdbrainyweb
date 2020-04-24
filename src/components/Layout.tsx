import * as React from 'react';

import { IoIosHome } from 'react-icons/io';
import { Link } from 'react-router-dom';

import '../css/layout.css';
import '../css/common.css';

export interface ILayoutProps {
  header: string;
}

export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
  const { header } = props;

  return (
    <React.Fragment>
      <div className="nav light-green-back">
        <Link to='/'>
          <IoIosHome size={'3em'} className="nav-icon clickable"/>
        </Link>
        <h1>{header}</h1>
      </div>
      {props.children}
    </React.Fragment>
  );
}