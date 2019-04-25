import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};

// les styles à appliquer pour les titles
const styles = StyleSheet.create({
  title: {
    color: '#DC143C',
    fontWeight: '300',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 30
  }
});

export default Title;
