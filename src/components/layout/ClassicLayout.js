import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Affix } from "antd";
import './ClassicLayout.less'
import ButtonComp from "../content/Button/index";
import FetchData from '../../contains/index'
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
        return <Layout className="layout classic-layout-section">
            <Affix offsetTop='0'>
                <Header>
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
            </Affix>

            <Content className="classic-layout-content">
                <Breadcrumb className="content-breadcrumb">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>List</BreadcrumbItem>
                    <BreadcrumbItem>App</BreadcrumbItem>
                </Breadcrumb>
                <div className="classic-page-content">
                    <ButtonComp></ButtonComp>
                    <FetchData></FetchData>
                </div>

            </Content>

            <Footer className="classic-footer">
                Antd-Dome  ©2018 Created by Vivian-lin
            </Footer>
        </Layout>
    }
}
export default ClassicLayout