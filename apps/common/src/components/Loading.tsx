import React, { FC, memo } from 'react';
import {
    View, ActivityIndicator, Text,
} from 'react-native';

import styleMixin from './stylesMixin';

interface LoadingProps {
    message?: string;
}
const Loading: FC<LoadingProps> = memo(({ message }: LoadingProps) => (
    <View style={styleMixin.containerWithContentCenterFullHeight}>
        <ActivityIndicator />
        <Text>{message || 'Loading...'}</Text>
    </View>
));

export default Loading;
