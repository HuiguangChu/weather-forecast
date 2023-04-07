import {all, put, select, takeLatest} from 'redux-saga/effects';
import {DashboardActionTypes, weatherDataLoaded} from './actions';
import {parseWeatherDataForDisplay} from "../../services/dataParcer";
import {DashboardState, RootState} from "./reducer";
import axios, {AxiosError, AxiosResponse} from 'axios';

const API_KEY = 'd3e452be4ab461f35588e40e0894d0dd';

function* callLoadDataFromOpenWeather() {
    // const dashboardState: DashboardState = yield select((state: RootState) => state.dashboard);
    // const allFetches = [];
    // const urls = [];
    //
    // try {
    //     dashboardState.defaultsCities.forEach((city: string) => {
    //         urls.push(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    //     });
    //
    //     if (dashboardState?.currentPosition) {
    //         const { currentPosition: {longitude, latitude} } = dashboardState;
    //         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    //         // make sure current location on top
    //         urls.unshift(url);
    //     }
    //
    //     urls.forEach((url: string) => {
    //         allFetches.push(axios.get(url)
    //             .then((res: AxiosResponse) => parseWeatherDataForDisplay(res.data))
    //             .catch((error: AxiosError) => console.log(error))
    //         );
    //     });
    //
    //     const allData = yield all(allFetches);
        const allData = [
            {
                "visibility": 10000,
                "sunriseTime": 1680927745,
                "sunsetTime": 1680977708,
                "temperature": 276.05,
                "minTemperature": 274.34,
                "maxTemperature": 277.98,
                "humidity": 81,
                "cityName": "Oslo",
                "weatherStatus": "Clouds"
            },
            {
                "visibility": 10000,
                "sunriseTime": 1680926069,
                "sunsetTime": 1680975872,
                "temperature": 278.4,
                "minTemperature": 277.15,
                "maxTemperature": 279.32,
                "humidity": 66,
                "cityName": "Stockholm",
                "weatherStatus": "Clear"
            },
            {
                "visibility": 10000,
                "sunriseTime": 1680927737,
                "sunsetTime": 1680977682,
                "temperature": 276.33,
                "minTemperature": 274.09,
                "maxTemperature": 277.93,
                "humidity": 80,
                "cityName": "Kolbotn",
                "weatherStatus": "Clouds"
            }
        ];
        yield put(weatherDataLoaded(allData));
}

function* watchLoadWeatherData() {
    yield takeLatest([DashboardActionTypes.SET_CURRENT_POSITION,
        DashboardActionTypes.LOAD_WEATHER_DATA_FOR_DEFAULT_CITIES],
        callLoadDataFromOpenWeather);
}

function* dashboardSaga() {
    yield all([
        watchLoadWeatherData(),
    ]);
}

export default dashboardSaga;
