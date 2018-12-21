// src/App.js
import React, { Component } from 'react';
import { Button, LocaleProvider, Icon } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import './App.less'
import ClassicLayout from './components/layout/ClassicLayout'
import TopSideLayout from './components/layout/TopSideLayout'
import TopSideBannerLayout from './components/layout/TopSideBannerLayout'
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
        const visibleNum = this.state.visibleNum
        return (
            <LocaleProvider locale={zh_CN}>
                <div>
                    <div className="layout-change-button"
                        style={{}}
                    >
                        <Button type="primary" onClick={this.handleChange.bind(this, 1)}><Icon type="home" />我是布局一</Button>
                        <Button type="primary" onClick={this.handleChange.bind(this, 2)}>我是布局二</Button>
                        <Button type="primary" onClick={this.handleChange.bind(this, 3)}>我是布局三</Button>
                    </div>
                    {
                        visibleNum === 1 && <ClassicLayout></ClassicLayout>
                    }
                    {
                        visibleNum === 2 && <TopSideLayout></TopSideLayout>
                    }
                    {
                        visibleNum === 3 && <TopSideBannerLayout></TopSideBannerLayout>
                    }
                </div>

            </LocaleProvider>

        );
    }
}

export default App;