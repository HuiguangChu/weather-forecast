import 'react-native-gesture-handler';
import React, { memo, useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { getLocation } from '../services/locationService';
import RootNavigator from './RootNavigator';

const App = memo(() => {
    useLayoutEffect(() => {
        getLocation();
    }, []);

    return (
        <Provider store={store}>
            <RootNavigator />
        </Provider>
    );
});

export default App;
