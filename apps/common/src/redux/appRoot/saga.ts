import {
    all, put, select, takeLatest,
} from 'redux-saga/effects';
import { call } from 'redux-saga-test-plan/matchers';
import axios, { AxiosResponse } from 'axios';
import { allCitiesWeatherDataLoaded, AppRootActionTypes } from './actions';
import { parseCityWeatherData } from '../../services/dataParcer';
import { pathForOpenWeatherData, Units } from '../../services/constants';
import { AppRootState, CityWeatherData, RootState } from '../../services/types';

export function* fetchWeatherDataForCity(url: string) {
    let cityWeatherData = null;

    try {
        const res: AxiosResponse = yield call(axios.get, url);

        cityWeatherData = parseCityWeatherData(res.data);
    } catch (error: unknown) {
        // reducer can have an error state, UI can show alert/message depends on the error state
        yield put({ type: AppRootActionTypes.API_REQUEST_ERROR, error });
        // can also use console.log to track errors, for example to use track.js
    }

    return cityWeatherData;
}

export const getAppRootState = (state: RootState) => state.appRoot;

export function* callLoadDataFromOpenWeather() {
    const appRootState: AppRootState = yield select(getAppRootState);
    const allRequestUrls = [];
    const units = Units.METRIC; // this can be get from localStorage, here just use a default one
    if (!appRootState) {
        return;
    }

    try {
        const { defaultCities, currentPosition } = appRootState;
        defaultCities.forEach((city: string) => allRequestUrls.push(`${pathForOpenWeatherData}&q=${city}&units=${units}`));

        if (currentPosition) {
            const { currentPosition: { longitude, latitude } } = appRootState;
            const url = `${pathForOpenWeatherData}&lat=${latitude}&lon=${longitude}&units=${units}`;
            // make sure current location on top
            allRequestUrls.unshift(url);
        }

        const citiesDataCollection: CityWeatherData[] = yield all(allRequestUrls.map((url: string) => call(fetchWeatherDataForCity, url)));

        // make sure there is at least a valid object inside of citiesDataCollection array
        if (citiesDataCollection?.[0]?.cityName) {
            yield put(allCitiesWeatherDataLoaded(citiesDataCollection));
        }
    } catch (error: unknown) {
        // reducer can have an error state, UI can show alert/message depends on the error state
        yield put({ type: AppRootActionTypes.FAILED_ON_LOAD_CITIES_WEATHER_DATA, error });
    }
}

function* watchLoadWeatherData() {
    yield takeLatest([AppRootActionTypes.SET_CURRENT_POSITION,
        AppRootActionTypes.LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES],
    callLoadDataFromOpenWeather);
}

function* rootAppSaga() {
    yield all([
        watchLoadWeatherData(),
    ]);
}

export default rootAppSaga;
