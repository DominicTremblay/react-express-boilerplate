import React, { Component } from 'react';
import {BrowserRouter, Match, Miss} from 'react-router';
import App from './App';
import Main from './Main';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={App} />
          <Match exactly pattern="/route" component={Main} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes;
