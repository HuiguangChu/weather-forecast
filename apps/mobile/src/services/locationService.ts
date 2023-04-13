import {
    requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, LocationPermissionResponse,
} from 'expo-location';
import { loadWeatherDataForDefaultCities, setCurrentPosition } from 'common/src/redux/appRoot/actions';
import store from '../redux/store';

const getLocation = async () => {
    // Ask the user to grant permissions for location while the app is in the foreground.
    const { status }: LocationPermissionResponse = await requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        // if not granted, we just load data for default cities, and end up the flow
        store.dispatch(loadWeatherDataForDefaultCities());

        return;
    }

    try {
        const { coords: { latitude, longitude } }: LocationObject = await getCurrentPositionAsync();

        store.dispatch(setCurrentPosition({
            latitude,
            longitude,
        }));
    } catch (e) {
        store.dispatch(loadWeatherDataForDefaultCities());
    }
};

export default getLocation;
