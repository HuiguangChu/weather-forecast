import { loadWeatherDataForDefaultCities, setCurrentPosition } from 'common/src/redux/appRoot/actions';
import store from '../redux/store';

const getLocation = () => {
    // First, check the browser support geolocation or not.
    if (!navigator?.geolocation) {
        /*
         TODO: we should notify the user that the location service
            does not work on their context but they still can access by search manually
         */

        store.dispatch(loadWeatherDataForDefaultCities());

        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position: Position) => {
            store.dispatch(setCurrentPosition({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
            }));
        },
        () => {
            store.dispatch(loadWeatherDataForDefaultCities());
        }
    );
};

export default getLocation;
