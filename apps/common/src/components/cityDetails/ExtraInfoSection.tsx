import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { CityWeatherData } from '../../services/types';
import styleMixin from '../stylesMixin';
import StyledText from '../StyledText';

interface ExtraInfoSectionProps {
    cityDetails: CityWeatherData;
}

const ExtraInfoSection = memo(({ cityDetails }: ExtraInfoSectionProps) => {
    const infoItemsToDisplay = [
        ['sunriseTime', 'sunsetTime'],
        ['humidity', 'visibility'],
    ];
    const captions = {
        sunriseTime: 'Sunrise',
        sunsetTime: 'Sunset',
        humidity: 'Humidity',
        visibility: 'Visibility',
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
        return infoItemsToDisplay.map((infoItemRow: string[]) => {
            return (
                <View style={styleMixin.flexRowWithSpaceBetween} key={infoItemRow}>
                    {infoItemRow.map((key: string) => {
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
