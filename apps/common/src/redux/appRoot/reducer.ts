import { AppRootAction, AppRootActionTypes } from './actions';
import { AppRootState } from '../../services/types';

export const initialState: AppRootState = {
    defaultCities: ['London', 'Berlin'],
    citiesDataCollection: null,
    currentPosition: null,
};

export const appRootReducer = (state: AppRootState = initialState, action: AppRootAction) => {
    switch (action.type) {
    case AppRootActionTypes.ALL_CITIES_WEATHER_DATA_LOADED:
        return {
            ...state,
            citiesDataCollection: action.payload.citiesDataCollection,
        };
    case AppRootActionTypes.SET_CURRENT_POSITION:
        return {
            ...state,
            currentPosition: action.payload.position,
        };

    default:
        return state;
    }
};
