import React, { Component } from 'react';
import { Button, Radio, Icon, Menu, Dropdown, Affix } from "antd";
import './index.less'

const RadioGroup = Radio.Group
const RadioButton = Radio.Button
const ButtonGroup = Button.Group
const MenuItem = Menu.Item

class ButtonComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
            loading: false
        }
    }
    handleSize = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    handleClick = () => {
        alert('我可以点击哟～～')
    }
    handleLoading = () => {
        console.log('data-loading', this.state.loading);

        this.setState({
            loading: !this.state.loading
        })
    }
    handleAffixed = (a) => {
        console.log('data-this', this);
        console.log('data-a', a);


    }
    render() {
        const { size, loading } = this.state
        console.log('data-this.refs.container', this.refs.container);

        const menu = (<Menu>
            <MenuItem key='1'>memu 1</MenuItem>
            <MenuItem key='2'>memu 2</MenuItem>
            <MenuItem key='3'>memu 3</MenuItem>
            <MenuItem key='4'>memu 4</MenuItem>
        </Menu>)
        return (<div className='button-demo'>
            <div className='button-margin-right'>
                按钮类型：
                <Button type='primary'>primary</Button>
                <Button type='default'>default</Button>
                <Button type='dashed'>dashed</Button>
                <Button type='danger'>danger</Button>
            </div>
            <div className='button-margin-right'>
                图标按钮：
                <Button type='primary' shape='circle' icon='search'></Button>
                <Button type='primary' icon='search'>search</Button>
                <Button type='default' shape='circle' icon='search'></Button>
                <Button type='default' icon='search'>search</Button>
                <Button shape='circle' icon='search'></Button>
                <Button icon='search'>search</Button>
                <Button type='dashed' shape='circle' icon='search'></Button>
                <Button type='dashed' icon='search'>search</Button>
            </div>
            <div className='button-margin-right'>
                按钮尺寸：
                <RadioGroup size={size} onChange={this.handleSize}>
                    <RadioButton value='large'>large</RadioButton>
                    <RadioButton value='default'>default</RadioButton>
                    <RadioButton value='small'>small</RadioButton>
                </RadioGroup>
                <div></div>
                <div style={{ marginLeft: '70px' }} className='button-margin-right'>
                    <Button type='primary' size={size}>primary</Button>
                    <Button type='default' size={size}>default</Button>
                    <Button type='dashed' size={size}>dashed</Button>
                    <Button type='danger' size={size}>danger</Button>
                    <Button type='primary' shape='circle' icon='download' size={size}></Button>
                    <Button type='primary' icon='download' size={size}>download</Button>
                    <ButtonGroup size={size}>
                        <Button type='primary' icon='left'>上一页</Button>
                        <Button type='primary'>下一页<Icon type='right'></Icon></Button>
                    </ButtonGroup>
                </div>
                <div className='button-margin-right'>
                    不可用状态：
                    <Button type='primary' onClick={this.handleClick}>primary</Button>
                    <Button type='primary' disabled={true} onClick={this.handleClick}>primary</Button>
                    <Button type='default' onClick={this.handleClick}>default</Button>
                    <Button type='default' onClick={this.handleClick} disabled>default</Button>
                    <Button type='dashed'>dashed</Button>
                    <Button type='dashed' disabled>dashed</Button>
                    <Button type='danger'>danger</Button>
                    <Button type='danger' disabled>danger</Button>
                </div>
                <div className='button-margin-right'>
                    下拉按钮菜单：
                    <Dropdown overlay={menu}>
                        <Button>actions<Icon type='down'></Icon></Button>
                    </Dropdown>
                </div>
                <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}
                    className='button-margin-right'>
                    幽灵按钮：
                    <Button type='primary' ghost>primary</Button>
                    <Button type='default' ghost>default</Button>
                    <Button type='dashed' ghost>dashed</Button>
                    <Button type='danger' ghost>danger</Button>
                </div>
                <div className='button-margin-right'>
                    加载中的按钮：
                    <Button type='primary' loading={loading} onClick={this.handleLoading}>搜索</Button>
                    <Button type='primary' shape='circle' onClick={this.handleLoading}></Button>
                    <Button loading={loading}>搜索</Button>
                    <Button shape='circle' loading={loading} ></Button>
                </div>
                <div className='button-margin-right'>
                    按钮组合：
                    <ButtonGroup>
                        <Button>OK</Button>
                        <Button>Cancel</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button disabled>L</Button>
                        <Button disabled>M</Button>
                        <Button disabled>T</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>L</Button>
                        <Button>M</Button>
                        <Button>T</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type='primary' icon='left'>Go back</Button>
                        <Button type='primary'>Go forward<Icon type='right' /></Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type='primary' icon='cloud'></Button>
                        <Button type='primary' icon='cloud-download'></Button>
                    </ButtonGroup>
                </div>
                <div>
                    block属性设置：按钮适合父元素的宽度：
                    <span style={{ width: '200px', display: 'inline-block' }}>
                        <Button block>按我吧～</Button>
                    </span>

                </div>
                <div>
                    Affix固钉：
                    <Affix offsetTop={400} onChange={this.handleAffixed}>
                        <Button>affixed-offsetTop-400</Button>
                    </Affix>
                </div>

                <div className="scrollable-container" ref={node => this.container = node}>
                    <div className="background">
                        <Affix target={() => this.container}>
                            <Button type="primary">
                                Fixed at the top of container
                                </Button>
                        </Affix>
                        <div>我是测试target监听滚动事件</div>
                        <div>我是测试target监听滚动事件</div>
                        <div>我是测试target监听滚动事件</div>
                        <div>我是测试target监听滚动事件</div>
                        <div>我是测试target监听滚动事件</div>
                    </div>
                </div>

            </div>
        </div>)
    }
}
export default ButtonComp