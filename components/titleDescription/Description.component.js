import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Description = props => {
  return <Text style={styles.description}>Statistiques sur le nombre d'utilisateurs,de postes et de réponses sur une période donnée</Text>;
};

// les styles à appliquer pour les descriptions
const styles = StyleSheet.create({
  description: {
    color: '#00008B',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    margin: 20
  }
});

export default Description;
