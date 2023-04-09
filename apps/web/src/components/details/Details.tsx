import React, {memo, Suspense} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import TemperatureSection from "common/components/cityDetails/TemperatureSection";
import styles from './Details.scss';
import ExtraInfoSection from "common/components/cityDetails/ExtraInfoSection";
import {CityWeatherData, RootState} from "common/services/types";
import Loading from "common/components/Loading";

const Details = memo(() => {
​    const { cityName } = useParams();
    const { appRoot: { citiesDataCollection }} = useSelector((state: RootState) => state);
    const cityDetails = citiesDataCollection?.find(
        (weatherData: CityWeatherData) => weatherData?.cityName === cityName);

    return <div className={styles.detailsWrapper}>
        <Suspense fallback={<Loading/>}>
                <div className={styles.temperatureInfo}>
                    <TemperatureSection cityDetails={cityDetails}/>
                </div>
                <ExtraInfoSection cityDetails={cityDetails}/>
        </Suspense>
    </div>

});

export default Details;
