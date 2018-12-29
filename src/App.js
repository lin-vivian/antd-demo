// src/App.js
import React, { Component } from 'react';
import { LocaleProvider, Icon, Tabs } from 'antd';

import zh_CN from 'antd/lib/locale-provider/zh_CN'
import './App.less'
import ClassicLayout from './components/layout/ClassicLayout'
import TopSideLayout from './components/layout/TopSideLayout'
import TopSideBannerLayout from './components/layout/TopSideBannerLayout'
import SideLayout from './components/layout/SideLayout'
import ResponsiveSideLayout from './components/layout/ResponsiveSideLayout'
import FixedLayout from './components/layout/FixedLayout'
import FixedSideLayout from "./components/layout/FixedSideLayout";

import IconCom from "./components/content/Icon/index";
const { TabPane } = Tabs

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleNum: 1,
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
                <div className='container'>
                    <Tabs defaultActiveKey="2">
                        <TabPane tab={<span><Icon type="home" />我是上中下布局</span>} key="1">
                            <ClassicLayout></ClassicLayout>
                        </TabPane>
                        <TabPane tab={<span><Icon type="setting" theme='filled' />我是顶部-侧边-通栏布局</span>} key="2">
                            <TopSideLayout>
                                <IconCom></IconCom>
                            </TopSideLayout>
                        </TabPane>
                        <TabPane tab={<span><Icon type="smile" theme='outlined' />我是顶部-侧边布局</span>} key="3">
                            <TopSideBannerLayout>

                            </TopSideBannerLayout>
                        </TabPane>
                        <TabPane tab={<span><Icon type="sync" spin />我是侧边布局</span>} key="4">
                            <SideLayout></SideLayout>
                        </TabPane>
                        <TabPane tab={<span><Icon type='loading' />我是响应布局</span>} key="5">
                            <ResponsiveSideLayout></ResponsiveSideLayout>
                        </TabPane>
                        <TabPane tab={<span><Icon type="eye" />我是固定头部布局</span>} key="6">
                            <FixedLayout></FixedLayout>
                        </TabPane>
                        <TabPane tab={<span>我是固定侧边布局</span>} key="7">
                            <FixedSideLayout> </FixedSideLayout>
                        </TabPane>
                    </Tabs>
                </div>

            </LocaleProvider>

        );
    }
}

export default App;