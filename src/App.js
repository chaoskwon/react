
import React from 'react';
// import { Route } from 'react-router-dom';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import 'Css/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curPage : "/"
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState(curPage) {
    this.setState({curPage}
      , console.log("****", this.state.curPage));
  }

  render() {
    return (
      <div className="App">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* <Header /> */}
        <Header curPage={this.state.curPage} changePage={this.changeState}/>
        <Body page={this.state.curPage} changePage={this.changeState}/>
        <Footer />
      </div>
    )
  };
}

export default App;