import React, { FC } from 'react';
import { Outlet } from 'react-router';
import TopNav from '@/components/topNav';
import styles from './index.module.less';

const LayoutPage: FC = () => {
  return (
        <div className={styles.layout_main}>
            <TopNav />
            <Outlet />
        </div>
  );
};

export default LayoutPage;
