import { Alert } from 'react-native';
import { Routes } from 'common/src/services/constants';
import { NavigationProp } from '@react-navigation/native';

const showGeneralAlert = (navigation: NavigationProp<any>) => Alert.alert('OBS!Something went wrong', '', [{
    text: 'Ok',
    onPress: () => navigation.navigate(Routes.LOCATIONS),
    style: 'cancel',
}]);

export default showGeneralAlert;
