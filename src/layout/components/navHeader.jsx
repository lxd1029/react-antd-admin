import * as React from "react";
import {Layout} from "antd";
const { Header } = Layout;

export default class NavHeader extends React.Component{
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }} />
        )
    }
}
