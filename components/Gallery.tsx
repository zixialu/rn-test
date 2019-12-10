import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout } from '@ui-kitten/components'

interface GalleryProps {
  rowSize: number;
  elements: React.ReactElement[];
}

const Gallery = (props: GalleryProps): React.ReactElement => {
  const { rowSize, elements } = props;

  const styles = StyleSheet.create({
    galleryContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    galleryItem: {
      width: `${100 / rowSize}%`,
    }
  });

  return (
    <Layout style={styles.galleryContainer} level="3">
      {elements.map(el => (
        <View style={styles.galleryItem}>
          {el}
        </View>
      ))}
    </Layout>
  )
};

export default Gallery;
