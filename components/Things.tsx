import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Card, Text } from '@ui-kitten/components';
import Gallery from './Gallery';

const Things = () => {
  const things = Array(10).fill(null).map((_, idx) => (
    <Card style={styles.thingCard} appearance="outline">
      <Text category="h3" key={idx}>Aa {idx}</Text>
    </Card>
  ));

  return (
    <Gallery rowSize={2} elements={things} />
  );
}

const styles = StyleSheet.create({
  thingCard: {
    alignItems: 'center',
    margin: 8,
  }
})

export default Things;
