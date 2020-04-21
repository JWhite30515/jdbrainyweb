import * as React from 'react';

import { IoIosHome } from 'react-icons/io';
// import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';

import '../css/layout.css';
import '../css/common.css';

export default function Layout(props) {
  // const history = useHistory();
  return (
    <React.Fragment>
      <div className="nav light-green-back">
        {/* <IoMdArrowRoundBack
          size={'3em'}
          onClick={()=> history.goBack() }
          className="nav-icon clickable"
        /> */}
        <Link to='/'>
          <IoIosHome size={'3em'} className="nav-icon clickable"/>
        </Link>
      </div>
      {props.children}
    </React.Fragment>
  );
}