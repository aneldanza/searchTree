import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    return(
      <nav className='sidebar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <ul>
              <li>Public</li>
              <li><Link to={`/questions`}>code with globe icon</Link></li>
              <li><Link to={`/tags`}>Tags</Link></li>
              <li><Link to={`/users`}>Users</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

    );
  }
}


export default SideBar;
