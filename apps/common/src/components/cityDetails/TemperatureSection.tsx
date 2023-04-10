import React, { FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CityWeatherData } from '../../services/types';
import styleMixin from '../stylesMixin';

interface TemperatureSectionProps {
    cityDetails: CityWeatherData;
}
const TemperatureSection: FC<TemperatureSectionProps> = memo(({ cityDetails }: TemperatureSectionProps) => {
    const {
        weatherStatus, temperature, maxTemperature, minTemperature,
    } = cityDetails;

    return (
        <View style={styleMixin.alignContentAndItemCentered}>
            <Text>{weatherStatus}</Text>
            <Text style={styles.temperature}>
                {temperature}
                {' '}
                &#8451;
            </Text>
            <View style={styleMixin.flexRowWithSpaceBetween}>
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
    temperature: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    minTemperature: {
        marginLeft: 10,
    },
});
