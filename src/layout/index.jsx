import { Layout } from 'antd';
import * as React from "react";
import SliderBar from './components/sliderBar'
import NavHeader from "./components/navHeader";
import {Link} from 'react-router-dom'
const { Content, Footer } = Layout;

export default class WrapContainer extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <Layout>
                <SliderBar />
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <NavHeader />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            <Link to='/404'>404</Link>
                            <Link to='/login'>login</Link>
                            <Link to='/dashboard'>dashboard</Link>
                            <Link to='/echarts'>echarts</Link>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
