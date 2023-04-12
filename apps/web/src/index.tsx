import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createRoot, Root } from 'react-dom/client';
import { createBrowserHistory, History } from 'history';
import { Routes } from 'common/src/services/constants';
import App from './components/App';
import store from './redux/store';

const history: History = createBrowserHistory();
const container: HTMLElement = document.getElementById('react-root');
const root: Root = createRoot(container);

root.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path={`/${Routes.CITY_DETAILS}/:cityName`} component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
);
