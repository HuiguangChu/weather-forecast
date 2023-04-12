import React, {
    FC, memo, useContext, Fragment,
} from 'react';
import { Alert } from 'react-native';
import { NavigationContext, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/src/types';
import { Routes } from 'common/src/services/constants';

const ErrorAlert: FC = memo(() => {
    const navigation: NativeStackNavigationProp<ParamListBase> = useContext(NavigationContext);

    return (
        <Fragment>
            {Alert.alert('OBS!Something went wrong', '', [{
                text: 'Ok',
                onPress: () => navigation.navigate(Routes.LOCATIONS),
                style: 'cancel',
            }])}
        </Fragment>
    );
});

export default ErrorAlert;
