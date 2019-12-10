import React, { Component } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import Things from './Things';

export default class Home extends Component {
  render() {
    return (
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        level="4"
      >
        <Things />
      </Layout>
    );
  }
}
