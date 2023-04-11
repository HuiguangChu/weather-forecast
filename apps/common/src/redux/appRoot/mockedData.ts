/* eslint-disable camelcase */
import { CurrentPosition } from '../../services/types';

export const currentPositionMock: CurrentPosition = {
    longitude: 123.12,
    latitude: 123.11,
};

export const apiResponseMock = {
    coord: {
        lon: -0.1257,
        lat: 51.5085,
    },
    weather: [
        {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
        },
    ],
    base: 'stations',
    main: {
        temp: 9.12,
        feels_like: 5.6,
        temp_min: 7.06,
        temp_max: 10.86,
        pressure: 1009,
        humidity: 72,
    },
    visibility: 10000,
    wind: {
        speed: 7.72,
        deg: 260,
        gust: 12.86,
    },
    rain: {
        '1h': 0.99,
    },
    clouds: {
        all: 20,
    },
    dt: 1681160604,
    sys: {
        type: 2,
        id: 268730,
        country: 'GB',
        sunrise: 1681103782,
        sunset: 1681152422,
    },
    timezone: 3600,
    id: 2643743,
    name: 'London',
    cod: 200,
};
