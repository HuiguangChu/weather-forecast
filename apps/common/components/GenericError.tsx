import React, {memo} from 'react';
import { View, StyleSheet, Text } from 'react-native';

const GenericError = memo(() => (
    <View style={[styles.container]}>
        <Text>OBS!Something went wrong, please try again!</Text>
    </View>
));

export default GenericError;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
