// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class GNB extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gnb">
        <div className="menu-list">
          <ul>
            <li>Menu1</li>
            <li>Menu2</li>
            <li>Menu3</li>
          </ul>
        </div>
        <h1 className="title">test</h1>
      </div>
    );
  }
}

export default GNB