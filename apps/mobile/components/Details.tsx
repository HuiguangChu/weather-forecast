import React, { memo } from 'react';
import { StyleSheet, View} from 'react-native';
import {useSelector} from "react-redux";
import {RootState} from "common/redux/dashboard/reducer";
import {WeatherData} from "common/services/dataParcer";
import TemperatureSection from "common/components/cityDetails/TemperatureSection";

const CityDetails = memo(({ route }) => {
    const dashboardState = useSelector((state: RootState) => state.dashboard);
    const cityDetails = dashboardState?.dataForDisplay?.find((weatherData: WeatherData) => {
        return weatherData.cityName === route.params.name;
    });

    return <View style={styles.container}>
            <TemperatureSection cityDetails={cityDetails}/>
        </View>;

});

export default CityDetails;

const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        }
});
