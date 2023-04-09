import React, { memo } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import DefaultImage from '../../assets/background-cloud.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const PageWithBackground = memo((props) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: DEFAULT_IMAGE }}
                resizeMode="cover"
            >
                {props?.children}
            </ImageBackground>
        </View>
    );
});

export default PageWithBackground;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});
