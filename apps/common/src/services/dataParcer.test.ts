import { CityWeatherData } from './types';
import parseCityWeatherData from './dataParcer';
import { apiResponseMock } from '../redux/appRoot/mockedData';

describe('test dataParcer service', () => {
    describe('test function parseCityWeatherData()', () => {
        it('should return null if no correct data passed in', () => {
            const data: CityWeatherData = parseCityWeatherData(null);
            expect(data).toEqual(null);
        });

        it('should return temperature in rounded number if valida data object passed in', () => {
            const data: CityWeatherData = parseCityWeatherData(apiResponseMock);
            expect(data.temperature).not.toEqual(apiResponseMock.main.temp);
            expect(data.temperature).toEqual(Math.round(apiResponseMock.main.temp));
        });

        // TODO: write more test, here is just a basic start
    });
});
