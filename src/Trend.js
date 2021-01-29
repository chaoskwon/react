
import React from 'react';

import img11 from 'Img/11.jpg'
import img12 from 'Img/12.jpg'
import img13 from 'Img/13.jpg'

class Trend extends React.Component {
    render() {
        return (
            <section className="trending-posts-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading">
                                <h4>Trending Videos</h4>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-4">
                            <div className="single-post-area mb-80">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src={img11} alt="" />

                                    {/* <!-- Video Duration --> */}
                                    <span className="video-duration">05.03</span>
                                </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                    <a href="single-post.html" className="post-title">Warner Bros. Developing ‘The accountant’ Sequel</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 22</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 16</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 15</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-4">
                            <div className="single-post-area mb-80">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src={img12} alt="" />

                                    {/* <!-- Video Duration --> */}
                                    <span className="video-duration">05.03</span>
                                </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                    <a href="single-post.html" className="post-title">Searching for the 'angel' who held me on Westminste Bridge</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 28</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 17</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-md-4">
                            <div className="single-post-area mb-80">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="post-thumbnail">
                                    <img src={img13} alt="" />

                                    {/* <!-- Video Duration --> */}
                                    <span className="video-duration">05.03</span>
                                </div>

                                {/* <!-- Post Content --> */}
                                <div className="post-content">
                                    <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                    <a href="single-post.html" className="post-title">Love Island star's boyfriend found dead after her funeral</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Trend;