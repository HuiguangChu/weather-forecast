import React, {memo} from 'react';
import {View, FlatList, StyleSheet, FlatListProps} from 'react-native';
import { useSelector } from 'react-redux';
import CityOverView from "common/components/cityOverview/CityOverview";
import {AppRootState, RootState} from "common/services/types";

const Dashboard = memo(({ navigation }) => {
    const { citiesDataCollection } = useSelector((state: RootState) => state.appRoot);

    const onNavigateToCityDetails = (cityName: string) => {
        navigation.navigate('Details', { cityName })
    };
    const renderItem = ({ item }: FlatListProps) => (
        <CityOverView
            cityName={item.cityName}
            temperature={item.temperature}
            key={item.cityName}
            onOpenCityDetails={onNavigateToCityDetails}
        />
    );

    return <View style={styles.container}>
            <FlatList data={ citiesDataCollection } renderItem={renderItem}/>
        </View>

});

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    loadingText: {
        alignSelf: 'center',
        fontSize: 18
    }
});
