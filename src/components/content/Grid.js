import React, { Component } from 'react';
import { Row, Col, Icon, Slider } from "antd";
import './Grid.less';
import { Object } from 'core-js';
class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gutterNum: 1,
            colNum: 2
        }
    }
    getArrow = (num) => {
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push(i)
        }
        return arr && arr.map((v) => {
            return <Icon type="arrow-down" key={v} style={{ color: '#f757ba' }} />
        })
    }

    handleGutter = (gutterNum) => {
        this.setState({
            gutterNum
        });
    }
    handleCol = (colNum) => {
        this.setState({
            colNum
        });
    }


    render() {
        const { gutterNum, colNum } = this.state
        let gutterMark = {};
        [2, 4, 8, 16, 32, 64].forEach((v, i) => {
            gutterMark[i] = v
        })
        let colMark = {};
        [2, 3, 4, 6, 8, 12].forEach((v, i) => {
            colMark[i] = v
        })
        let colList = []
        for (let i = 0; i < colMark[colNum]; i++) {
            colList.push(
                <Col key={i} span={24 / colMark[colNum]}>
                    <div style={{ border: '1px solid #f757ba' }}>col</div>
                </Col>
            )
        }
        const DemoBox = props => <p style={{ height: `${props.value}px`, lineHeight: `${props.value}px` }} >{props.children}</p>
        return (<div className='grid-demo'>
            {/* 基础栅格 */}
            我是基础栅格{this.getArrow(18)}
            <Row className='no-gutter'>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
            <Row className='no-gutter'>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
            </Row>
            <Row className='no-gutter'>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
            </Row>
            {/* 区块间隔 */}
            我是区块栅格{this.getArrow(28)}
            <Row gutter={16}>
                <Col span={6}>
                    <div> col-6</div>
                </Col>
                <Col span={6}>
                    <div> col-6</div>
                </Col>
                <Col span={6}>
                    <div> col-6</div>
                </Col>
                <Col span={6}>
                    <div> col-6</div>
                </Col>
            </Row>
            {/* 左右偏移 */}
            我是左右偏移{this.getArrow(38)}
            <Row className='no-gutter'>
                <Col span={6}>
                    col-6
                </Col>
                <Col span={6} offset={12}>
                    col-6-offset-12
                </Col>
            </Row>
            <Row className='no-gutter'>
                <Col span={6}>
                    col-6
                </Col>
                <Col span={6} offset={12}>
                    col-6-offset-12
                </Col>
            </Row>
            <Row className='no-gutter'>
                <Col span={8} offset={4}>
                    col-8-offset-4
                </Col>
                <Col span={8} offset={4}>
                    col-8-offset-4
                </Col>
            </Row>
            <Row className='no-gutter'>
                <Col span={12} offset={6}>
                    col-12-offset-6
                </Col>
                <Col span={12} offset={6}>
                    col-12-offset-6
                </Col>
            </Row>
            {/* 栅格排序 */}
            我是栅格排序{this.getArrow(38)}
            <Row className='no-gutter'>
                <Col span={18} push={6}>
                    col-18-push-16
                </Col>
                <Col span={6} pull={11} style={{ background: '#f757ba' }}>
                    col-6-pull-11
                </Col>
            </Row>
            {/* flex布局 */}
            我是flex布局{this.getArrow(38)}
            <Row className='no-gutter' type='flex' justify='start'>
                <Col span={4}>
                    col-4-justify-start
                </Col>
                <Col span={4}>
                    col-4-justify-start
                </Col>
                <Col span={4}>
                    col-4-justify-start
                </Col>
                <Col span={4}>
                    col-4-justify-start
                </Col>
            </Row>
            <Row className='no-gutter' type='flex' justify='center'>
                <Col span={4}>
                    col-4-justify-center
                </Col>
                <Col span={4}>
                    col-4-justify-center
                </Col>
                <Col span={4}>
                    col-4-justify-center
                </Col>
                <Col span={4}>
                    col-4-justify-center
                </Col>
            </Row>
            <Row className='no-gutter' type='flex' justify='end'>
                <Col span={4}>
                    col-4-justify-end
                </Col>
                <Col span={4}>
                    col-4-justify-end
                </Col>
                <Col span={4}>
                    col-4-justify-end
                </Col>
                <Col span={4}>
                    col-4-justify-end
                </Col>
            </Row>
            <Row className='no-gutter' type='flex' justify='space-between'>
                <Col span={4}>
                    col-4-justify-space-between
                </Col>
                <Col span={4}>
                    col-4-justify-space-between
                </Col>
                <Col span={4}>
                    col-4-justify-space-between
                </Col>
                <Col span={4}>
                    col-4-justify-space-between
                </Col>
            </Row>
            <Row className='no-gutter' type='flex' justify='space-around'>
                <Col span={4}>
                    col-4-justify-space-around
                </Col>
                <Col span={4}>
                    col-4-justify-space-around
                </Col>
                <Col span={4}>
                    col-4-justify-space-around
                </Col>
                <Col span={4}>
                    col-4-justify-space-around
                </Col>
            </Row>
            {/* flex对齐 */}
            我是flex对齐{this.getArrow(38)}
            <Row className='no-gutter' type='flex' justify='start' align='top'>
                <Col span={4}>
                    <DemoBox value={100}>col-4-justify-start-top</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={50}>col-4-justify-start-top</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={120}>col-4-justify-start-top</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={80}>col-4-justify-start-top</DemoBox>
                </Col>
            </Row>
            <Row className='no-gutter' type='flex' justify='center' align='middle'>
                <Col span={6}>
                    <DemoBox value={100}>col-6-justify-center-middle</DemoBox>
                </Col>
                <Col span={6}>
                    <DemoBox value={50}>col-6-justify-center-middle</DemoBox>
                </Col>
                <Col span={6}>
                    <DemoBox value={120}>col-6-justify-center-middle</DemoBox>
                </Col>
                <Col span={6}>
                    <DemoBox value={80}>col-6-justify-center-middle</DemoBox>
                </Col>
            </Row>
            <Row className='no-gutter' type='flex' justify='start' align='bottom'>
                <Col span={4}>
                    <DemoBox value={100}>col-4-justify-start-bottom</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={50}>col-4-justify-start-bottom</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={120}>col-4-justify-start-bottom</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={80}>col-4-justify-start-bottom</DemoBox>
                </Col>
            </Row>
            {/* flex排序 */}
            我是flex排序{this.getArrow(38)}
            <Row className='no-gutter' type='flex'>
                <Col span={6} order={4}>
                    col-6-order-4
                </Col>
                <Col span={6} order={1}>
                    col-6-order-1
                </Col>
                <Col span={6} order={3}>
                    col-6-order-3
                </Col>
            </Row>
            {/* 响应布局 */}
            响应布局{this.getArrow(38)}
            <Row className="no-gutter">
                <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={11}>col-1</Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4} xxl={2}>col-1</Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={11}>col-1</Col>
            </Row>
            {/* 其他属性的响应式 */}
            其他属性的响应式（span pull push offset order）{this.getArrow(38)}
            <Row className="no-gutter">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>col</Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>col</Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>col</Col>
            </Row>
            {/* 栅格配置器 */}
            栅格配置器{this.getArrow(38)}
            <span>
                <div style={{ width: '50%' }}>
                    <Slider
                        min={0}
                        max={Object.keys(gutterMark).length - 1}
                        value={gutterNum}
                        onChange={this.handleGutter}
                        marks={gutterMark}
                        step={null}
                    ></Slider>
                </div>
                <div style={{ width: '60%' }}>
                    <Slider
                        min={0}
                        max={Object.keys(colMark).length - 1}
                        value={colNum}
                        onChange={this.handleCol}
                        marks={colMark}
                        step={null}
                    ></Slider>
                </div>
                <Row gutter={gutterMark[gutterNum]}>
                    {colList}
                </Row>
            </span>
        </div>)
    }
}
export default Grid