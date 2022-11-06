import React, { FC } from 'react';
import { Outlet } from 'react-router';
import TopNav from '@/components/topNav';
import LeftMenu from '@/components/LeftMenu';
import styles from './index.module.less';

const LayoutPage: FC = () => {
  return (
    <div className={styles.layout_main}>
      <TopNav />
      <div className={styles.layout_body}>
        <LeftMenu />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
