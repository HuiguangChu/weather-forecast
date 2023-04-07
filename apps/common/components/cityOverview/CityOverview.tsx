import React, { memo } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

interface CityOverviewProps {
   cityName: string;
   temperature: number;
    onOpenCityDetails: (cityName: string) => void;
}
const CityOverview = memo(({cityName, temperature, onOpenCityDetails}: CityOverviewProps) => {
    const onCityClick = () => {
        onOpenCityDetails(cityName);
    };
   return  <Pressable style={styles.item} onPress={onCityClick}>
                <Text>{cityName}</Text>
                <Text>{temperature}</Text>
            </Pressable >
});

export default CityOverview;

const styles = StyleSheet.create({
    item: {
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#cce2f8',

        'item:hover': {
            backgroundColor: '#eef6f8',
        }
    }
});
