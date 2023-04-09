import React, {
    FC, memo, useContext, Fragment,
} from 'react';
import { Alert } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

const ErrorAlert: FC = memo(() => {
    const navigation = useContext(NavigationContext);
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
