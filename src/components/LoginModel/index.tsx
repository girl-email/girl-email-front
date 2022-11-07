import React, { FC, Fragment, useEffect, useState } from 'react';
import { Modal, Input, message as msg, Form, Button } from 'antd';
import styles from './index.module.less';

interface Props {
  visible: boolean
  handleCloseModal: () => void
  handleLogin: () => void
}

const LoginModel: FC<Props> = ({ visible }: Props) => {
  let TIMER: any = null;
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('登陆');
  const [okText, setOkText] = useState<string>('确定');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [auth, setAuth] = useState<string>('');
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [btnText, setBtnText] = useState<string>('发送验证码');

  const handleOk = async () => {
    console.log(123);

  };

  const handleCancel = () => {
    console.log(123);
  };

  const handleRegister = () => {
    setOkText('注册');
    setTitle('注册');
    setIsRegister(true);
  };

  const handleSendAuthCode = () => {
    let s = 60;
    TIMER = setInterval(() => {
      setBtnText(`${s}秒之后重新发送`);
      s--;
      if(s === 0) {
        clearInterval(TIMER);
        setBtnText('发送验证码');
      }
    }, 1000);
  };

  const renderLogin = () => {
    return (
      <Fragment>
        <Form
          name="login"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="邮箱"
            rules={[{ required: true, message: '请输入邮箱!' }]}
          >
            <Input placeholder="请输入邮箱" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="密码"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password placeholder="请输入密码" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
        </Form>
        <div className={styles.operation}>
          <span className={styles.register_btn} onClick={() => handleRegister()}>点击注册</span>
        </div>
      </Fragment>
    );
  };

  const renderRegister = () => {
    return (
      <Fragment>
        <Form
          name="register"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="邮箱"
            rules={[{ required: true, message: '请输入邮箱!' }, { type: 'email', message: '请输入正确的邮箱格式!' }]}
          >
            <Input placeholder="请输入注册邮箱" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="密码"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password placeholder="请输入密码" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="验证码"
            rules={[{ required: true, message: '请输入验证码!' }]}
          >
            <Input className='auth_input' placeholder="请输入验证码" value={auth} onChange={(e) => setAuth(e.target.value)} />
            <Button disabled={btnText != '发送验证码'} onClick={() => handleSendAuthCode()}>{btnText}</Button>
          </Form.Item>
        </Form>
      </Fragment>
    );
  };

  const renderModel = () => {
    return (
      <Modal
        title={title}
        className={styles.custom_login_modal}
        open={visible}
        okText={okText}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {isRegister ? renderRegister() : renderLogin()}
      </Modal>
    );
  };

  return (
    <Fragment>
      {renderModel()}
    </Fragment>
  );
};

export default LoginModel;
