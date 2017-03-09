// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { GNB, Footer, SurveyItem } from "../../Components";
import {
  Button,
  Message,
  Card,
  Header,
  Icon,
  Image,
  Input,
  Segment,
  Container
} from 'semantic-ui-react'


class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.moveToUrl = this.moveToUrl.bind(this);
  }

  moveToUrl(url) {
    browserHistory.push(url)
  }

  render() {
    return (
      <div>
        <GNB/>
        <div className="search-container">
          <Input fluid icon="search" placeholder="Search..."/>
        </div>
        <Container>
          <Message info>
            <Header as="h2">아직 Survey2me 회원이 아니신가요?</Header>
            <br/>
            Survey2me에 가입하시면 설문 참여 뿐만 아니라, 다양한 설문 조사를 시작할 수 있습니다.
            지금 바로 가입하여 나만의 설문을 시작해보세요.
            <br/>
            <div>
              <br/>
              <Button basic color='green' onClick={() => this.moveToUrl("/signup")}>가입하기</Button>
            </div>
          </Message>
          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg'/>
                <Card.Header>
                  Steve Sanders
                </Card.Header>
                <Card.Meta>
                  Friends of Elliot
                </Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>Approve</Button>
                  <Button basic color='red'>Decline</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg'/>
                <Card.Header>
                  Steve Sanders
                </Card.Header>
                <Card.Meta>
                  Friends of Elliot
                </Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>Approve</Button>
                  <Button basic color='red'>Decline</Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
          <SurveyItem name="Hello"/>
        </Container>
        <Footer/>
      </div>

    );
  }
}

export default LandingPage