import React, { Component, Fragment } from 'react';

import Button from '../dumb/Button';
import BaseModal from '../dumb/BaseModal';

class CreateStash extends Component {
  state = {
    opened: false,
  };

  open = () => {
    this.setState({ opened: true });
  };

  close = () => {
    this.setState({ opened: false });
  };

  render() {
    return (
      <Fragment>
        <Button clickHandler={this.open}>Click to add Stash</Button>
        <BaseModal opened={this.state.opened} closeModal={this.close} />
      </Fragment>
    );
  }
}

export default CreateStash;
