import React, { Fragment } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styles from './index.module.less';

interface updateTaskConfig {
    createTime: string;
    updateTime: string;
    email_subject: string;
    startDay: string;
    from_user: string;
    from_email: string;
    to_user: string;
    to_email: string;
    city: string;
    id: number
}

const data: updateTaskConfig[] = [
    {
        createTime: '2022-11-20',
        updateTime: '2022-11-20',
        email_subject: '测试邮件标题',
        startDay: '2022-11-20',
        from_user: 'string',
        from_email: 'string',
        to_user: 'string',
        to_email: 'string',
        city: 'string',
        id: 1
    },
    {
        createTime: '2022-11-20',
        updateTime: '2022-11-20',
        email_subject: '测试邮件标题',
        startDay: '2022-11-20',
        from_user: 'string',
        from_email: 'string',
        to_user: 'string',
        to_email: 'string',
        city: 'string',
        id: 2
    },
    {
        createTime: '2022-11-20',
        updateTime: '2022-11-20',
        email_subject: '测试邮件标题',
        startDay: '2022-11-20',
        from_user: 'string',
        from_email: 'string',
        to_user: 'string',
        to_email: 'string',
        city: 'string',
        id: 3
    }
];

const columns: ColumnsType<updateTaskConfig> = [
    {
        title: '标题',
        dataIndex: 'email_subject',
        render: text => <p>{text}</p>,
        width: 75,
        ellipsis: true,
    },
    {
        title: '发件人',
        dataIndex: 'from_user',
        render: text => <p>{text}</p>,
        width: 75,
        ellipsis: true,
    },
    {
        title: '收件人',
        dataIndex: 'to_user',
        render: text => <p>{text}</p>,
        width: 75,
        ellipsis: true,
    },
    {
        title: '收件人邮箱',
        dataIndex: 'to_email',
        render: text => <p>{text}</p>,
        width: 75,
        ellipsis: true,
    },
    {
        title: '收件人地址',
        dataIndex: 'city',
        render: text => <p>{text}</p>,
        width: 75,
        ellipsis: true,
    },
    {
        title: '纪念日',
        dataIndex: 'startDay',
        render: text => <p>{text}</p>,
        width: 75,
        ellipsis: true,
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        render: text => <p>{text}</p>,
        width: 75,
        ellipsis: true,
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        render: text => <p>{text}</p>,
        width: 75,
        ellipsis: true,
    },
];

const { Column } = Table;

const Home = () => {

    const renderTaskCard = () => {
        return (
            <Table columns={columns} dataSource={data} rowKey={record => record.id}>
            </Table>
        );
    };

    return (
        <Fragment>
            <div className={styles.home_main}>
                {renderTaskCard()}
            </div>
        </Fragment>
    );
};

export default Home;