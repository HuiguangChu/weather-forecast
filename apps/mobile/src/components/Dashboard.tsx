import React, { memo } from 'react';
import {
    View, FlatList, StyleSheet, FlatListProps,
} from 'react-native';
import { useSelector } from 'react-redux';
import CityOverView from 'common/src/components/cityOverview/CityOverview';
import { RootState } from 'common/src/services/types';
import PageWithBackground from './PageWithBackground';

const Dashboard = memo(({ navigation }) => {
    const { citiesDataCollection } = useSelector((state: RootState) => state.appRoot);

    const onNavigateToCityDetails = (cityName: string) => {
        navigation.navigate('Details', { cityName });
    };
    const renderItem = ({ item }: FlatListProps) => (
        <CityOverView
            cityName={item.cityName}
            temperature={item.temperature}
            key={item.cityName}
            onOpenCityDetails={onNavigateToCityDetails}
        />
    );

    return (
        <PageWithBackground>
            <View style={styles.container}>
                <FlatList data={citiesDataCollection} renderItem={renderItem} />
            </View>
        </PageWithBackground>
    );
});

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexGrow: 1,
        height: '100%',
    },
    loadingText: {
        alignSelf: 'center',
        fontSize: 18,
    },
});
