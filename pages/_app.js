import React from 'react';
import { Provider, Subscribe } from 'unstated';
import App, { Container } from 'next/app';
import dynamic from 'next/dynamic';

import DBContainer from '../state/db-container';

/**
 *  skip SSR for this component because it import lovefield which needs access to window object
 */
const DBConnect = dynamic(import('../components/smart/DBConnect'));

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider>
          <Subscribe to={[DBContainer]}>
            {({ state: { dbConnected }, connectDB }) => (
              <DBConnect connect={connectDB} connected={dbConnected} />
            )}
          </Subscribe>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default CustomApp;
