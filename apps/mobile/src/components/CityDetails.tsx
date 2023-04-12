import React, { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Route } from '@react-navigation/native';
import TemperatureSection from 'common/src/components/cityDetails/TemperatureSection';
import ExtraInfoSection from 'common/src/components/cityDetails/ExtraInfoSection';
import { AppRootState, CityWeatherData, RootState } from 'common/src/services/types';
import GenericError from 'common/src/components/GenericError';
import PageWithBackgroundImage from './PageWithBackgroundImage';
import ErrorAlert from './ErrorAlert';

interface ComponentProps {
    route: Route;
}

const CityDetails: FC<ComponentProps> = memo(({ route }: ComponentProps) => {
    const appRootState: AppRootState = useSelector((state: RootState) => state?.appRoot);
    const cityDetails: CityWeatherData = appRootState?.citiesDataCollection?.find((cityDate: CityWeatherData) => {
        return cityDate.cityName === route.params.cityName;
    });

    if (!cityDetails) {
        return (<GenericError errorAlertComponent={<ErrorAlert />} />);
    }

    return (
        <PageWithBackgroundImage>
            <View style={styles.container}>
                <View>
                    <View style={styles.temperatureInfo}>
                        <TemperatureSection cityDetails={cityDetails} />
                    </View>
                    <ExtraInfoSection cityDetails={cityDetails} />
                </View>
            </View>
        </PageWithBackgroundImage>
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