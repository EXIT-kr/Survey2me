// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { Profile } from '../';

import {
  Button,
  Message,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

// Setting for Props
const defaultProps = {
  image: '',
  name: '',
};
const propTypes = {};

class SurveyItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, name } = this.props;
    return (
      <Card className="survey-item">
        {image != ''? <Image src={image}/> : null}
        <Card.Content>
          <Profile name={name}/>
          <Card.Meta>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>찬성</Button>
            <Button basic color='red'>반대</Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

SurveyItem.defaultProps = defaultProps;
SurveyItem.propTypes = propTypes;

export default SurveyItem