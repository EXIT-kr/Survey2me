// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { Grid, Input } from 'semantic-ui-react'

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-page">
        <Grid columns='equal'>
          <Grid.Column computer={4}>
            <div className="login-left">
              res
            </div>
            <Input fluid placeholder="ID" type="text"/>
            <Input fluid placeholder="E-mail" type="email"/>
            <Input fluid placeholder="Password" type="password"/>


          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;