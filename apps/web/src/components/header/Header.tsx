import React, {memo} from 'react';
import styles from '../App.scss';
interface HeaderProps {
    title: string;
}
const Header = memo(({title = 'Dashboard'}: HeaderProps) => {
   return <div className={styles.pageHeader}>
       {title}
   </div>
});

export default Header;
