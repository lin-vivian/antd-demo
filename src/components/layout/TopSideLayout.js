import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import './TopSideLayout.less'
const { Header, Content, Footer, Sider } = Layout;
const MenuItem = Menu.Item;
const BreadcrumbItem = Breadcrumb.Item;
const { SubMenu } = Menu
const menuIcon = {
    sub1: 'user',
    sub2: 'laptop',
    sub3: 'notification',
    sub4: 'notification'
}
const menuItemsList = [
    {
        key: 'sub1',
        text: 'subnav 1',
        items: [{
            key: 1,
            text: 'option1'
        }, {
            key: 2,
            text: 'option2'
        }, {
            key: 3,
            text: 'option3'
        }, {
            key: 4,
            text: 'option4'
        }]
    }, {
        key: 'sub2',
        text: 'subnav 2',
        items: [{
            key: 5,
            text: 'option5'
        }, {
            key: 6,
            text: 'option6'
        }, {
            key: 7,
            text: 'option7'
        }, {
            key: 8,
            text: 'option8'
        }]
    }, {
        key: 'sub3',
        text: 'subnav 3',
        items: [{
            key: 9,
            text: 'option9',
            items: [{
                key: 91,
                text: 'option91'
            }, {
                key: 92,
                text: 'option92'
            }, {
                key: 93,
                text: 'option93'
            }, {
                key: 94,
                text: 'option94'
            }]
        }, {
            key: 10,
            text: 'option10'
        }, {
            key: 11,
            text: 'option11'
        }, {
            key: 12,
            text: 'option12'
        }]
    }, {
        key: 'sub4',
        text: 'subnav 4',
    }
]
class TopSideLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    MenuCom = (props) => {
        return props && props.map((v) => {
            if (v.items) {
                return <SubMenu
                    key={v.key}
                    title={<span>
                        <Icon type={menuIcon[v.key] || 'smile'} />
                        {v.text}
                    </span>}
                >
                    {this.MenuCom(v.items)}
                </SubMenu>
            } else {
                return <MenuItem key={v.key}>
                    {v.text}
                </MenuItem>
            }
        })

    }
    render() {
        return <Layout className="top-side-layout">
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
            <Layout>
                <Sider className='top-side-layout-sider'>
                    <Menu
                        mode='inline'
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ borderRight: 0 }}
                    >
                        {this.MenuCom(menuItemsList)}
                    </Menu>
                </Sider>
                <Layout className="top-side-layout-content">
                    <Breadcrumb className="content-breadcrumb">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>List</BreadcrumbItem>
                        <BreadcrumbItem>App</BreadcrumbItem>
                    </Breadcrumb>
                    <Content className="content">
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
            <Footer className="classic-footer">
                Antd-Dome  ©2018 Created by Vivian-lin
            </Footer>
        </Layout>

    }
}
export default TopSideLayout
