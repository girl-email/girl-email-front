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

  const renderLoginBtn = () => {
    return (
      <div className={styles.right_box} onClick={() => setModelVisible(true)}>
        <span>登陆</span>
      </div>
    );
  };

  const renderUser = () => {
    const name = sessionStorage.getItem('GIRL_EMAIL_NAME');
    return (
      <span className={styles.user_name}>{name}</span>
    );
  };

  return (
    <Fragment>
      <div className={styles.top_menu}>
        <span className={styles.log_span}>
          girl-email
        </span>
        {sessionStorage.getItem('GIRL_EMAIL_TOKEN') ? renderUser() : renderLoginBtn()}
      </div>
      <LoginModel visible={modelVisible} handleCloseModal={modelCancel} handleLogin={modelConfirm} />
    </Fragment>
  );
};

export default TopNav;
