import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CityWeatherData } from '../../services/types';

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
                <Text>{captions[title]}</Text>
                <Text style={styles.infoItemColBottom}>{info}</Text>
            </View>
        );
    };
    const renderInfoItems = () => {
        return infoItemsToDisplay.map((infoItemRow: string[], index: number) => {
            return (
                <View style={styles.infoItemRow} key={index}>
                    {infoItemRow.map((key: string) => {
                        return renderInfoItem(key, cityDetails[key]);
                    })}
                </View>
            );
        });
    };

    return (
        <View style={styles.container}>
            {renderInfoItems()}
        </View>
    );
});

export default ExtraInfoSection;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    },
    infoItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    infoItemCol: {
        padding: 15,
        alignItems: 'center',
    },
    infoItemColBottom: {
        marginTop: 5,
    },
});
