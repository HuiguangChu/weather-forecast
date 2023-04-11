import React, {
    FC, memo, useContext, Fragment,
} from 'react';
import { Alert } from 'react-native';
import { NavigationContext, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/src/types';

const ErrorAlert: FC = memo(() => {
    const navigation: NativeStackNavigationProp<ParamListBase> = useContext(NavigationContext);

    return (
        <Fragment>
            {Alert.alert('OBS!Something went wrong', '', [{
                text: 'Ok',
                onPress: () => navigation.navigate('Dashboard'),
                style: 'cancel',
            }])}
        </Fragment>
    );
});

export default ErrorAlert;
