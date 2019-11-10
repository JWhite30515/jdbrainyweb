import * as React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
      
      <Link to='/'>
        <HomeIcon />
      </Link>
      {props.children}
    </div>
  );
}