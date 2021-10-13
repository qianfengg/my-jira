import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

export default function LoginScreen() {
  const { login } = useAuth();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} autoComplete="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input
          type="password"
          id={"password"}
          autoComplete="current-password"
        />
      </div>
      <div>
        <button type="submit">登陆</button>
      </div>
    </form>
  );
}
