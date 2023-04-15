import React, { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import TemperatureSection from 'common/src/components/cityDetails/TemperatureSection';
import ExtraInfoSection from 'common/src/components/cityDetails/ExtraInfoSection';
import { AppRootState, CityWeatherData, RootState } from 'common/src/services/types';
import { RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import showGeneralAlert from 'web/src/services/alertService';
import PageWithBackgroundImage from './PageWithBackgroundImage';

interface ComponentProps {
    route: RouteProp<any> ;
}

const CityDetails: FC<ComponentProps> = memo(({ route }: ComponentProps) => {
    const appRootState: AppRootState = useSelector((state: RootState) => state?.appRoot);
    const navigation: NavigationProp<any> = useNavigation();
    const cityDetails: CityWeatherData = appRootState?.citiesDataCollection?.find((cityDate: CityWeatherData) => {
        return cityDate.cityName === route.params.cityName;
    });

    if (!cityDetails) {
        showGeneralAlert(navigation);

        return null;
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
