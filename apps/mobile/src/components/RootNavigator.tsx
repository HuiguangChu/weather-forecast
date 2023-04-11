import React, {
    memo, useLayoutEffect, FC,
} from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack/src/types';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton, HeaderBackButtonProps } from '@react-navigation/elements';
import { useSelector } from 'react-redux';
import { RootState } from 'common/src/services/types';
import Loading from 'common/src/components/Loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details';
import Dashboard from './Dashboard';
import getLocation from '../services/locationService';

const Stack = createNativeStackNavigator();

const RootNavigator: FC = memo(() => {
    useLayoutEffect(() => {
        getLocation();
    }, []);

    const appRootState: RootState = useSelector((state: RootState) => state);
    if (!appRootState?.appRoot?.citiesDataCollection) {
        return <Loading />;
    }
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
                headerStyle: {
                    height: 60,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 18,
                },
                headerTitleAlign: 'center',
            }}
            >
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
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
