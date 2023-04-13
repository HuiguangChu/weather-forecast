import React, { FC, memo, ReactNode } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import defaultImageSrc from '../../assets/background-cloud.png';

interface ComponentProps {
    children: ReactNode;
    backgroundImageUri?: string;
}

const PageWithBackgroundImage: FC<ComponentProps> = memo(({ children, backgroundImageUri }: ComponentProps) => {
    const defaultImageUri: string = Image.resolveAssetSource(defaultImageSrc)?.uri;

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: backgroundImageUri || defaultImageUri }}
                resizeMode="cover"
            >
                {children}
            </ImageBackground>
        </View>
    );
});

export default PageWithBackgroundImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
