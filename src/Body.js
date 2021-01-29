
import React from 'react';
// import { Link } from 'react-router-dom';

import HeroArea from './HeroArea';
import Trend from './Trend';
import Post from './Post';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        *************{this.props.page}*************
        <HeroArea />
        <Trend></Trend>
        <Post></Post>
      </div>
    );
  }
}

export default Body;