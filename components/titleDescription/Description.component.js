import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Description = props => {
  return <Text style={styles.description}>{props.description}</Text>;
};

// les styles à appliquer pour les descriptions
const styles = StyleSheet.create({
  description: {
    color: '#00008B',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30
  }
});

export default Description;
