import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location';
import { loadWeatherDataForDefaultCities, setCurrentPosition } from 'common/src/redux/appRoot/actions';
import store from '../redux/store';

const getLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        throw new Error('Permission to access location was denied');
    }

    getCurrentPositionAsync()
        .then((location: LocationObject) => store.dispatch(setCurrentPosition({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        })))
        .catch(() => {
            store.dispatch(loadWeatherDataForDefaultCities());
        });
};

export default getLocation;
