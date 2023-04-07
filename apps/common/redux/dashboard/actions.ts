import { action } from 'typesafe-actions';
import { CurrentPosition } from "./reducer";

export enum DashboardActionTypes {
    LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES = 'LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES',
    WEATHER_DATA_LOADED = 'WEATHER_DATA_LOADED',
    NAVIGATE_TO_CITY_DETAILS = 'NAVIGATE_TO_CITY_DETAILS',
    SET_CURRENT_POSITION = 'SET_CURRENT_POSITION',
}

export type DashboardAction = LoadWeatherDataForDefaultCitiesAction
    | NavigateToCityDetailsAction
    | WeatherDataLoadedAction
    | SetCurrentPositionAction;

interface LoadWeatherDataForDefaultCitiesAction {
    type: DashboardActionTypes.LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES;
}
interface NavigateToCityDetailsAction {
    type: DashboardActionTypes.NAVIGATE_TO_CITY_DETAILS;
}

interface SetCurrentPositionAction {
    type: DashboardActionTypes.SET_CURRENT_POSITION,
    payload: {position: CurrentPosition};
}

interface WeatherDataLoadedAction {
    type: DashboardActionTypes.WEATHER_DATA_LOADED;
    payload: { data: any }
}
export const loadWeatherDataForDefaultCities = (): LoadWeatherDataForDefaultCitiesAction => action(DashboardActionTypes.LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES);
export const weatherDataLoaded = (data: any): WeatherDataLoadedAction => action(DashboardActionTypes.WEATHER_DATA_LOADED, {data});
export const navigateToCityDetails = (): NavigateToCityDetailsAction => action(DashboardActionTypes.NAVIGATE_TO_CITY_DETAILS);
export const setCurrentPosition = (position: CurrentPosition): SetCurrentPositionAction => {
    return  action(DashboardActionTypes.SET_CURRENT_POSITION, {position})

};
