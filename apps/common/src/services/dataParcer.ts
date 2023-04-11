import moment from 'moment';
import { CityWeatherData } from './types';

const parseCityWeatherData = (data: {[key: string]: any}): CityWeatherData => {
    if (!data) {
        return null;
    }
    const {
        visibility, sys, main, name, weather, id,
    } = data;

    return {
        id,
        cityName: name,
        weatherStatus: weather?.[0]?.main,
        visibility: !Number.isNaN(visibility) ? `${visibility / 1000} Km` : null,
        sunriseTime: sys?.sunrise ? moment.unix(sys.sunrise).local().format('HH:ss') : null,
        sunsetTime: sys?.sunset ? moment.unix(sys.sunset).local().format('HH:ss') : null,
        temperature: main?.temp ? Math.round(main.temp) : null,
        minTemperature: main?.temp_min ? Math.round(main.temp_min) : null, // eslint-disable-line camelcase
        maxTemperature: main?.temp_max ? Math.round(main.temp_max) : null, // eslint-disable-line camelcase
        humidity: main?.humidity ? `${main?.humidity}%` : null,
    };
};

export default parseCityWeatherData;
