// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react'

class GNB extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gnb">
        <div className="menu-list">
          <ul>
            <li><Button basic inverted>회원가입</Button></li>
            <li><Button basic inverted>로그인</Button></li>
          </ul>
        </div>
        <Grid columns='equal'>
          <Grid.Column desktop={8} mobile={8}>
            <h1 className="title">Survey 2 me</h1>
            <p className="sub-title">이 세상의 모든 설문, 당신의 설문 조사를 도와드립니다.</p>
          </Grid.Column>
          <Grid.Column desktop={8} textAlign='center'>
            <Button primary>새로운 설문 시작하기</Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default GNB