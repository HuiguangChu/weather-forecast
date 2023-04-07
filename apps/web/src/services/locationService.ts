import {loadWeatherDataForDefaultCities, setCurrentPosition} from "common/redux/dashboard/actions";
import { store } from "../redux/store";

export const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
        (position: Position) => {
            store.dispatch(setCurrentPosition({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }));
        },
        () => {
            store.dispatch(loadWeatherDataForDefaultCities());
    });
};
