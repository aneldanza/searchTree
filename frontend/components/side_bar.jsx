import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    return(
      <nav className='sidebar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <ul className='nav-links'>
              <li id='public'>PUBLIC</li>
              <li><NavLink to={`/questions`}>code with globe icon</NavLink></li>
              <li><NavLink to={`/tags`}>Tags</NavLink></li>
              <li><NavLink to={`/users`}>Users</NavLink></li>
            </ul>
          </li>
        </ul>
      </nav>

    );
  }
}


export default SideBar;
