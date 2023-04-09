import React, { memo, Fragment } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack/src/types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton, HeaderButtonProps } from '@react-navigation/elements';
import { useSelector } from 'react-redux';
import { RootState } from 'common/src/services/types';
import Loading from 'common/src/components/Loading';
import Details from './Details';
import Dashboard from './Dashboard';

const Stack = createNativeStackNavigator();
const HeaderLeftBackButton = (props: HeaderButtonProps) => (
    <Fragment>
        {props.canGoBack
        && (
            <HeaderBackButton
                {...props}
            />
        )}
    </Fragment>
);

const RootNavigator = memo(() => {
    const appRootState = useSelector((state: RootState) => state);
    if (!appRootState?.appRoot?.citiesDataCollection) {
        return <Loading />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerLeft: (props: HeaderButtonProps) => HeaderLeftBackButton(props),
                headerStyle: {
                    height: 60,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
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
