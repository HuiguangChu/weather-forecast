import React, { FC, memo } from 'react';
import { StyleSheet, Pressable, PressableProps } from 'react-native';
import styleMixin from '../stylesMixin';
import StyledText from '../StyledText';

interface CityOverviewProps {
   cityName: string;
   temperature: number;
   onOpenCityDetails: (cityName: string) => void;
}

const OverviewCard: FC<CityOverviewProps> = memo(({ cityName, temperature, onOpenCityDetails }: CityOverviewProps) => {
    const onCityCardClick = () => {
        // We might need to set current active city name in reducer later on
        onOpenCityDetails(cityName);
    };

    return (
        <Pressable
            style={({ pressed, hovered }: PressableProps) => [
                { backgroundColor: pressed || hovered ? '#f9f9f9' : '#ffffff' },
                styleMixin.flexRowWithSpaceBetween,
                styles.cityCard]}
            onPress={onCityCardClick}
            aria-label="Open city details"
            accessibilityHint="Navigates to the city details view"
            role="link"
        >
            <StyledText content={cityName} />
            <StyledText>
                {temperature}
                {' '}
                &#8451;
            </StyledText>
        </Pressable>
    );
});

export default OverviewCard;

const styles = StyleSheet.create({
    cityCard: {
        padding: 30,
        marginVertical: 5,
        marginHorizontal: 10,
        flexGrow: 1,
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 3,
        shadowOpacity: 0.3,
        elevation: 3,
    },
});
