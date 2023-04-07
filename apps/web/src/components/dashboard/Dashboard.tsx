import React, {memo, useLayoutEffect} from 'react';
import { getLocation } from "../../services/locationService";
import {useSelector} from "react-redux";
import {RootState} from "common/redux/dashboard/reducer";
import {WeatherData} from "../../../../common/services/dataParcer";
import CityOverView from "../../../../common/components/cityOverview/CityOverview";
import styles from './Dashboard.scss';

const Dashboard = memo(() => {
    const dashboardState = useSelector((state: RootState) => state.dashboard);

    useLayoutEffect(() => {
        getLocation();
    },[]);

    const renderList = () => {
        return dashboardState?.dataForDisplay?.map((item: WeatherData, index: number) => {
            return <div className={styles.item} key={item.cityName}>
                <CityOverView
                    cityName={item.cityName}
                    temperature={item.temperature}/>
            </div>
        })
    };
    return <div className={styles.overviewContainer}>
        { renderList() }
    </div>


});

export default Dashboard;
