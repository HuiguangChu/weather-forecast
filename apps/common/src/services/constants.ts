export enum TemperatureUnits {
    METRIC = 'metric',
    STANDARD = 'standard',
    IMPERIAL = 'imperial'
}

export enum KeysOfCityWeatherToRender {
    SUNRISE_TIME = 'sunriseTime',
    SUNSET_TIME = 'sunsetTime',
    HUMIDITY = 'humidity',
    VISIBILITY = 'visibility',
}

const OPEN_WEATHER_API_KEY = 'd3e452be4ab461f35588e40e0894d0dd';
export const pathForOpenWeatherData = `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_API_KEY}`;

export enum Routes {
    CITY_DETAILS = 'city',
    LOCATIONS = 'locations',
}
