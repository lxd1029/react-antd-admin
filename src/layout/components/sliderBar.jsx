import * as React from "react";
import {Menu, Layout} from "antd";
const { Sider } = Layout;

export default class SliderBar extends React.Component{
    render() {
        return (
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" >
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" >
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" >
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" >
                        nav 4
                    </Menu.Item>
                    <Menu.Item key="5" >
                        nav 5
                    </Menu.Item>
                    <Menu.Item key="6">
                        nav 6
                    </Menu.Item>
                    <Menu.Item key="7" >
                        nav 7
                    </Menu.Item>
                    <Menu.Item key="8" >
                        nav 8
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
