import React from 'react';
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native';

const Loader = () => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#D7403E" />
        </View>
    )
};
const styles = StyleSheet.create({
    loaderContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default Loader;