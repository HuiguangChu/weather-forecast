import 'react-native-gesture-handler';
import React, { FC, memo } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import RootNavigator from './RootNavigator';

const App: FC<{}> = memo(() => {
    return (
        <Provider store={store}>
            <RootNavigator />
        </Provider>
    );
});

export default App;
