import { useState } from 'react';
import styles from './index.module.less';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import bgUrl from './images/loginBg.png';

const LoginPage = () => {
  const [active, setActive] = useState(true);

  const onFinish = (values: any) => {
    const { username, remember } = values;
    console.log(username);
    if (remember) {
      //   storage.set("username", username);
    }
  };
  return (
    <div className={styles.root} style={{ backgroundImage: `url(${bgUrl})` }}>
      {/* 登录 */}
      <div
        className={`${styles.container} ${
          active ? styles['right-panel-active'] : ''
        }`}
      >
        <div
          className={`${styles.container_from} ${styles['container--signup']}`}
        >
          <Form
            name="normal_login"
            className={styles.form}
            initialValues={{
              remember: true,
              //   username: storage.get("username"),
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot">Forgot password</a>
            </Form.Item>

            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* 注册 */}
        <div
          className={`${styles.container_from} ${styles['container--signin']}`}
        >
          <div className={styles.form}>模块正在抓紧研发中</div>
        </div>
        <div className={styles.container_overlay}>
          <div
            className={styles.overlay}
            style={{ backgroundImage: `url(${bgUrl})` }}
          >
            <div
              className={`${styles.overlay_panel} ${styles['overlay--left']}`}
            >
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  setActive(false);
                }}
              >
                没有账号，点击注册
              </Button>
            </div>
            <div
              className={`${styles.overlay_panel} ${styles['overlay--right']}`}
            >
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  setActive(true);
                }}
              >
                已有账号，直接登录
              </Button>
            </div>
          </div>
        </div>
      </div>
      ·
    </div>
  );
};
export default LoginPage;
