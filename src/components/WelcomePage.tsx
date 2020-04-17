import * as React from 'react';

import { Link } from 'react-router-dom';

import '../css/common.css';

import logoImg from '../static/img/brainy_logo.png';

export default function WelcomePage() {
  return (
    <div className="flex-column welcome-page">
      <h1>Brainy Make-a-Story Web</h1>
      <img src={logoImg} style={{ maxWidth: '50%', maxHeight: '50%' }} alt='logo' />
      <button className="light-green-back">
        <Link to='/stories'>
          Start
        </Link>
      </button>
    </div>
  );
}