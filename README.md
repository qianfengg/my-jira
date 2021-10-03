# MY-JIRA

## 技术栈

- React + React Hooks + Typescript
- [jwt](https://jwt.io/)

## 工程化相关

- commitlint + prettier + cspell

## server 相关

- json-server
- imooc-jira-tool (`npx imooc-jira-tool`)

  - 在入口文件`index.tsx`中，这么使用

  ```tsx
  import React from "react";
  import ReactDOM from "react-dom";
  import "./index.css";
  import App from "./App";
  import reportWebVitals from "./reportWebVitals";
  import { loadDevTools } from "jira-dev-tool";

  loadDevTools(() =>
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    )
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  ```

## TIPS
