import React, { memo } from 'react';
import styles from './App.scss';
import Counter from 'common/components/counter/Counter';

const App = memo(() => {
    return (
        <div className={styles.app}>
            <Counter />
        </div>
    );
});

export default App;
