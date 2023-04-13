import React, { FC, memo, Suspense } from 'react';
import { useSelector } from 'react-redux';
import OverviewCard from 'common/src/components/cityOverview/OverviewCard';
import { useHistory } from 'react-router-dom';
import { AppRootState, CityWeatherData, RootState } from 'common/src/services/types';
import Loading from 'common/src/components/Loading';
import { Routes } from 'common/src/services/constants';
import styles from './Dashboard.scss';

const Dashboard: FC = memo(() => {
    const appRootState: AppRootState = useSelector((state: RootState) => state.appRoot);
    const { citiesDataCollection } = appRootState;
    const history = useHistory();
    const onNavigateToDetailsPage = (cityName: string) => {
        history.push(`/${Routes.CITY_DETAILS}/${cityName}`);
    };

    const renderCitiesList = () => {
        return citiesDataCollection?.map((cityData: CityWeatherData) => {
            const { cityName, temperature } = cityData;

            return (
                <li className={styles.overviewCard} key={cityName}>
                    <OverviewCard
                        cityName={cityName}
                        temperature={temperature}
                        onOpenCityDetails={onNavigateToDetailsPage}
                    />
                </li>
            );
        });
    };

    return (
        <Suspense fallback={<Loading />}>
            <ul className={styles.overviewContainer}>
                { renderCitiesList() }
            </ul>
        </Suspense>
    );
});

export default Dashboard;
