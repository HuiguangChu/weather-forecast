import React, { FC, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from '../App.scss';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = memo(({ title }: HeaderProps) => {
    return (
        <header className={styles.pageHeader}>
            <Link to="/" className={styles.goBackButton} aria-label="Go back to locations page" role="link">
                {title && <FontAwesomeIcon icon={faArrowLeft} />}
            </Link>
            <h4>{title || 'Locations' }</h4>
        </header>
    );
});

export default Header;
