import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" className='logo'>{`{ dj_algorhythm }`}</Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/events'>Past Events</Link>
        </li>
        <li>
          <Link to='/inquiry'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
