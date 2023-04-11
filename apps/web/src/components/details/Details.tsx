import React, { FC, memo, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import TemperatureSection from 'common/src/components/cityDetails/TemperatureSection';
import ExtraInfoSection from 'common/src/components/cityDetails/ExtraInfoSection';
import { CityWeatherData, RootState } from 'common/src/services/types';
import Loading from 'common/src/components/Loading';
import GenericError from 'common/src/components/GenericError';
import styles from './Details.scss';

const Details: FC = memo(() => {
    const { cityName } = useParams();
    const { appRoot: { citiesDataCollection } }: RootState = useSelector((state: RootState) => state);
    const cityDetails: CityWeatherData = citiesDataCollection?.find(
        (weatherData: CityWeatherData) => weatherData?.cityName === cityName,
    );

    // for the case then use just refresh, may has error
    if (!cityDetails) {
        return <GenericError />;
    }

    return (
        <div className={styles.detailsWrapper}>
            <Suspense fallback={<Loading />}>
                <div className={styles.temperatureInfo}>
                    <TemperatureSection cityDetails={cityDetails} />
                </div>
                <ExtraInfoSection cityDetails={cityDetails} />
            </Suspense>
        </div>
    );
});

export default Details;
