import { useAuth } from "context/auth-context";
import React from "react";
import { Form, Input, Button } from "antd";

export default function LoginScreen() {
  const { login } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input
          type="text"
          id={"username"}
          autoComplete="username"
          placeholder={"请输入用户名"}
        />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input
          placeholder={"请输入密码"}
          type="password"
          id={"password"}
          autoComplete="current-password"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType={"submit"} type={"primary"}>
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
}
