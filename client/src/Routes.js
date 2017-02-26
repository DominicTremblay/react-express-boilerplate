import React, { Component } from 'react';
import {BrowserRouter, Match, Miss} from 'react-router';
import App from './App';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={App} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes;
