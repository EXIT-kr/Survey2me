// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

class DefaultPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        This is Default Page
        <Grid columns='equal'>
          <Grid.Column computer={4}>
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default DefaultPage