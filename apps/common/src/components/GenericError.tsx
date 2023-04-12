import React, { FC, memo, ReactNode } from 'react';
import { View } from 'react-native';
import styleMixin from './stylesMixin';
import StyledText from './StyledText';

interface GenericErrorProps {
    errorAlertComponent?: ReactNode;
    errorMessage?: string;
}

const GenericError: FC<GenericErrorProps> = memo(({ errorAlertComponent, errorMessage }: GenericErrorProps) => {
    return (
        <View style={styleMixin.containerWithContentCenterFullHeight}>
            { errorAlertComponent
            || (
                <StyledText>
                    { errorMessage || 'OBS!Something went wrong, please try again!' }
                </StyledText>
            ) }
        </View>
    );
});
export default GenericError;
