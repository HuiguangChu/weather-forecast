import 'react-native-gesture-handler';
import * as React from "react";
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "../components/Dashboard";
import Details from "./Details";
const Stack = createStackNavigator();

const App = () => {
   return <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
};

export default App;
