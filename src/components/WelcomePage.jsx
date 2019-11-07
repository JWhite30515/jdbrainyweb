import * as React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div>
      <h1>Brainy Make-a-Story Web</h1>
      <h2><button>
        <Link to='/stories'>
          Start
      </Link>
      </button></h2>
    </div>
  )
}