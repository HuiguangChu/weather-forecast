import React, { FC, memo, useLayoutEffect } from 'react';
import {
    View, FlatList, StyleSheet, ListRenderItemInfo,
} from 'react-native';
import { useSelector } from 'react-redux';
import OverviewCard from 'common/src/components/cityOverview/OverviewCard';
import { CityWeatherData, RootState } from 'common/src/services/types';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/src/types';
import { Routes } from 'common/src/services/constants';
import Loading from 'common/src/components/Loading';
import PageWithBackgroundImage from './PageWithBackgroundImage';
import getLocation from '../services/locationService';

interface ComponentProps {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

const Dashboard: FC<ComponentProps> = memo(({ navigation }: ComponentProps) => {
    useLayoutEffect(() => {
        (async () => {
            await getLocation();
        })();
    }, []);

    const { citiesDataCollection } = useSelector((state: RootState) => state.appRoot);

    if (!citiesDataCollection) {
        return <Loading />;
    }

    const onNavigateToCityDetails = (cityName: string) => {
        navigation.navigate(Routes.CITY_DETAILS, { cityName });
    };

    const renderCityItem = ({ item }: ListRenderItemInfo<CityWeatherData>) => {
        const { cityName, temperature } = item;

        return (
            <OverviewCard
                cityName={cityName}
                temperature={temperature}
                key={cityName}
                onOpenCityDetails={onNavigateToCityDetails}
            />
        );
    };

    return (
        <PageWithBackgroundImage>
            <View style={styles.container}>
                <FlatList data={citiesDataCollection} renderItem={renderCityItem} role="list" />
            </View>
        </PageWithBackgroundImage>
    );
});

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexGrow: 1,
        height: '100%',
        paddingTop: 10,
    },
    loadingText: {
        alignSelf: 'center',
        fontSize: 18,
    },
});
