import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { Menu, Button } from 'antd';
import './index.less';

const LeftMenu: FC = () => {
    const items = [
        {
            label: '配置列表',
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
            <Menu style={{ width: '200px', height: 'calc(100% - 50px)', padding: '0 12px' }} items={items} defaultSelectedKeys={['/layout/home']} onClick={(item) => navigate(item.key)} />
            <div className='bottom-menu'>
                <Button type='primary'>添加配置</Button>
            </div>
        </div>
    );
};

export default LeftMenu;