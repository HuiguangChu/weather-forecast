import React, {memo, useLayoutEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { DashboardState, RootState } from "common/redux/dashboard/reducer";
import CityOverView from "common/components/cityOverview/CityOverview";
import { getLocation } from "../services/locationService";
import { navigateToCityDetails } from "../../common/redux/dashboard/actions";

const Dashboard = memo(({ navigation }) => {
    useLayoutEffect(() => {
        getLocation();
    }, []);

    const dispatch = useDispatch();

    const dashboardState: DashboardState = useSelector((state: RootState) => state.dashboard);
    const { dataForDisplay } = dashboardState;
    const onNavigateToCityDetails = (cityName: string) => {
        navigation.navigate('Details', { name: cityName })
    };
    const renderItem = ({ item }) => (
        <CityOverView
            cityName={item.cityName}
            temperature={item.temperature}
            key={item.cityName}
            onOpenCityDetails={onNavigateToCityDetails}
        />
    );
    return <View style={styles.container}>
            {
                dataForDisplay
                    ? <FlatList data={dataForDisplay}
                                renderItem={renderItem}
                    />
                    : <Text style={styles.loadingText}>Loading</Text>
            }
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
