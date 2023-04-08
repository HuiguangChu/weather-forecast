export interface WeatherData {
    temperature: number;
    visibility: number;
    sunriseTime: number;
    sunsetTime: number;
    minTemperature: number;
    maxTemperature: number;
    humidity: number;
    cityName: string;
    weatherStatus: string;
    id: number;
}

export const parseWeatherDataForDisplay = (data: {[key: string]: any}): WeatherData => {
    if (!data) {
        return null;
    }

    const { visibility, sys, main, name, weather, id} = data;

    return {
        id,
        visibility,
        sunriseTime: sys?.sunrise,
        sunsetTime: sys?.sunset,
        temperature: main?.temp,
        minTemperature: main?.temp_min,
        maxTemperature: main.temp_max,
        humidity: main?.humidity,
        cityName: name,
        weatherStatus: weather?.[0]?.main,

    };
};
