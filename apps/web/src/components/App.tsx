import React, { memo } from 'react';
import styles from './App.scss';
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";

const App = memo(() => {
    return (
        <div className={styles.page}>
            <header>
                <Header/>
            </header>
            <main>
                <Dashboard />
            </main>

        </div>
    );
});

export default App;
