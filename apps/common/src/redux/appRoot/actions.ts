import { action } from 'typesafe-actions';
import { CityWeatherData, CurrentPosition } from '../../services/types';

export enum AppRootActionTypes {
    LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES = 'LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES',
    ALL_CITIES_WEATHER_DATA_LOADED = 'ALL_CITIES_WEATHER_DATA_LOADED',
    SET_CURRENT_POSITION = 'SET_CURRENT_POSITION',
    FAILED_ON_LOAD_CITIES_WEATHER_DATA = 'FAILED_ON_LOAD_CITIES_WEATHER_DATA',
    API_REQUEST_ERROR = 'API_REQUEST_ERROR',
}

export type AppRootAction = LoadWeatherDataForDefaultCitiesAction
    | WeatherDataLoadedAction
    | SetCurrentPositionAction;

interface LoadWeatherDataForDefaultCitiesAction {
    type: AppRootActionTypes.LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES;
}

interface SetCurrentPositionAction {
    type: AppRootActionTypes.SET_CURRENT_POSITION;
    payload: { position: CurrentPosition };
}

interface WeatherDataLoadedAction {
    type: AppRootActionTypes.ALL_CITIES_WEATHER_DATA_LOADED;
    payload: { citiesDataCollection: CityWeatherData[] };
}

export const loadWeatherDataForDefaultCities = (): LoadWeatherDataForDefaultCitiesAction => action(
    AppRootActionTypes.LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES
);

export const allCitiesWeatherDataLoaded = (citiesDataCollection: CityWeatherData[]): WeatherDataLoadedAction => action(
    AppRootActionTypes.ALL_CITIES_WEATHER_DATA_LOADED,
    { citiesDataCollection }
);

export const setCurrentPosition = (position: CurrentPosition): SetCurrentPositionAction => action(
    AppRootActionTypes.SET_CURRENT_POSITION,
    { position }
);
