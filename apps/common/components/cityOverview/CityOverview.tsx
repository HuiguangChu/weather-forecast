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
   return  <Pressable style={({pressed}) => [
       {backgroundColor: pressed ? '#eef6f8' : '#cce2f8',
       }, styles.item]}
                      onPress={onCityClick}>
                <Text style={styles.itemText}>{cityName}</Text>
                <Text style={styles.itemText}>{temperature}</Text>
            </Pressable >
});

export default CityOverview;

const styles = StyleSheet.create({
    item: {
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent:'space-between',
        flexGrow: 1,
    },
    itemText: {
        fontSize: 16
    }
});
