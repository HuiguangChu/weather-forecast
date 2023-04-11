import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createRoot, Root } from 'react-dom/client';
import { createBrowserHistory, History } from 'history';
import App from './components/App';
import { store } from './redux/store';

const history: History = createBrowserHistory();
const container: HTMLElement = document.getElementById('react-root');
const root: Root = createRoot(container);

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
