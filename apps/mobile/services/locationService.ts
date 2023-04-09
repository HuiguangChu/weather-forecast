import {requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location';
import { store } from "../redux/store";
import {loadWeatherDataForDefaultCities, setCurrentPosition} from "../../common/redux/appRoot/actions";

export const getLocation = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        // should show some message to user, but still to continue
        alert('Permission to access location was denied');

       throw new Error("Permission to access location was denied");
    }

    getCurrentPositionAsync()
        .then((location: LocationObject) =>
            store.dispatch(setCurrentPosition({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude})))
        .catch((error: Error) => {
            console.log(error);
            store.dispatch(loadWeatherDataForDefaultCities());
    });
};


