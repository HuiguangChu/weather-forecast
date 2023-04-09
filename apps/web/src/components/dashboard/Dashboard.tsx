import React, { memo, Suspense } from 'react';
import { useSelector } from 'react-redux';
import CityOverView from 'common/src/components/cityOverview/CityOverview';
import { useHistory } from 'react-router-dom';
import { CityWeatherData } from 'common/src/services/types';
import Loading from 'common/src/components/Loading';
import styles from './Dashboard.scss';

const Dashboard = memo(() => {
    const appRootState = useSelector((state: RootState) => state.appRoot);
    const history = useHistory();
    const onNavigateToDetailPage = (cityName: string) => {
        history.push(`/details/${cityName}`);
    };
    const renderCitiesList = () => {
        return appRootState?.citiesDataCollection?.map((cityData: CityWeatherData) => {
            return (
                <div className={styles.item} key={cityData?.cityName}>
                    <CityOverView
                        cityName={cityData?.cityName}
                        temperature={cityData?.temperature}
                        onOpenCityDetails={onNavigateToDetailPage}
                    />
                </div>
            );
        });
    };

    return (
        <Suspense fallback={<Loading />}>
            <div className={styles.overviewContainer}>
                { renderCitiesList() }
            </div>
        </Suspense>
    );
});

export default Dashboard;
