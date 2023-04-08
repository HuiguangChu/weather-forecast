import React, {memo, useLayoutEffect, Suspense} from 'react';
import { getLocation } from "../../services/locationService";
import {useSelector} from "react-redux";
import {RootState} from "common/redux/dashboard/reducer";
import {WeatherData} from "common/services/dataParcer";
import CityOverView from "common/components/cityOverview/CityOverview";
import styles from './Dashboard.scss';
import { useHistory } from 'react-router-dom';
import Loading from "../generaicLoading/Loading";

const Dashboard = memo(() => {
    const dashboardState = useSelector((state: RootState) => state.dashboard);
    const history = useHistory();
    const onNavigateToDetailPage = (cityName: string) => {
        history.push(`/details/${cityName}`);
    };

    const renderList = () => {
        return dashboardState?.dataForDisplay?.map((item: WeatherData) => {
            return <div className={styles.item} key={item.cityName}>
                <CityOverView
                    cityName={item.cityName}
                    temperature={item.temperature}
                    onOpenCityDetails={onNavigateToDetailPage}
                />
            </div>
        })
    };
    return <Suspense fallback={<Loading />}>
            <div className={styles.overviewContainer}>
            { renderList() }
            </div>
        </Suspense>

});

export default Dashboard;
