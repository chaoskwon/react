import React from 'react';

import img1 from 'Img/1.jpg';
import img2 from 'Img/2.jpg';
import img7 from 'Img/7.jpg';
import img12 from 'Img/12.jpg';
import img13 from 'Img/13.jpg';
import img14 from 'Img/14.jpg';
import img15 from 'Img/15.jpg';
import img16 from 'Img/16.jpg';
import img17 from 'Img/17.jpg';
import img18 from 'Img/18.jpg';
import img19 from 'Img/19.jpg';
import img20 from 'Img/20.jpg';
import img21 from 'Img/21.jpg';
import img22 from 'Img/22.jpg';
import img23 from 'Img/23.jpg';
import img24 from 'Img/24.jpg';
import img25 from 'Img/25.jpg';
import img26 from 'Img/26.jpg';
import img27 from 'Img/27.jpg';
import img28 from 'Img/28.jpg';
import img29 from 'Img/29.jpg';
import img35 from 'Img/35.jpg';
import img36 from 'Img/36.jpg';
import img37 from 'Img/37.jpg';
import img38 from 'Img/38.jpg';
import imgAdd from 'Img/add.png';

class Post extends React.Component {
    render() {
        return (
            <section className="vizew-post-area mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <div className="all-posts-area">
                                {/* <!-- Section Heading --> */}
                                <div className="section-heading style-2">
                                    <h4>Featured Videos</h4>
                                    <div className="line"></div>
                                </div>

                                {/* <!-- Featured Post Slides --> */}
                                <div className="featured-post-slides owl-carousel mb-30">
                                {/* <div> */}
                                    {/* <!-- Single Feature Post --> */}
                                    <div className="single-feature-post video-post bg-img" style={{ backgroundImage: `url(${img14})` }}>
                                        {/* <!-- Play Button --> */}
                                        <a href="video-post.html" className="btn play-btn"><i className="fa fa-play" aria-hidden="true"></i></a>

                                        {/* <!-- Post Content --> */}
                                        <div className="post-content">
                                            <a href="#" className="post-cata">Sports</a>
                                            <a href="single-post.html" className="post-title">Reunification of migrant toddlers, parents should be completed Thursday</a>
                                            <div className="post-meta d-flex">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 25</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 25</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 25</a>
                                            </div>
                                        </div>

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>

                                    {/* <!-- Single Feature Post --> */}
                                    <div className="single-feature-post video-post bg-img" style={{ backgroundImage: `url(${img7})`}}>
                                        {/* <!-- Play Button --> */}
                                        <a href="video-post.html" className="btn play-btn"><i className="fa fa-play" aria-hidden="true"></i></a>

                                        {/* <!-- Post Content --> */}
                                        <div className="post-content">
                                            <a href="#" className="post-cata">Sports</a>
                                            <a href="single-post.html" className="post-title">Reunification of migrant toddlers, parents should be completed Thursday</a>
                                            <div className="post-meta d-flex">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 25</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 25</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 25</a>
                                            </div>
                                        </div>

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* <!-- Single Blog Post --> */}
                                    <div className="col-12 col-md-6">
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
                                    <div className="col-12 col-md-6">
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

                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        {/* <!-- Section Heading --> */}
                                        <div className="section-heading style-2">
                                            <h4>Sport Videos</h4>
                                            <div className="line"></div>
                                        </div>

                                        {/* <!-- Sports Video Slides --> */}
                                        <div className="sport-video-slides owl-carousel mb-50">
                                            {/* <!-- Single Blog Post --> */}
                                            <div className="single-post-area">
                                                {/* <!-- Post Thumbnail --> */}
                                                <div className="post-thumbnail">
                                                    <img src={img15} alt="" />

                                                    {/* <!-- Video Duration --> */}
                                                    <span className="video-duration">05.03</span>
                                                </div>

                                                {/* <!-- Post Content --> */}
                                                <div className="post-content">
                                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                                    <a href="single-post.html" className="post-title">Searching for the 'angel' who held me on Westminster Bridge</a>
                                                    <div className="post-meta d-flex">
                                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- Single Blog Post --> */}
                                            <div className="single-post-area">
                                                {/* <!-- Post Thumbnail --> */}
                                                <div className="post-thumbnail">
                                                    <img src={img13} alt="" />

                                                    {/* <!-- Video Duration --> */}
                                                    <span className="video-duration">05.03</span>
                                                </div>

                                                {/* <!-- Post Content --> */}
                                                <div className="post-content">
                                                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                                    <a href="single-post.html" className="post-title">Searching for the 'angel' who held me on Westminster Bridge</a>
                                                    <div className="post-meta d-flex">
                                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        {/* <!-- Section Heading --> */}
                                        <div className="section-heading style-2">
                                            <h4>Business Videos</h4>
                                            <div className="line"></div>
                                        </div>

                                        {/* <!-- Business Video Slides --> */}
                                        <div className="business-video-slides owl-carousel mb-50">
                                            {/* <!-- Single Blog Post --> */}
                                            <div className="single-post-area">
                                                {/* <!-- Post Thumbnail --> */}
                                                <div className="post-thumbnail">
                                                    <img src={img17} alt="" />

                                                    {/* <!-- Video Duration --> */}
                                                    <span className="video-duration">05.03</span>
                                                </div>

                                                {/* <!-- Post Content --> */}
                                                <div className="post-content">
                                                    <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                                    <a href="single-post.html" className="post-title">Full article Prince Charles's 'urgent' global research</a>
                                                    <div className="post-meta d-flex">
                                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- Single Blog Post --> */}
                                            <div className="single-post-area">
                                                {/* <!-- Post Thumbnail --> */}
                                                <div className="post-thumbnail">
                                                    <img src={img13} alt="" />

                                                    {/* <!-- Video Duration --> */}
                                                    <span className="video-duration">05.03</span>
                                                </div>

                                                {/* <!-- Post Content --> */}
                                                <div className="post-content">
                                                    <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                                    <a href="single-post.html" className="post-title">Full article Prince Charles's 'urgent' global research</a>
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

                                <div className="row mb-30">
                                    {/* <!-- Single Blog Post --> */}
                                    <div className="col-12 col-lg-6">
                                        <div className="single-blog-post style-3 d-flex mb-50">
                                            <div className="post-thumbnail">
                                                <img src={img16} alt="" />
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">Epileptic boy's cannabis let through border</a>
                                                <div className="post-meta d-flex justify-content-between">
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 16</a>
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 26</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 17</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="col-12 col-lg-6">
                                        <div className="single-blog-post style-3 d-flex mb-50">
                                            <div className="post-thumbnail">
                                                <img src={img18} alt="" />
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">Paramedics 'drilled into boat death woman'</a>
                                                <div className="post-meta d-flex justify-content-between">
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 16</a>
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 26</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 17</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="col-12 col-lg-6">
                                        <div className="single-blog-post style-3 d-flex mb-50">
                                            <div className="post-thumbnail">
                                                <img src={img19} alt="" />
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">Tory vice-chairs quit over PM's Brexit plan</a>
                                                <div className="post-meta d-flex justify-content-between">
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 16</a>
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 26</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 17</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="col-12 col-lg-6">
                                        <div className="single-blog-post style-3 d-flex mb-50">
                                            <div className="post-thumbnail">
                                                <img src={img20} alt="" />
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">Do This One Simple Action for an Absolutely</a>
                                                <div className="post-meta d-flex justify-content-between">
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 16</a>
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 26</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 17</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Section Heading --> */}
                                <div className="section-heading style-2">
                                    <h4>Latest News</h4>
                                    <div className="line"></div>
                                </div>

                                {/* <!-- Featured Post Slides --> */}
                                <div className="featured-post-slides owl-carousel mb-30">
                                    {/* <!-- Single Feature Post --> */}
                                    <div className="single-feature-post video-post bg-img" style={{ backgroundImage: `url(${img14})`}}>
                                        {/* <!-- Play Button --> */}
                                        <a href="video-post.html" className="btn play-btn"><i className="fa fa-play" aria-hidden="true"></i></a>

                                        {/* <!-- Post Content --> */}
                                        <div className="post-content">
                                            <a href="#" className="post-cata">Sports</a>
                                            <a href="single-post.html" className="post-title">Reunification of migrant toddlers, parents should be completed Thursday</a>
                                            <div className="post-meta d-flex">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 25</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 25</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 25</a>
                                            </div>
                                        </div>

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>

                                    {/* <!-- Single Feature Post --> */}
                                    <div className="single-feature-post video-post bg-img" style={{ backgroundImage: `url(${img7})`}}>
                                        {/* <!-- Play Button --> */}
                                        <a href="video-post.html" className="btn play-btn"><i className="fa fa-play" aria-hidden="true"></i></a>

                                        {/* <!-- Post Content --> */}
                                        <div className="post-content">
                                            <a href="#" className="post-cata">Sports</a>
                                            <a href="single-post.html" className="post-title">Reunification of migrant toddlers, parents should be completed Thursday</a>
                                            <div className="post-meta d-flex">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 25</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 25</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 25</a>
                                            </div>
                                        </div>

                                        {/* <!-- Video Duration --> */}
                                        <span className="video-duration">05.03</span>
                                    </div>
                                </div>

                                {/* <!-- Single Post Area --> */}
                                <div className="single-post-area mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-lg-6">
                                            {/* <!-- Post Thumbnail --> */}
                                            <div className="post-thumbnail">
                                                <img src={img21} alt="" />

                                                {/* <!-- Video Duration --> */}
                                                <span className="video-duration">05.03</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            {/* <!-- Post Content --> */}
                                            <div className="post-content mt-0">
                                                <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                                <a href="single-post.html" className="post-title mb-2">May fights on after Johnson savages Brexit approach</a>
                                                <div className="post-meta d-flex align-items-center mb-2">
                                                    <a href="#" className="post-author">By Jane</a>
                                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                                    <a href="#" className="post-date">Sep 08, 2018</a>
                                                </div>
                                                <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.</p>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Single Post Area --> */}
                                <div className="single-post-area mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-lg-6">
                                            {/* <!-- Post Thumbnail --> */}
                                            <div className="post-thumbnail">
                                                <img src={img22} alt="" />

                                                {/* <!-- Video Duration --> */}
                                                <span className="video-duration">05.03</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            {/* <!-- Post Content --> */}
                                            <div className="post-content mt-0">
                                                <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                                <a href="single-post.html" className="post-title mb-2">Thailand cave rescue: Boys 'doing well' after spending night</a>
                                                <div className="post-meta d-flex align-items-center mb-2">
                                                    <a href="#" className="post-author">By Jane</a>
                                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                                    <a href="#" className="post-date">Sep 08, 2018</a>
                                                </div>
                                                <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.</p>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Single Post Area --> */}
                                <div className="single-post-area mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-lg-6">
                                            {/* <!-- Post Thumbnail --> */}
                                            <div className="post-thumbnail">
                                                <img src={img23} alt="" />

                                                {/* <!-- Video Duration --> */}
                                                <span className="video-duration">05.03</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            {/* <!-- Post Content --> */}
                                            <div className="post-content mt-0">
                                                <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                                                <a href="single-post.html" className="post-title mb-2">Theresa May battles Brexiteer backlash amid disquiet</a>
                                                <div className="post-meta d-flex align-items-center mb-2">
                                                    <a href="#" className="post-author">By Jane</a>
                                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                                    <a href="#" className="post-date">Sep 08, 2018</a>
                                                </div>
                                                <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.</p>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Single Post Area --> */}
                                <div className="single-post-area mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-lg-6">
                                            {/* <!-- Post Thumbnail --> */}
                                            <div className="post-thumbnail">
                                                <img src={img24} alt="" />
                                                {/* <!-- Video Duration --> */}
                                                <span className="video-duration">05.03</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            {/* <!-- Post Content --> */}
                                            <div className="post-content mt-0">
                                                <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                                                <a href="single-post.html" className="post-title mb-2">Theresa May warned Brexit strategy 'risks putting Jeremy Corbyn</a>
                                                <div className="post-meta d-flex align-items-center mb-2">
                                                    <a href="#" className="post-author">By Jane</a>
                                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                                    <a href="#" className="post-date">Sep 08, 2018</a>
                                                </div>
                                                <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.</p>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="sidebar-area">
                                {/* <!-- ***** Single Widget ***** --> */}
                                <div className="single-widget followers-widget mb-50">
                                    <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span className="counter">198</span><span>Fan</span></a>
                                    <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i><span className="counter">220</span><span>Followers</span></a>
                                    <a href="#" className="google"><i className="fa fa-google" aria-hidden="true"></i><span className="counter">140</span><span>Subscribe</span></a>
                                </div>

                                {/* <!-- ***** Single Widget ***** --> */}
                                <div className="single-widget latest-video-widget mb-50">
                                    {/* <!-- Section Heading --> */}
                                    <div className="section-heading style-2 mb-30">
                                        <h4>Latest Video</h4>
                                        <div className="line"></div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-post-area mb-30">
                                        {/* <!-- Post Thumbnail --> */}
                                        <div className="post-thumbnail">
                                            <img src={img13} alt="" />

                                            {/* <!-- Video Duration --> */}
                                            <span className="video-duration">05.03</span>
                                        </div>

                                        {/* <!-- Post Content --> */}
                                        <div className="post-content">
                                            <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                                            <a href="single-post.html" className="post-title">Full article Prince Charles's 'urgent' global research</a>
                                            <div className="post-meta d-flex">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-blog-post d-flex">
                                        <div className="post-thumbnail">
                                            <img src={img1} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <a href="single-post.html" className="post-title">DC Shoes: gymkhana five; the making of</a>
                                            <div className="post-meta d-flex justify-content-between">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 29</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 08</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 23</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-blog-post d-flex">
                                        <div className="post-thumbnail">
                                            <img src={img2} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <a href="single-post.html" className="post-title">Sweet Yummy Chocolatea Tea</a>
                                            <div className="post-meta d-flex justify-content-between">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 17</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 33</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 26</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-blog-post d-flex">
                                        <div className="post-thumbnail">
                                            <img src={img35} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <a href="single-post.html" className="post-title">How To Make Orange Chicken Recipe?</a>
                                            <div className="post-meta d-flex justify-content-between">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 11</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 21</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- ***** Single Widget ***** --> */}
                                <div className="single-widget add-widget mb-50">
                                    <a href="#"><img src={imgAdd} alt="" /></a>
                                </div>

                                {/* <!-- ***** Sidebar Widget ***** --> */}
                                <div className="single-widget youtube-channel-widget mb-50">
                                    {/* <!-- Section Heading --> */}
                                    <div className="section-heading style-2 mb-30">
                                        <h4>Hot Channels</h4>
                                        <div className="line"></div>
                                    </div>

                                    {/* <!-- Single YouTube Channel --> */}
                                    <div className="single-youtube-channel d-flex align-items-center">
                                        <div className="youtube-channel-thumbnail">
                                            <img src={img25} alt="" />
                                        </div>
                                        <div className="youtube-channel-content">
                                            <a href="single-post.html" className="channel-title">Music Channel</a>
                                            <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true"></i> Subscribe</a>
                                        </div>
                                    </div>

                                    {/* <!-- Single YouTube Channel --> */}
                                    <div className="single-youtube-channel d-flex align-items-center">
                                        <div className="youtube-channel-thumbnail">
                                            <img src={img26} alt="" />
                                        </div>
                                        <div className="youtube-channel-content">
                                            <a href="single-post.html" className="channel-title">Trending Channel</a>
                                            <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true"></i> Subscribe</a>
                                        </div>
                                    </div>

                                    {/* <!-- Single YouTube Channel --> */}
                                    <div className="single-youtube-channel d-flex align-items-center">
                                        <div className="youtube-channel-thumbnail">
                                            <img src={img27} alt="" />
                                        </div>
                                        <div className="youtube-channel-content">
                                            <a href="single-post.html" className="channel-title">Travel Channel</a>
                                            <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true"></i> Subscribe</a>
                                        </div>
                                    </div>

                                    {/* <!-- Single YouTube Channel --> */}
                                    <div className="single-youtube-channel d-flex align-items-center">
                                        <div className="youtube-channel-thumbnail">
                                            <img src={img28} alt="" />
                                        </div>
                                        <div className="youtube-channel-content">
                                            <a href="single-post.html" className="channel-title">Sport Channel</a>
                                            <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true"></i> Subscribe</a>
                                        </div>
                                    </div>

                                    {/* <!-- Single YouTube Channel --> */}
                                    <div className="single-youtube-channel d-flex align-items-center">
                                        <div className="youtube-channel-thumbnail">
                                            <img src={img29} alt="" />
                                        </div>
                                        <div className="youtube-channel-content">
                                            <a href="single-post.html" className="channel-title">TV Show Channel</a>
                                            <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true"></i> Subscribe</a>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- ***** Single Widget ***** --> */}
                                <div className="single-widget newsletter-widget mb-50">
                                    {/* <!-- Section Heading --> */}
                                    <div className="section-heading style-2 mb-30">
                                        <h4>Newsletter</h4>
                                        <div className="line"></div>
                                    </div>
                                    <p>Subscribe our newsletter gor get notification about new updates, information discount, etc.</p>
                                    {/* <!-- Newsletter Form --> */}
                                    <div className="newsletter-form">
                                        <form action="#" method="post">
                                            <input type="email" name="nl-email" className="form-control mb-15" id="emailnl" placeholder="Enter your email" />
                                            <button type="submit" className="btn vizew-btn w-100">Subscribe</button>
                                        </form>
                                    </div>
                                </div>

                                {/* <!-- ***** Single Widget ***** --> */}
                                <div className="single-widget mb-50">
                                    {/* <!-- Section Heading --> */}
                                    <div className="section-heading style-2 mb-30">
                                        <h4>Most Viewed Playlist</h4>
                                        <div className="line"></div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-blog-post d-flex">
                                        <div className="post-thumbnail">
                                            <img src={img1} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <a href="single-post.html" className="post-title">DC Shoes: gymkhana five; the making of</a>
                                            <div className="post-meta d-flex justify-content-between">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-blog-post d-flex">
                                        <div className="post-thumbnail">
                                            <img src={img2} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <a href="single-post.html" className="post-title">How To Make Orange Chicken Recipe?</a>
                                            <div className="post-meta d-flex justify-content-between">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-blog-post d-flex">
                                        <div className="post-thumbnail">
                                            <img src={img36} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <a href="single-post.html" className="post-title">Sweet Yummy Chocolate in the</a>
                                            <div className="post-meta d-flex justify-content-between">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-blog-post d-flex">
                                        <div className="post-thumbnail">
                                            <img src={img37} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <a href="single-post.html" className="post-title">DC Shoes: gymkhana five; the making of</a>
                                            <div className="post-meta d-flex justify-content-between">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Blog Post --> */}
                                    <div className="single-blog-post d-flex">
                                        <div className="post-thumbnail">
                                            <img src={img38} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <a href="single-post.html" className="post-title">How To Make Orange Chicken Recipe?</a>
                                            <div className="post-meta d-flex justify-content-between">
                                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                            </div>
                                        </div>
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

export default Post;