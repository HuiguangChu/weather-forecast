import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { CityWeatherData } from '../../services/types';
import styleMixin from '../stylesMixin';
import StyledText from '../StyledText';
import { KeysOfCityWeatherToRender } from '../../services/constants';

interface ExtraInfoSectionProps {
    cityDetails: CityWeatherData;
}

const ExtraInfoSection = memo(({ cityDetails }: ExtraInfoSectionProps) => {
    const infoItemsToDisplay: KeysOfCityWeatherToRender[][] = [
        [KeysOfCityWeatherToRender.SUNRISE_TIME, KeysOfCityWeatherToRender.SUNSET_TIME],
        [KeysOfCityWeatherToRender.HUMIDITY, KeysOfCityWeatherToRender.VISIBILITY],
    ];
    const captions: {[index: string]: string} = {
        [KeysOfCityWeatherToRender.SUNRISE_TIME]: 'Sunrise',
        [KeysOfCityWeatherToRender.SUNSET_TIME]: 'Sunset',
        [KeysOfCityWeatherToRender.HUMIDITY]: 'Humidity',
        [KeysOfCityWeatherToRender.VISIBILITY]: 'Visibility',
    };
    const renderInfoItem = (title: string, info: string | number) => {
        return (
            <View style={styles.infoItemCol} key={title}>
                <StyledText content={captions[title]} />
                <StyledText content={info} />
            </View>
        );
    };
    const renderInfoItems = () => {
        return infoItemsToDisplay.map((infoItemRow: string[], index: number) => {
            return (
                <View style={styleMixin.flexRowWithSpaceBetween} key={infoItemRow[index]}>
                    {infoItemRow.map((key: KeysOfCityWeatherToRender) => {
                        return renderInfoItem(key, cityDetails[key]);
                    })}
                </View>
            );
        });
    };

    return (
        <View style={styleMixin.alignContentAndItemCentered}>
            {renderInfoItems()}
        </View>
    );
});

export default ExtraInfoSection;

const styles = StyleSheet.create({
    infoItemCol: {
        padding: 15,
        alignItems: 'center',
    },
});
