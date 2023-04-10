import {
    all, put, select, takeLatest,
} from 'redux-saga/effects';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { allCitiesWeatherDataLoaded, AppRootActionTypes } from './actions';
import { parseCityWeatherData } from '../../services/dataParcer';
import { Units, urlForOpenWeatherData } from '../../services/constants';
import { AppRootState, RootState } from '../../services/types';

function* callLoadDataFromOpenWeather() {
    const appRootState: AppRootState = yield select((state: RootState) => state.appRoot);
    const allPromiseFetches = [];
    const allRequestUrls = [];
    const units = Units.METRIC; // this can be get from localStorage, here just use a default one
    if (!appRootState) {
        return;
    }

    try {
        const { defaultCities, currentPosition } = appRootState;
        defaultCities.forEach((city: string) => allRequestUrls.push(`${urlForOpenWeatherData}&q=${city}&units=${units}`));

        if (currentPosition) {
            const { currentPosition: { longitude, latitude } } = appRootState;
            const url = `${urlForOpenWeatherData}&lat=${latitude}&lon=${longitude}&units=${units}`;
            // make sure current location on top
            allRequestUrls.unshift(url);
        }

        allRequestUrls.forEach((url: string) => {
            allPromiseFetches.push(axios.get(url)
                .then((res: AxiosResponse) => parseCityWeatherData(res.data))
                .catch((error: AxiosError) => console.log(error)));
        });

        const citiesDataCollection = yield all(allPromiseFetches);

        yield put(allCitiesWeatherDataLoaded(citiesDataCollection));
    } catch (e) {
        // this can be tracked for anylized, for examaple https://trackjs.com/
        console.log(e);
    }
}

function* watchLoadWeatherData() {
    yield takeLatest([AppRootActionTypes.SET_CURRENT_POSITION,
        AppRootActionTypes.LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES],
    callLoadDataFromOpenWeather);
}

function* dashboardSaga() {
    yield all([
        watchLoadWeatherData(),
    ]);
}

export default dashboardSaga;
