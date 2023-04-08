import * as React from 'react';
import { Provider } from 'react-redux';
import {Route, Switch} from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import {createRoot} from 'react-dom/client';
import { createBrowserHistory } from 'history';
import App from './components/App';
import { store } from './redux/store';
import { getLocation } from "./services/locationService";

// ask for location permission if not have
getLocation();

const history = createBrowserHistory();

const container = document.getElementById('react-root')!;
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/details/:cityName" component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
);
