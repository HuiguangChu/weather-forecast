import 'react-native-gesture-handler';
import React, { memo } from "react";
import {store} from '../redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {HeaderBackButton} from '@react-navigation/elements';


import Dashboard from "../components/Dashboard";
import Details from "./Details";
const Stack = createNativeStackNavigator();

const App = () => {
    return <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerLeft: (props) => {
                    return (
                        <>
                            {props.canGoBack &&
                            <HeaderBackButton
                                {...props} />}
                        </>
                    );
                },
                headerStyle: {
                    height: 60
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
            }}>
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        headerBackVisible: false
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={({route}) => ({
                        title: route.params.name,
                        headerBackVisible: true,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
};

export default App;
