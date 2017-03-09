// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

// Setting for Props
const defaultProps = {
  text: "",
};
const propTypes = {};

class DefaultComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props;
    return (
      <div className="url-link">
        <i className="xi-link xi-x"/>
        <a href="#" className="link"> {text}</a>
      </div>
    );
  }
}

DefaultComponent.defaultProps = defaultProps;
DefaultComponent.propTypes = propTypes;

export default DefaultComponent