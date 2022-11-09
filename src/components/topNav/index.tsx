import React, { FC, Fragment, useState } from 'react';
import LoginModel from '../LoginModel';
import styles from './index.module.less';

const TopNav: FC = () => {
  const [modelVisible, setModelVisible] = useState<boolean>(false);

  const modelCancel = () => {
    setModelVisible(false);
  };

  const modelConfirm = () => {
    setModelVisible(false);
  };

  return (
    <Fragment>
      <div className={styles.top_menu}>
        <span className={styles.log_span}>
          girl-email
        </span>
        <div className={styles.right_box} onClick={() => setModelVisible(true)}>
          <span>登陆</span>
        </div>
      </div>
      <LoginModel visible={modelVisible} handleCloseModal={modelCancel} handleLogin={modelConfirm} />
    </Fragment>
  );
};

export default TopNav;
