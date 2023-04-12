import React, { FC, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { CityWeatherData } from '../../services/types';
import styleMixin from '../stylesMixin';
import StyledText from '../StyledText';

interface TemperatureSectionProps {
    cityDetails: CityWeatherData;
}
const TemperatureSection: FC<TemperatureSectionProps> = memo(({ cityDetails }: TemperatureSectionProps) => {
    const {
        weatherStatus, temperature, maxTemperature, minTemperature,
    } = cityDetails;

    return (
        <View style={styleMixin.alignContentAndItemCentered}>
            <StyledText content={weatherStatus} />
            <View style={styles.temperature}>
                <StyledText size={22} weight={700}>
                    {temperature}
                    {' '}
                    &#8451;
                </StyledText>
            </View>
            <View style={styleMixin.flexRowWithSpaceBetween}>
                <StyledText>
                    {`H: ${maxTemperature}`}
                    {' '}
                    &#8451;
                </StyledText>
                <View style={styles.minTemperature}>
                    <StyledText>
                        {`L: ${minTemperature}`}
                        {' '}
                        &#8451;
                    </StyledText>
                </View>
            </View>
        </View>
    );
});

export default TemperatureSection;

const styles = StyleSheet.create({
    temperature: {
        marginTop: 5,
        marginBottom: 5,
    },
    minTemperature: {
        marginLeft: 10,
    },
});
