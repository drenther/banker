import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../smart/Portal';
import Button from './Button';

const BaseModal = ({ opened, header: Header, footer: Footer, body: Body, closeModal }) =>
  opened ? (
    <Portal selector="#modal">
      <div className="overlay">
        <div className="modal">
          <Button clickHandler={closeModal}>Close Modal</Button>
          <div className="modal-header">{Header}</div>
          <div className="modal-body">{Body}</div>
          <div className="modal-footer">{Footer}</div>
        </div>
      </div>
    </Portal>
  ) : null;

BaseModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  header: PropTypes.element,
  body: PropTypes.element,
  footer: PropTypes.element,
  closeModal: PropTypes.func.isRequired,
};

const Header = () => <h1 className="modal-title">Modal Title</h1>;
const Body = () => <p className="modal-content">Modal Content</p>;
const Footer = () => <p className="modal-footnotes">Modal Footnotes</p>;

BaseModal.defaultProps = {
  header: <Header />,
  body: <Body />,
  footer: <Footer />,
};

export default BaseModal;
