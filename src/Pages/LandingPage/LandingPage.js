// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import StackGrid from "react-stack-grid";
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
          <StackGrid
            columnWidth={250}
            gutterWidth={20}
            gutterHeight={20}
          >
            <SurveyItem name="Hello"/>
            <SurveyItem name="Hello"/>
            <SurveyItem name="Hello" image="http://semantic-ui.com/images/avatar/large/elliot.jpg"/>
            <SurveyItem name="Hello"/>
            <SurveyItem name="Hello" image="https://pbs.twimg.com/media/C6UcYacVUAEikDF.jpg"/>
            <SurveyItem name="Hello" image="https://pbs.twimg.com/media/C6ZgiX2XMAMrakf.jpg"/>
            <SurveyItem name="Hello"/>
            <SurveyItem name="Hello"/>
            <SurveyItem name="Hello"/>
          </StackGrid>

        </Container>
        <Footer/>
      </div>

    );
  }
}

export default LandingPage