import React, { memo } from 'react';
import styles from './Loading.scss';

const Loading = memo(() =>  {
    return <p className={styles.loadingWrapper}>Loading...</p>;
});

export default Loading;
