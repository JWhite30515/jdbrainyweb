import * as React from 'react';

import { IoIosHome } from 'react-icons/io';
import { Link } from 'react-router-dom';

import '../css/layout.css';
import '../css/common.css';

export default function Layout(props) {
  return (
    <div>
      <div className="nav light-green-back">
        <Link to='/'>
          <IoIosHome size={'3em'} className="nav-icon clickable"/>
        </Link>
      </div>
      {props.children}
    </div>
  );
}