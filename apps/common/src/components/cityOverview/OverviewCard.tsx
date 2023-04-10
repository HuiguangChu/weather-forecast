import React, { FC, memo } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import styleMixin from '../stylesMixin';

interface CityOverviewProps {
   cityName: string;
   temperature: number;
   onOpenCityDetails: (cityName: string) => void;
}

const OverviewCard: FC<CityOverviewProps> = memo(({ cityName, temperature, onOpenCityDetails }: CityOverviewProps) => {
    const onCityClick = () => {
        onOpenCityDetails(cityName);
    };

    return (
        <Pressable
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#eef6f8' : '#cce2f8' },
                styleMixin.flexRowWithSpaceBetween,
                styles.cityCard]}
            onPress={onCityClick}
            accessibilityLabel="Go back"
            accessibilityHint="Navigates to the previous screen"
            accessibilityRole="link"
        >
            <Text>{cityName}</Text>
            <Text>
                {temperature}
                {' '}
                &#8451;
            </Text>
        </Pressable>
    );
});

export default OverviewCard;

const styles = StyleSheet.create({
    cityCard: {
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 16,
        flexGrow: 1,
    },
});
