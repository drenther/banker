import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends Component {
  static propTypes = {
    selector: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };

  state = {
    node: undefined,
  };

  componentDidMount() {
    const node = document.querySelector(this.props.selector);
    this.setState({ node });
  }

  render() {
    const { node } = this.state;
    return node ? ReactDOM.createPortal(this.props.children, node) : null;
  }
}

export default Portal;
