// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import {
  Button,
  Message,
  Card,
  Icon,
  Image,
  Header,
} from 'semantic-ui-react'

// Setting for Props
const defaultProps = {
  avatar: '',
  name: '',
};
const propTypes = {};

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, avatar } = this.props;

    return (
      <div>
        <Image floated='left' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg'/>
        <Header style={{padding: '0px', margin: '0px'}}>
          {name}
        </Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
      </div>
    );
  }
}

Profile.defaultProps = defaultProps;
Profile.propTypes = propTypes;

export default Profile