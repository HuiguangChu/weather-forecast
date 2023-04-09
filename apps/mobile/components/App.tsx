import 'react-native-gesture-handler';
import React, {memo, useLayoutEffect} from "react";
import {store} from '../redux/store';
import {Provider} from 'react-redux';
import { getLocation } from "../services/locationService";
import RootNavigator from "./RootNavigator";
const App = memo(() => {
    useLayoutEffect(() => {
        getLocation();
    }, []);

    return <Provider store={store}>
        <RootNavigator/>
    </Provider>
});

export default App;
