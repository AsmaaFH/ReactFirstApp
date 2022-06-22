
import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';


class About extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h2>About Page</h2>
          <div className="col-3">
            <ul>
              <li className="col-3">
                <Link to="team">Team</Link>
              </li>
              <li className="col">
                <Link to="company">Company</Link>
              </li>
            </ul>
          </div>
          <div className="col">
          <Outlet />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About;