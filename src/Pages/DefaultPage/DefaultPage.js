// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class DefaultPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        This is Default Page
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Large button</Button>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>

      </div>
    );
  }
}

export default DefaultPage