import React, { FC, Fragment, useRef, useState } from 'react';
import { Modal, Input, message as msg, Form, Button, FormInstance } from 'antd';
import { USER_LOGIN, USER_REGISTER, SEND_REGISTER_EMAIL } from '@/api/api';
import styles from './index.module.less';

interface Props {
  visible: boolean
  handleCloseModal: () => void
  handleLogin: () => void
}

const LoginModel: FC<Props> = ({ visible, handleCloseModal, handleLogin }: Props) => {
  let TIMER: any = null;
  const formRef = useRef<FormInstance<any>>(null);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('登陆');
  const [okText, setOkText] = useState<string>('确定');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [auth, setAuth] = useState<string>('');
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [btnText, setBtnText] = useState<string>('发送验证码');

  const handleLoginEvent = async () => {
    setConfirmLoading(true);
    const { code, data, message } = await USER_LOGIN({
      email: username,
      password: password
    });
    if (code === 1000) {
      sessionStorage.setItem('GIRL_EMAIL_TOKEN', data.token);
      sessionStorage.setItem('GIRL_EMAIL_NAME', username);
      setConfirmLoading(false);
      handleLogin();
      msg.success('登陆成功');
    } else {
      msg.error(message);
    }
  };

  /**
   * handle register event
   */
  const queryRegister = async () => {
    setConfirmLoading(true);
    const { code, message } = await USER_REGISTER({
      code: auth,
      email: username,
      password: password
    });
    if (code === 1000) {
      msg.success('注册成功');
      handleLoginEvent();
    } else {
      msg.error(message);
    }
  };

  /**
   * handle send auth code
   */
  const sendAuthCode = async () => {
    const { code, message } = await SEND_REGISTER_EMAIL({
      email: username
    });
    if (code === 1000) {
      msg.success('发送成功');
      let s = 60;
      TIMER = setInterval(() => {
        setBtnText(`${s}秒之后重新发送`);
        s--;
        if (s === 0) {
          clearInterval(TIMER);
          setBtnText('发送验证码');
        }
      }, 1000);
    } else {
      msg.error(message);
    }
  };

  /**
   * handle click ok event
   */
  const handleOk = async () => {
    console.log(auth);
    const checkArr = isRegister ? ['userEmail', 'password', 'authCode'] : ['loginEmail', 'loginPassword'];
    formRef.current!.validateFields(checkArr).then(() => {
      if (isRegister) {
        queryRegister();
      } else {
        handleLoginEvent();
      }
    }).catch(err => {
      console.log(err);
    });
  };

  /**
   * handle click cancel event
   */
  const handleCancel = () => {
    handleCloseModal();
  };

  /**
   * handle click register event
   */
  const handleRegister = () => {
    setOkText('注册');
    setTitle('注册');
    setIsRegister(true);
  };

  const handleGoBackLogin = () => {
    setOkText('登陆');
    setTitle('登陆');
    setIsRegister(false);
  };

  /**
   * handle send auth code event
   */
  const handleSendAuthCode = () => {
    formRef.current!.validateFields(['userEmail']).then(() => {
      sendAuthCode();
    }).catch(err => {
      console.log(err);
    });
  };

  /**
   * render login model
   * @returns html
   */
  const renderLogin = () => {
    return (
      <Fragment>
        <Form
          name="login"
          ref={formRef}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="邮箱"
            name='loginEmail'
            rules={[{ required: true, message: '请输入邮箱!' }]}
          >
            <Input placeholder="请输入邮箱" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="密码"
            name='loginPassword'
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

  /**
   * render register model
   * @returns html
   */
  const renderRegister = () => {
    return (
      <Fragment>
        <Form
          name="register"
          ref={formRef}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="邮箱"
            name='userEmail'
            rules={[{ required: true, message: '请输入邮箱!' }, { type: 'email', message: '请输入正确的邮箱格式!' }]}
          >
            <Input placeholder="请输入注册邮箱" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="密码"
            name='password'
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password placeholder="请输入密码" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="验证码"
            name='authCode'
            rules={[{ required: true, message: '请输入验证码!' }]}
          >
            <div className='auth_code'>
              <Input className='auth_input' placeholder="请输入验证码" value={auth} onChange={(e) => setAuth(e.target.value)} />
              <Button disabled={btnText != '发送验证码'} onClick={() => handleSendAuthCode()}>{btnText}</Button>
            </div>
          </Form.Item>
        </Form>
        <div className={styles.model_bottom}>
          <span className={styles.back_login_btn} onClick={() => handleGoBackLogin()}>返回登陆</span>
        </div>
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
