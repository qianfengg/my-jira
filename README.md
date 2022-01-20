# MY-JIRA

## 技术栈

- React + React Hooks + Typescript
- Ant Design
- [jwt](https://jwt.io/)
- [emotion](https://emotion.sh/docs/introduction) - vscode 插件安装（vscode-styled-components
  ）
- dayjs

## 工程化相关

- commitlint + prettier + cspell

## server 相关

- json-server
- jira-dev-tool@next (`yarn add jira-dev-tool@next`)

```tsx
// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadServer, DevTools } from "jira-dev-tool";
import AppProviders from "context";

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

```tsx
// context/index.tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./auth-context";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
```

## 其他

- [React-Router6 版本的更新引起的路由用法变化](https://zhuanlan.zhihu.com/p/458799339)
