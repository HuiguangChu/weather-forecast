import {all, put, select, takeLatest} from 'redux-saga/effects';
import {allCitiesWeatherDataLoaded, AppRootActionTypes} from './actions';
import {parseCityWeatherData} from "../../services/dataParcer";
import axios, {AxiosError, AxiosResponse} from 'axios';
import {Units, urlForOpenWeatherData} from "../../services/constants";
import {AppRootState, RootState} from "../../services/types";

function* callLoadDataFromOpenWeather() {
    const appRootState: AppRootState = yield select((state: RootState) => state.appRoot);
    const allPromiseFetches = [];
    const allRequestUrls = [];
    const units = Units.METRIC; // this can be get from localStorage, here just use a default one

    try {
        appRootState?.defaultCities.forEach((city: string) => {
            allRequestUrls.push(`${urlForOpenWeatherData}&q=${city}&units=${units}`);
        });

        if (appRootState?.currentPosition) {
            const { currentPosition: {longitude, latitude} } = appRootState;
            const url = `${urlForOpenWeatherData}&lat=${latitude}&lon=${longitude}&units=${units}`;
            // make sure current location on top
            allRequestUrls.unshift(url);
        }

        allRequestUrls.forEach((url: string) => {
            allPromiseFetches.push(axios.get(url)
                .then((res: AxiosResponse) => parseCityWeatherData(res.data))
                .catch((error: AxiosError) => console.log(error))
            );
        });

        const citiesDataCollection = yield all(allPromiseFetches);

//         const allData = [
//             {
//                 "visibility": 10000,
//                 "sunriseTime": 1680927745,
//                 "sunsetTime": 1680977708,
//                 "temperature": 276.05,
//                 "minTemperature": 274.34,
//                 "maxTemperature": 277.98,
//                 "humidity": 81,
//                 "cityName": "Oslo",
//                 "weatherStatus": "Clouds"
//             },
//             {
//                 "visibility": 10000,
//                 "sunriseTime": 1680926069,
//                 "sunsetTime": 1680975872,
//                 "temperature": 278.4,
//                 "minTemperature": 277.15,
//                 "maxTemperature": 279.32,
//                 "humidity": 66,
//                 "cityName": "Stockholm",
//                 "weatherStatus": "Clear"
//             },
//             {
//                 "visibility": 10000,
//                 "sunriseTime": 1680927737,
//                 "sunsetTime": 1680977682,
//                 "temperature": 276.33,
//                 "minTemperature": 274.09,
//                 "maxTemperature": 277.93,
//                 "humidity": 80,
//                 "cityName": "Kolbotn",
//                 "weatherStatus": "Clouds"
//             }
//         ];
        yield put(allCitiesWeatherDataLoaded(citiesDataCollection));
}catch (e) {
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
