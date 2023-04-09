import React, { FC, memo } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

interface CityOverviewProps {
   cityName: string;
   temperature: number;
   onOpenCityDetails: (cityName: string) => void;
}

const CityOverviewCard: FC<CityOverviewProps> = memo(({ cityName, temperature, onOpenCityDetails }: CityOverviewProps) => {
    const onCityClick = () => {
        onOpenCityDetails(cityName);
    };
    return (
        <Pressable
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#eef6f8' : '#cce2f8' }, styles.item]}
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

export default CityOverviewCard;

const styles = StyleSheet.create({
    item: {
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow: 1,
    },
});
