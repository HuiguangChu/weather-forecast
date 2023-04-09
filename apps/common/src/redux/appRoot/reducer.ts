import { AppRootAction, AppRootActionTypes } from './actions';
import { AppRootState } from '../../services/types';

export const initialState: AppRootState = {
    defaultCities: ['Bergen', 'Stockholm'],
    citiesDataCollection: null,
    isDataLoading: true,
    currentPosition: null,
};

export const appRootReducer = (state: AppRootState = initialState, action: AppRootAction) => {
    switch (action.type) {
    case AppRootActionTypes.ALL_CITIES_WEATHER_DATA_LOADED:
        return {
            ...state,
            citiesDataCollection: action.payload.citiesDataCollection,
            isDataLoading: false,
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
