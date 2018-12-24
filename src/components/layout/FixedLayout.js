import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from "antd";
import './FixedLayout.less'
const { Header, Content, Footer } = Layout;
const MenuItem = Menu.Item;
const BreadcrumbItem = Breadcrumb.Item;
class ClassicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return <Layout className="layout fixed-layout-section">
            <Header className='header'>
                <div className="logo"></div>
                <Menu
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <MenuItem key="1">nav1</MenuItem>
                    <MenuItem key="2">nav2</MenuItem>
                    <MenuItem key="3">nav3</MenuItem>
                    <MenuItem key="4">nav4</MenuItem>
                </Menu>
            </Header>
            <Content className="fixed-layout-content">
                <Breadcrumb className="content-breadcrumb">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>List</BreadcrumbItem>
                    <BreadcrumbItem>App</BreadcrumbItem>
                </Breadcrumb>
                <div className="fixed-page-content">
                    Content
                </div>

            </Content>
            <Footer className="footer">
                Antd-Dome  ©2018 Created by Vivian-lin
            </Footer>
        </Layout>
    }
}
export default ClassicLayout