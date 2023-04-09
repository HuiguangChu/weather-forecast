import React, { FC, memo, ReactNode } from 'react';
import { View, Text } from 'react-native';
import styleMixin from './stylesMixin';

interface GenericErrorProps {
    errorAlertComponent?: ReactNode;
    errorMessage?: string;
}

const GenericError: FC<GenericErrorProps> = memo(({ errorAlertComponent, errorMessage }: GenericErrorProps) => {
    return (
        <View style={styleMixin.containerWithContentCenterFullHeight}>
            { errorAlertComponent
            || (
                <Text>
                    { errorMessage || 'OBS!Something went wrong, please try again!' }
                </Text>
            ) }
        </View>
    );
});
export default GenericError;
