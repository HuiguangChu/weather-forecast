import React, { memo } from 'react';
import { StyleSheet, View} from 'react-native';
import {useSelector} from "react-redux";
import TemperatureSection from "common/components/cityDetails/TemperatureSection";
import ExtraInfoSection from "common/components/cityDetails/ExtraInfoSection";
import { CityWeatherData, RootState } from "common/services/types";
import GenericError from "common/components/GenericError";

const CityDetails = memo(({ route }) => {
    const appRootState = useSelector((state: RootState) => state?.appRoot);
    const cityDetails = appRootState?.citiesDataCollection?.find((cityDate: CityWeatherData) => {
        return cityDate.cityName === route.params.cityName;
    });
    if (!cityDetails) {
        return <GenericError/>
    }

    return <View style={styles.container}>
                <View>
                    <View style={styles.temperatureInfo}>
                        <TemperatureSection cityDetails={cityDetails}/>
                    </View>
                    <ExtraInfoSection cityDetails={cityDetails}/>
                </View>
        </View>;

});

export default CityDetails;

const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'space-around',
            flex: 1
        },
        temperatureInfo: {
            marginBottom: 40
        }
});
