import React, { FC } from 'react';
import styles from './index.module.less';

const TopNav: FC = () => {
 
  return (
        <div className={styles.top_menu}>
          <span className={styles.log_span}>
            girl-email
          </span>
          <div className={styles.right_box}>
            <span>登陆</span>
          </div>
        </div>
  );
};

export default TopNav;
