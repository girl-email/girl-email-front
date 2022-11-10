import React, { FC, Fragment, useState } from 'react';
import { useNavigate } from 'react-router';
import { Menu, Button } from 'antd';
import './index.less';
import ConfigModel from '../ConfigModel';

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
    const [visible, setVisible] = useState<boolean>(false);

    const handleModelOk = () => {
        console.log(123);
    };

    const handleModelCancel = () => {
        console.log(321);
    };

    const navigate = useNavigate();

    return (
        <Fragment>
            <div className='left_menu'>
                <Menu style={{ width: '200px', height: 'calc(100% - 50px)', padding: '0 12px' }} items={items} defaultSelectedKeys={['/layout/home']} onClick={(item) => navigate(item.key)} />
                <div className='bottom-menu'>
                    <Button type='primary' onClick={() => setVisible(true)}>添加配置</Button>
                </div>
            </div>
            <ConfigModel visible={visible} handleCloseModal={handleModelCancel} handleConfirm={handleModelOk} />
        </Fragment>
    );
};

export default LeftMenu;