import React, { memo } from 'react';
import {
    View, ActivityIndicator, StyleSheet, Text,
} from 'react-native';

const Loading = memo(() => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <Text>Loading...</Text>
    </View>
));

export default Loading;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
