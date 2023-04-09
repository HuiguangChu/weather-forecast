import React, {memo} from 'react';
import {NativeStackHeaderProps} from "@react-navigation/native-stack/src/types";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {HeaderBackButton, HeaderButtonProps} from '@react-navigation/elements';
import Dashboard from "./Dashboard";
import Details from "./Details";
import {useSelector} from "react-redux";
import {RootState} from "common/services/types";
import Loading from "common/components/Loading";

const Stack = createNativeStackNavigator();
const HeaderLeftBackButton = (props: HeaderButtonProps) =>
    <>
        {props.canGoBack &&
        <HeaderBackButton
            {...props} />}
    </>;

const RootNavigator = memo(() => {
    const appRootState = useSelector((state: RootState) => state);
    if (!appRootState?.appRoot?.citiesDataCollection) {
        return <Loading/>
    }

    return <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerLeft: (props: HeaderButtonProps) => HeaderLeftBackButton(props),
            headerStyle: {
                height: 60
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
            headerCenter: () => <Text>"test"</Text>
        }}>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={({route}: NativeStackHeaderProps) => ({
                    title: route.params.cityName,
                    headerBackVisible: true,
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
});

export default RootNavigator;
