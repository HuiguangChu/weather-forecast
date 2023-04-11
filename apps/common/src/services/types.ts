export interface RootState {
    readonly appRoot: AppRootState;
}

export interface CurrentPosition {
    latitude: number;
    longitude: number;
}

export interface CityWeatherData {
    temperature: number;
    visibility: string;
    sunriseTime: string;
    sunsetTime: string;
    minTemperature: number;
    maxTemperature: number;
    humidity: string;
    cityName: string;
    weatherStatus: string;
    id: number;
}

export interface AppRootState {
    defaultCities: string[];
    citiesDataCollection?: CityWeatherData[];
    currentPosition?: CurrentPosition;
}
