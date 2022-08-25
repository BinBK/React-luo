import React from "react";
import { Button,  Form, Input } from "antd";
import styles from "../Login/Login.module.css";
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const onFinish = (values) => {
    navigate('/home')
    sessionStorage.setItem("userName", (values.username));
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.loginContent}>
      <div className={styles.loginBg}></div>
      <div className={styles.loginBox}>
        <h1>登录</h1>
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
            username:'Tom',
            password:'123'
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密 码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" size="large">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
