import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location';
import { loadWeatherDataForDefaultCities, setCurrentPosition } from 'common/src/redux/appRoot/actions';
import store from '../redux/store';

const getLocation = async () => {
    // Ask the user to grant permissions for location while the app is in the foreground.
    const { status } = await requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        // if not granted, we just load data for default cities, and end up the flow
        store.dispatch(loadWeatherDataForDefaultCities());

        return;
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
