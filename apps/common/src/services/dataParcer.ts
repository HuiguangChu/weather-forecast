import moment from 'moment';
import { CityWeatherData } from './types';

export const parseCityWeatherData = (data: {[key: string]: any}): CityWeatherData => {
    if (!data) {
        return null;
    }
    const {
        visibility, sys, main, name, weather, id,
    } = data;
    return {
        id,
        visibility: !Number.isNaN(visibility) ? `${visibility / 1000} Km` : null,
        sunriseTime: sys?.sunrise ? moment.unix(sys.sunrise).local().format('HH:ss') : null,
        sunsetTime: sys?.sunset ? moment.unix(sys.sunset).local().format('HH:ss') : null,
        temperature: main?.temp,
        minTemperature: main?.temp_min, // eslint-disable-line camelcase
        maxTemperature: main.temp_max, // eslint-disable-line camelcase
        humidity: main?.humidity ? `${main?.humidity}%` : null,
        cityName: name,
        weatherStatus: weather?.[0]?.main,

    };
};
