import React, { FC, Fragment, useEffect, useState } from 'react';
import { Modal, Input, message as msg } from 'antd';
import styles from './index.module.less';

interface Props {
  visible: boolean
  handleCloseModal: () => void
  handleLogin: () => void
}

const LoginModel: FC<Props> = ({ visible }: Props) => {
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleOk = async () => {
    console.log(123);

  };

  const handleCancel = () => {
    console.log(123);
  };

  const renderLogin = () => {
    return (
      <Modal
        title="登陆"
        className={styles.custom_login_modal}
        open={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Fragment>
          <div className={styles.user_name}>
            <span className={styles.name_text}>邮箱：</span>
            <Input placeholder="请输入邮箱" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className={styles.user_password}>
            <span className={styles.password_text}>密码：</span>
            <Input.Password placeholder="请输入密码" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className={styles.operation}>
            <span className={styles.register_btn}>点击注册</span>
          </div>
        </Fragment>
      </Modal>
    );
  };

  return (
    <Fragment>
      { renderLogin() }
    </Fragment>
  );
};

export default LoginModel;
