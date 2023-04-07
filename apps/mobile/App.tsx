import Home from "./Home";
import 'react-native-gesture-handler';
import * as React from "react";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
   return <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
};

export default App;
