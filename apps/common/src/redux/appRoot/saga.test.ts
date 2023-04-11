import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import axios from 'axios';
import { throwError } from 'redux-saga-test-plan/providers';
import { appRootReducer, initialState } from './reducer';
import { callLoadDataFromOpenWeather, fetchWeatherDataForCity, getAppRootState } from './saga';
import { allCitiesWeatherDataLoaded, AppRootActionTypes } from './actions';
import parseCityWeatherData from '../../services/dataParcer';
import { apiResponseMock, currentPositionMock } from './mockedData';
import { AppRootState } from '../../services/types';

describe('test appRootSga', () => {
    beforeEach(() => {
        jest.mock('axios');
        axios.get = jest.fn();
    });

    describe('test callLoadDataFromOpenWeather', () => {
        it('should handle reducer when supplying initial state', () => {
            return expectSaga(callLoadDataFromOpenWeather)
                .withReducer(appRootReducer, initialState)
                .hasFinalState(initialState)
                .run();
        });

        it('should load only data for default cities', () => {
            const cityDataCollection = [
                parseCityWeatherData(apiResponseMock),
                parseCityWeatherData(apiResponseMock),
            ];
            return expectSaga(callLoadDataFromOpenWeather)
                .provide([
                    [matchers.select(getAppRootState), initialState],
                    [matchers.call.fn(axios.get), { data: apiResponseMock }], // called twice
                ])
                .put(allCitiesWeatherDataLoaded(cityDataCollection))
                .run();
        });

        it('should load data for default cities and current position', () => {
            const cityDataCollection = [
                parseCityWeatherData(apiResponseMock),
                parseCityWeatherData(apiResponseMock),
                parseCityWeatherData(apiResponseMock),
            ];
            return expectSaga(callLoadDataFromOpenWeather)
                .provide([
                    [matchers.select(getAppRootState), { ...initialState, currentPosition: currentPositionMock } as AppRootState],
                    [matchers.call.fn(axios.get), { data: apiResponseMock }], // called 3 times
                ])
                .put(allCitiesWeatherDataLoaded(cityDataCollection))
                .run();
        });
    });

    describe('test saga fetchWeatherDataForCity', () => {
        it('should return parsed value correctly', () => {
            return expectSaga(fetchWeatherDataForCity, 'apiUrl')
                .provide([[matchers.call.fn(axios.get), { data: apiResponseMock }]])
                .returns(parseCityWeatherData(apiResponseMock))
                .run();
        });

        it('should dispatch error', () => {
            const error = new Error('error');
            return expectSaga(fetchWeatherDataForCity, 'apiUrl')
                .provide([[matchers.call.fn(axios.get), throwError(error)]])
                .put({ type: AppRootActionTypes.API_REQUEST_ERROR, error })
                .run();
        });
    });
});
