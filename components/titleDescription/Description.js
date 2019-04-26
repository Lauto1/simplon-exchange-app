import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Description = props => {
  return <Text style={styles.description}>Statistiques sur le nombre d'utilisateurs,de postes et de réponses sur une période donnée</Text>;
};

// les styles à appliquer pour les descriptions
const styles = StyleSheet.create({
  description: {
    color: '#2F3239',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
    borderRadius: 20
  }
});

export default Description;
