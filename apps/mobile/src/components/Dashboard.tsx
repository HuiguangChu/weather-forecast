import React, { memo } from 'react';
import {
    View, FlatList, StyleSheet, FlatListProps,
} from 'react-native';
import { useSelector } from 'react-redux';
import OverviewCard from 'common/src/components/cityOverview/OverviewCard';
import { RootState } from 'common/src/services/types';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/src/types';
import PageWithBackground from './PageWithBackground';

interface ComponentProps {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

const Dashboard = memo(({ navigation }: ComponentProps) => {
    const { citiesDataCollection } = useSelector((state: RootState) => state.appRoot);

    const onNavigateToCityDetails = (cityName: string) => {
        navigation.navigate('Details', { cityName });
    };
    const renderItem = ({ item }: FlatListProps) => (
        <OverviewCard
            cityName={item.cityName}
            temperature={item.temperature}
            key={item.cityName}
            onOpenCityDetails={onNavigateToCityDetails}
        />
    );

    return (
        <PageWithBackground>
            <View style={styles.container}>
                <FlatList data={citiesDataCollection} renderItem={renderItem} accessibilityRole="list" />
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
        paddingTop: 10,
    },
    loadingText: {
        alignSelf: 'center',
        fontSize: 18,
    },
});
