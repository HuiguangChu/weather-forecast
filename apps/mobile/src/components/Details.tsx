import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import TemperatureSection from 'common/src/components/cityDetails/TemperatureSection';
import ExtraInfoSection from 'common/src/components/cityDetails/ExtraInfoSection';
import { CityWeatherData, RootState } from 'common/src/services/types';
import GenericError from 'common/src/components/GenericError';
import PageWithBackground from './PageWithBackground';

const CityDetails = memo(({ route }) => {
    const appRootState = useSelector((state: RootState) => state?.appRoot);
    const cityDetails = appRootState?.citiesDataCollection?.find((cityDate: CityWeatherData) => {
        return cityDate.cityName === route.params.cityName;
    });
    if (!cityDetails) {
        return <GenericError />;
    }

    return (
        <PageWithBackground>
            <View style={styles.container}>
                <View>
                    <View style={styles.temperatureInfo}>
                        <TemperatureSection cityDetails={cityDetails} />
                    </View>
                    <ExtraInfoSection cityDetails={cityDetails} />
                </View>
            </View>
        </PageWithBackground>
    );
});

export default CityDetails;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
    },
    temperatureInfo: {
        marginBottom: 40,
    },
});
