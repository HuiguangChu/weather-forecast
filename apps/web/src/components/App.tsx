import React, {
    memo, Fragment, useLayoutEffect, FC,
} from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from 'common/src/services/types';
import Loading from 'common/src/components/Loading';
import styles from './App.scss';
import Dashboard from './dashboard/Dashboard';
import Header from './header/Header';
import Details from './details/Details';
import { getLocation } from '../services/locationService';

const App: FC = memo(() => {
    // ask for location permission if not have
    useLayoutEffect(() => getLocation(),
        []);

    const { cityName } = useParams();
    const { appRoot } = useSelector((state: RootState) => state);

    const renderPageBody = () => {
        if (!appRoot?.citiesDataCollection) {
            return <Loading />;
        }

        return (
            <Fragment>
                <Header title={cityName} />
                {cityName ? <Details /> : <Dashboard />}
            </Fragment>
        );
    };

    return (
        <div className={styles.page}>
            {renderPageBody()}
        </div>
    );
});

export default App;
