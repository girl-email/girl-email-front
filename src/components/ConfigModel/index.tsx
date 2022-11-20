import React, { FC, Fragment, useState, useRef } from 'react';
import { Modal, Input, message as msg, Form, FormInstance, DatePicker } from 'antd';
import { SEND_TASK_CONFIG } from '@/api/api';
import styles from './index.module.less';

interface Props {
    visible: boolean
    handleCloseModal: () => void
    handleConfirm: () => void
}

interface Res {
    sendName: string
    city: string
    call: string
    receiveEmail: string
    memorial: string
    title: string
}

const ConfigModel: FC<Props> = ({ visible, handleCloseModal, handleConfirm }: Props) => {
    const formRef = useRef<FormInstance<any>>(null);
    const checkList = ['receiveEmail', 'call', 'memorial', 'city', 'title'];
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

    const handleOk = () => {
        formRef.current!.validateFields(checkList).then(res => {
            console.log(res);
            handleSendTaskCfg(res);
        }).catch(err => {
            console.log(err);
        });
    };

    const handleSendTaskCfg = async (res: Res) => {
        setConfirmLoading(true);
        const { code, message } = await SEND_TASK_CONFIG({
            from_user: res.sendName,
            from_email: 'xiaobo21@163.com',
            city: res.city,
            to_user: res.call,
            to_email: res.receiveEmail,
            startDay: res.memorial,
            email_subject: res.title
        });
        if(code === 1000) {
            setConfirmLoading(false);
            msg.success('配置创建成功');
        } else {
            setConfirmLoading(false);
            msg.error(message);
        }
    };

    const handleCancel = () => {
        handleCloseModal();
    };

    const renderConfigModel = () => {
        return (
            <Form
                name="config"
                ref={formRef}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="发送人"
                    name='sendName'
                    rules={[{ required: true, message: '请输入发送人!' }]}
                >
                    <Input placeholder="请输入发送人" />
                </Form.Item>
                <Form.Item
                    label="接收人邮箱"
                    name='receiveEmail'
                    rules={[{ required: true, message: '请输入接收人邮箱!' }, { type: 'email', message: '请输入正确的邮箱格式!' }]}
                >
                    <Input placeholder="请输入接收人邮箱" />
                </Form.Item>
                <Form.Item
                    label="称呼"
                    name='call'
                    rules={[{ required: true, message: '请输入称呼!' }]}
                >
                    <Input placeholder="请输入称呼" />
                </Form.Item>
                <Form.Item
                    label="纪念日"
                    name='memorial'
                    rules={[{ required: true, message: '请输入纪念日!' }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="对方所在城市"
                    name='city'
                    rules={[{ required: true, message: '请输入对方所在城市!' }]}
                >
                    <Input placeholder="请输入对方所在城市" />
                </Form.Item>
                <Form.Item
                    label="邮件标题"
                    name='title'
                    rules={[{ required: true, message: '请输入邮件标题!' }]}
                >
                    <Input placeholder="请输入邮件标题" />
                </Form.Item>
            </Form>
        );
    };

    const renderModel = () => {
        return (
            <Modal
                title='添加配置'
                className={styles.custom_login_modal}
                open={visible}
                okText='确定'
                destroyOnClose={true}
                maskClosable={false}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                {renderConfigModel()}
            </Modal>
        );
    };

    return (
        <Fragment>
            {renderModel()}
        </Fragment>
    );
};

export default ConfigModel;