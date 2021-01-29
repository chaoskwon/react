
import React from 'react';
// import { Link } from 'react-router-dom';

// import Login from './Login';
import Nav from './Nav'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header-area">
                <div className="top-header-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                            {/* <!-- Breaking News Widget --> */}
                                <div className="breaking-news-area d-flex align-items-center">
                                    <div className="news-title">
                                        <p>Breaking News:</p>
                                    </div>
                                    <div id="breakingNewsTicker" className="ticker">
                                        <ul>
                                            <li><a href="single-post.html">10 Things Amazon Echo Can Do</a></li>
                                            <li><a href="single-post.html">Welcome to Colorlib Family.</a></li>
                                            <li><a href="single-post.html">Boys 'doing well' after Thai</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="top-meta-data d-flex align-items-center justify-content-end">
                                    {/* <!-- Top Social Info --> */}
                                    <div className="top-social-info">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    </div>
                                    {/* <!-- Top Search Area --> */}
                                    <div className="top-search-area">
                                        <form action="index.html" method="post">
                                            <input type="search" name="top-search" id="topSearch" placeholder="Search..." />
                                            <button type="submit" className="btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                                        </form>
                                    </div>
                                    {/* <!-- Login --> */}
                                    {/* <a href="#"><i className="fa fa-user" aria-hidden="true"></i></a> */}
                                    <a href="#" onClick={() => {this.props.changePage('/login')}} className="login-btn"><i className="fa fa-user" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Navbar Area --> */}
                <Nav />
            </header>
        );
    }
}

export default Header;