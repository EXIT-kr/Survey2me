// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { GNB, Footer, SurveyItem, UrlLink } from "../../Components";
import {
  Button,
  Message,
  Card,
  Header,
  Icon,
  Image,
  Input,
  Segment,
  Container,
  Grid,
  Statistic,
} from 'semantic-ui-react'

const items = [
  { label: '설문', value: '22' },
  { label: '참여', value: '1,232' },
];

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.moveToUrl = this.moveToUrl.bind(this);
  }

  moveToUrl(url) {
    browserHistory.push(url)
  }

  render() {
    return (
      <div className="profile-page">
        <GNB/>
        <div className="search-container">
          <Grid columns='equal'>
            <Grid.Column computer={1}/>
            <Grid.Column computer={10}>
              <Image className="profile-img"
                     src="http://semantic-ui.com/images/avatar/large/elliot.jpg"
                     size='small' shape='rounded' floated="left"/>
              <Header as="h1" className="profile-name">
                Name
                <Header.Subheader>
                  @Username
                </Header.Subheader>
              </Header>

              <p className="bio">Here is Bio Section</p>
              <UrlLink text="http://localhost"/>
            </Grid.Column>
            <Grid.Column computer={5}>
              <Statistic.Group items={items} color='blue' />
            </Grid.Column>
          </Grid>
        </div>
        <Container>

        </Container>
        <Footer/>
      </div>

    );
  }
}

export default ProfilePage;