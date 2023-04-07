import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import {createRoot} from 'react-dom/client';

import { createBrowserHistory } from 'history';
import App from './components/App';
import { store } from './redux/store';

const history = createBrowserHistory();

const container = document.getElementById('react-root')!;
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App} />
        </ConnectedRouter>
    </Provider>,
);
