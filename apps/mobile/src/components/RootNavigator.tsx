import React, {
    memo, FC,
} from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack/src/types';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton, HeaderBackButtonProps } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from 'common/src/services/constants';
import CityDetails from './CityDetails';
import Dashboard from './Dashboard';

const Stack = createNativeStackNavigator();

const RootNavigator: FC = memo(() => {
    const renderHeaderLeft = (canGoBack: boolean) => (
        canGoBack
            && (
                <HeaderBackButton canGoBack={canGoBack} />
            )
    );

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerLeft: ({ canGoBack }: HeaderBackButtonProps) => renderHeaderLeft(canGoBack),
                headerTitleStyle: {
                    fontWeight: '500',
                    fontSize: 18,
                },
                headerTitleAlign: 'center',
                initialRouteName: Routes.LOCATIONS,
            }}
            >
                <Stack.Screen
                    name={Routes.LOCATIONS}
                    component={Dashboard}
                    options={{ title: 'Locations' }}
                />
                <Stack.Screen
                    name={Routes.CITY_DETAILS}
                    component={CityDetails}
                    options={({ route }: NativeStackHeaderProps) => ({
                        title: route.params.cityName,
                        headerBackVisible: true,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
});

export default RootNavigator;
