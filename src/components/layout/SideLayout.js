import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import './SideLayout.less'
const { Header, Content, Footer, Sider } = Layout;
const MenuItem = Menu.Item;
const BreadcrumbItem = Breadcrumb.Item;
const { SubMenu } = Menu
const menuIcon = {
    sub1: 'user',
    sub2: 'laptop',
    sub3: 'notification',
    sub4: 'apple'
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
class TopSideBannerLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    MenuCom = (props) => {
        return props && props.map((v) => {
            if (v.items) {
                return <SubMenu
                    key={v.key}
                    title={<span>
                        <Icon type={menuIcon[v.key]} spin />
                        <span>{v.text}</span>
                    </span>}
                >
                    {this.MenuCom(v.items)}
                </SubMenu>
            } else {
                return <MenuItem key={v.key}>
                    <Icon type={menuIcon[v.key]} />
                    <span>{v.text}</span>
                </MenuItem>
            }
        })

    }

    handleCollapse = (collapsed) => {
        this.setState({
            collapsed
        })
    }
    toggleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render() {
        const { collapsed } = this.state
        return <Layout className="side-layout">
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={this.handleCollapse}
            >
                <div className="logo"></div>
                <Menu
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                >
                    {this.MenuCom(menuItemsList)}
                </Menu>
            </Sider>
            <Layout className="side-layout-content">
                <Header className="header">
                    <Icon
                        className='menu-trigger'
                        type={collapsed ? "menu-unfold" : 'menu-fold'}
                        onClick={this.toggleCollapse}
                    />
                </Header>
                <Breadcrumb className="content-breadcrumb">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>List</BreadcrumbItem>
                    <BreadcrumbItem>App</BreadcrumbItem>
                </Breadcrumb>
                <Content className="content">

                    <div>
                        Content
                    </div>

                </Content>
                <Footer className="footer">
                    Antd-Dome  ©2018 Created by Vivian-lin
                </Footer>
            </Layout>

        </Layout>

    }
}
export default TopSideBannerLayout
