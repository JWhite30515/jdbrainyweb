import * as React from 'react';
import { Link } from 'react-router-dom';

import '../css/common.css';

export default function WelcomePage() {
  return (
    <div className="flex-column welcome-page" style={{ marginTop: '200px' }}>
      <h1>Brainy Make-a-Story Web</h1>
      <button className="light-green-back">
        <Link to='/stories'>
          Start
        </Link>
      </button>
    </div>
  )
}