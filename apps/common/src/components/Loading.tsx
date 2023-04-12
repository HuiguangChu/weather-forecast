import React, { FC, memo } from 'react';
import {
    View, ActivityIndicator,
} from 'react-native';
import styleMixin from './stylesMixin';
import StyledText from './StyledText';

interface LoadingProps {
    message?: string;
}
const Loading: FC<LoadingProps> = memo(({ message }: LoadingProps) => (
    <View style={styleMixin.containerWithContentCenterFullHeight}>
        <ActivityIndicator />
        <View style={{ marginTop: 5 }}>
            <StyledText content={message || 'Loading...'} />
        </View>
    </View>
));

export default Loading;
