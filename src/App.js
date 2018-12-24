// src/App.js
import React, { Component } from 'react';
import { LocaleProvider, Icon, Tabs } from 'antd';

import zh_CN from 'antd/lib/locale-provider/zh_CN'
import './App.less'
import ClassicLayout from './components/layout/ClassicLayout'
import TopSideLayout from './components/layout/TopSideLayout'
import TopSideBannerLayout from './components/layout/TopSideBannerLayout'
import SideLayout from './components/layout/SideLayout'
const { TabPane } = Tabs

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleNum: 3
        }
    }
    handleChange = (num) => {
        this.setState({
            visibleNum: num
        })
    }
    render() {

        return (
            <LocaleProvider locale={zh_CN}>
                <div>
                    <Tabs defaultActiveKey="4">
                        <TabPane tab={<span><Icon type="home" />我是上中下布局</span>} key="1">
                            <ClassicLayout></ClassicLayout>
                        </TabPane>
                        <TabPane tab={<span>我是顶部-侧边-通栏布局</span>} key="2">
                            <TopSideLayout></TopSideLayout>
                        </TabPane>
                        <TabPane tab={<span>我是顶部-侧边布局</span>} key="3">
                            <TopSideBannerLayout></TopSideBannerLayout>
                        </TabPane>
                        <TabPane tab={<span>我是侧边布局</span>} key="4">
                            <SideLayout></SideLayout>
                        </TabPane>
                        <TabPane tab={<span>我是上中下布局</span>} key="5">
                            <SideLayout></SideLayout>
                        </TabPane>
                    </Tabs>
                </div>

            </LocaleProvider>

        );
    }
}

export default App;