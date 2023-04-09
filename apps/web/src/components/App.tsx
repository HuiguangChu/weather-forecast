import React, {memo, Fragment} from 'react';
import styles from './App.scss';
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";
import { useParams } from "react-router";
import Details from "./details/Details";
import {useSelector} from "react-redux";
import {RootState} from "common/services/types";
import Loading from "common/components/Loading";

const App = memo(() => {
    const { cityName } = useParams();
    const { appRoot } = useSelector((state: RootState) => state);

    const renderPageBody = () => {
        if (!appRoot?.citiesDataCollection) {
            return <Loading/>
        }

        return (<Fragment>
                <Header title={cityName} />
                <div className={styles.pageMain}>
                    {cityName ? <Details/> : <Dashboard/>}
                </div>
        </Fragment>);
    };

    return (
        <div className={styles.page}>
            {renderPageBody()}
        </div>
    );
});

export default App;
