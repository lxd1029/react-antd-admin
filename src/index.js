import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './styles/index.less'
import RouterView from './router'
import App from './App';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <RouterView />
    </ConfigProvider>,
  document.getElementById('root')
);

