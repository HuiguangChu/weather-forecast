import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from '../App.scss';

interface HeaderProps {
    title: string;
}
const Header = memo(({ title }: HeaderProps) => {
    return (
        <header className={styles.pageHeader}>
            <Link to="/" className={styles.goBackButton} aria-label="Go back to dashboard">
                {title && <FontAwesomeIcon icon={faArrowLeft} />}
            </Link>
            <span>{title || 'Dashboard' }</span>
        </header>
    );
});

export default Header;
