import React, { memo, Fragment } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from 'common/src/services/types';
import Loading from 'common/src/components/Loading';
import styles from './App.scss';
import Dashboard from './dashboard/Dashboard';
import Header from './header/Header';
import Details from './details/Details';

const App = memo(() => {
    const { cityName } = useParams();
    const { appRoot } = useSelector((state: RootState) => state);

    const renderPageBody = () => {
        if (!appRoot?.citiesDataCollection) {
            return <Loading />;
        }

        return (
            <Fragment>
                <Header title={cityName} />
                <div className={styles.pageMain}>
                    {cityName ? <Details /> : <Dashboard />}
                </div>
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
