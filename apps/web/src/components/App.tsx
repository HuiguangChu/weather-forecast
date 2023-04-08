import React, {memo} from 'react';
import styles from './App.scss';
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";
import { useParams } from "react-router";
import Details from "./details/Details";

const App = memo(() => {
    const { cityName } = useParams();

    return (
        <div className={styles.page}>
            <Header title={cityName} />
            <div className={styles.pageMain}>
                {cityName ? <Details/> : <Dashboard/>}
            </div>
        </div>
    );
});

export default App;
