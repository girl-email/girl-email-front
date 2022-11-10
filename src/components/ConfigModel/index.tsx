import React, { FC, Fragment, useState } from 'react';
import { Modal, Input, message as msg, Form, Button, FormInstance } from 'antd';
import styles from './index.module.less';

interface Props {
    visible: boolean
    handleCloseModal: () => void
    handleConfirm: () => void
  }

const ConfigModel: FC<Props> = ({ visible, handleCloseModal, handleConfirm }: Props) => {
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

    const handleOk = () => {
        console.log('ok');
    };

    const handleCancel = () => {
        console.log('ok');
    };

    const renderModel = () => {
        return (
            <Modal
                title='添加配置'
                className={styles.custom_login_modal}
                open={visible}
                okText='确定'
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
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