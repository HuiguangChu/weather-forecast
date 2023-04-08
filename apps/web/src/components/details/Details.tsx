import React, {memo, Suspense} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "common/redux/dashboard/reducer";
import {WeatherData} from "common/services/dataParcer";
import {useParams} from "react-router";
import TemperatureSection from "common/components/cityDetails/TemperatureSection";
import Loading from "../generaicLoading/Loading";
import styles from './Details.scss';

const Details = memo(() => {
​    const {cityName} = useParams();
    const {dashboard} = useSelector((state: RootState) => state);
    const {dataForDisplay} = dashboard;

    const cityDetails = dataForDisplay?.find((weatherData: WeatherData) => weatherData.cityName ===
        cityName);

    if (!cityDetails) {
        return <div className={styles.detailsWrapper}>
            <Loading/>;
        </div>
    }

    return <div className={styles.detailsWrapper}>
        <Suspense fallback={<Loading/>}>
        <TemperatureSection cityDetails={cityDetails}/>
    </Suspense>
    </div>

});

export default Details;
