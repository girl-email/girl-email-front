import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { Menu } from 'antd';
import './index.less';

const LeftMenu: FC = () => {
    const items = [
        {
            label: '发送邮件',
            key: '/layout/home',
        },
        {
            label: '任务列表',
            key: '/layout/task',
        }
    ];

    const navigate = useNavigate();

    return (
        <div className='left_menu'>
            <Menu style={{ width: '200px', height: '100%', padding: '0 12px' }} items={items} defaultSelectedKeys={['/layout/home']} onClick={(item) => navigate(item.key)} />
        </div>
    );
};

export default LeftMenu;