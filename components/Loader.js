import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Loader = () => {
    return (
        <View style={styles.loaderContainer}>
            <Image source={require("../assets/loader.gif")} />
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