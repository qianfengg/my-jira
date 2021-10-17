import { useAuth } from "context/auth-context";
import React from "react";
import { Form, Input, Button } from "antd";

export default function RegisterScreen() {
  const { register } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="username"
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
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input
          type="password"
          id={"password"}
          autoComplete="new-password"
          placeholder={"请输入密码"}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType={"submit"} type="primary">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
}
