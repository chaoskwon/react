
import React from 'react';

import log from '../public/logo.png';

class Nav extends React.Component {
  render() {
    return (
      <div className="vizew-main-menu" id="sticker">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            {/* <!-- Menu --> */}
            <nav className="classy-navbar justify-content-between" id="vizewNav">
              {/* <!-- Nav brand --> */}
              <a href="index.html" className="nav-brand"><img src={log} alt="" /></a>

              {/* <!-- Navbar Toggler --> */}
              <div className="classy-navbar-toggler">
                  <span className="navbarToggler"><span></span><span></span><span></span></span>
              </div>

              <div className="classy-menu">
                {/* <!-- Close Button --> */}
                <div className="classycloseIcon">
                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                </div>

                {/* <!-- Nav Start --> */}
                <div className="classynav">
                  <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="archive-list.html">Archives</a></li>
                    <li><a href="#">Pages</a>
                      <ul className="dropdown">
                        <li><a href="index.html">- Home</a></li>
                        <li><a href="archive-list.html">- Archive List</a></li>
                        <li><a href="archive-grid.html">- Archive Grid</a></li>
                        <li><a href="single-post.html">- Single Post</a></li>
                        <li><a href="video-post.html">- Single Video Post</a></li>
                        <li><a href="contact.html">- Contact</a></li>
                        <li><a href="typography.html">- Typography</a></li>
                        <li><a href="login.html">- Login</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Features</a>
                      <div className="megamenu">
                        <ul className="single-mega cn-col-4">
                          <li><a href="index.html">- Home</a></li>
                          <li><a href="archive-list.html">- Archive List</a></li>
                          <li><a href="archive-grid.html">- Archive Grid</a></li>
                          <li><a href="single-post.html">- Single Post</a></li>
                          <li><a href="video-post.html">- Single Video Post</a></li>
                          <li><a href="contact.html">- Contact</a></li>
                          <li><a href="typography.html">- Typography</a></li>
                          <li><a href="login.html">- Login</a></li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li><a href="index.html">- Home</a></li>
                          <li><a href="archive-list.html">- Archive List</a></li>
                          <li><a href="archive-grid.html">- Archive Grid</a></li>
                          <li><a href="single-post.html">- Single Post</a></li>
                          <li><a href="video-post.html">- Single Video Post</a></li>
                          <li><a href="contact.html">- Contact</a></li>
                          <li><a href="typography.html">- Typography</a></li>
                          <li><a href="login.html">- Login</a></li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li><a href="index.html">- Home</a></li>
                          <li><a href="archive-list.html">- Archive List</a></li>
                          <li><a href="archive-grid.html">- Archive Grid</a></li>
                          <li><a href="single-post.html">- Single Post</a></li>
                          <li><a href="video-post.html">- Single Video Post</a></li>
                          <li><a href="contact.html">- Contact</a></li>
                          <li><a href="typography.html">- Typography</a></li>
                          <li><a href="login.html">- Login</a></li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li><a href="index.html">- Home</a></li>
                          <li><a href="archive-list.html">- Archive List</a></li>
                          <li><a href="archive-grid.html">- Archive Grid</a></li>
                          <li><a href="single-post.html">- Single Post</a></li>
                          <li><a href="video-post.html">- Single Video Post</a></li>
                          <li><a href="contact.html">- Contact</a></li>
                          <li><a href="typography.html">- Typography</a></li>
                          <li><a href="login.html">- Login</a></li>
                        </ul>
                      </div>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;