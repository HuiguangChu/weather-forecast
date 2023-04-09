import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CityWeatherData } from '../../services/types';

interface TemperatureSectionProps {
    cityDetails: CityWeatherData;
}
const TemperatureSection = memo(({ cityDetails }: TemperatureSectionProps) => {
    const {
        weatherStatus, temperature, maxTemperature, minTemperature,
    } = cityDetails;

    return (
        <View style={styles.container}>
            <Text>{weatherStatus}</Text>
            <Text style={styles.temperature}>
                {temperature}
                {' '}
                &#8451;
            </Text>
            <View style={styles.minMaxTemperature}>
                <Text>
                    {`H: ${maxTemperature}`}
                    {' '}
                    &#8451;
                </Text>
                <Text style={styles.minTemperature}>
                    {`L: ${minTemperature}`}
                    {' '}
                    &#8451;
                </Text>
            </View>
        </View>
    );
});

export default TemperatureSection;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    },
    temperature: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    minMaxTemperature: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    minTemperature: {
        marginLeft: 10,
    },
});
