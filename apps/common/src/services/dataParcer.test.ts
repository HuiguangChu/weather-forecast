import { CityWeatherData } from './types';
import { parseCityWeatherData } from './dataParcer';

describe('test dataParcer service', () => {
    describe('test function parseCityWeatherData()', () => {
        const mockData = {
            coord: {
                lon: 10.99,
                lat: 44.34,
            },
            weather: [
                {
                    id: 501,
                    main: 'Rain',
                    description: 'moderate rain',
                    icon: '10d',
                },
            ],
            base: 'stations',
            main: {
                temp: 298.48,
                feels_like: 298.74, // eslint-disable-line @typescript-eslint/camelcase
                temp_min: 297.56, // eslint-disable-line @typescript-eslint/camelcase
                temp_max: 300.05, // eslint-disable-line @typescript-eslint/camelcase
                pressure: 1015,
                humidity: 64,
                sea_level: 1015, // eslint-disable-line @typescript-eslint/camelcase
                grnd_level: 933, // eslint-disable-line @typescript-eslint/camelcase
            },
            visibility: 10000,
            wind: {
                speed: 0.62,
                deg: 349,
                gust: 1.18,
            },
            rain: {
                '1h': 3.16,
            },
            clouds: {
                all: 100,
            },
            dt: 1661870592,
            sys: {
                type: 2,
                id: 2075663,
                country: 'IT',
                sunrise: 1661834187,
                sunset: 1661882248,
            },
            timezone: 7200,
            id: 3163858,
            name: 'Zocca',
            cod: 200,
        };

        it('should return null if no correct data passed in', () => {
            const data: CityWeatherData = parseCityWeatherData(null);
            expect(data).toEqual(null);
        });

        it('should return temperature in rounded number if valida data object passed in', () => {
            const data: CityWeatherData = parseCityWeatherData(mockData);
            expect(data.temperature).not.toEqual(mockData.main.temp);
            expect(data.temperature).toEqual(Math.round(mockData.main.temp));
        });
    });
});
