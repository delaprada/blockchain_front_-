import React, { Component } from 'react'
import { Layout, Menu, Dropdown } from 'antd'
import { renderRoutes } from 'react-router-config'
import { withRouter, Redirect } from 'react-router-dom'
import { logOut } from '../../api/request'
import { Avatar } from './style'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    GiftOutlined,
} from '@ant-design/icons';
import '../../style/style.css'

const { Header, Sider, Content } = Layout;

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            selectItem: ['1'],
            username: '用户名',
            avatar: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
            redirect: false,
        };
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    componentWillMount() {
        if (localStorage.getItem("userData")) {
            console.log("userData exist");
        } else {
            this.setState({ redirect: true });
        }

        const pathname = this.props.location.pathname;
        if (pathname === '/person/consume') {
            this.setState({ selectItem: ['1'] });
        }
    }

    handleClick = e => {
        if (e.key === '1') {
            this.props.history.push('/person/consume');
        }
    };

    handleLogOut() {
        localStorage.setItem("userData", "");

        logOut().then(res => {
            if (res.status === 200) {
                if (res.data.success) {
                    console.log(res.data.msg);
                    this.props.history.push('/');
                } else {
                    console.log(res.data.msg);
                }
            }
        }).catch(err => {
            console.log(err);
        })
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { route } = this.props;

        const menu = (
            <Menu>
                <Menu.Item onClick={this.handleLogOut}>
                    退出登陆
                </Menu.Item>
            </Menu>
        );

        if (this.state.redirect) {
            return <Redirect to={'/'} />;
        }

        return (
            <Layout style={{ height: '100vh' }}>
                <Sider theme='light' trigger={null} collapsible collapsed={this.state.collapsed} >
                    <div className="logo" />
                    <Menu onClick={this.handleClick} mode="inline" defaultSelectedKeys={this.state.selectItem}>
                        <Menu.Item key="1" icon={<GiftOutlined />}>
                            商城
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" >
                    <Header className="site-layout-background" style={{ paddingLeft: 10, paddingRight: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <Avatar>
                            <Dropdown overlay={menu}>
                                <img src={this.state.avatar} alt="" style={{ width: 25, height: 25, marginRight: 10, borderRadius: 12 }} />
                            </Dropdown>
                        </Avatar>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: '',
                        }}
                    >
                        {renderRoutes(route.routes)}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(Person);