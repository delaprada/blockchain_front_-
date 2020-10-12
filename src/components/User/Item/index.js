import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getProduct, buyProduct } from '../../../api/request'
import { Button, Alert, Tag } from 'antd'
import { DoubleLeftOutlined } from '@ant-design/icons';
import { Container, Img, Desc, Content, Turn, Header } from './style'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            itemName: null,
            itemImage: '',
            itemInfo: '',
            itemPrice: null,
            reward: null,
            usePoint: null,
            show: false,
            showMsg: false,
            failMsg: '',
        }
        this.handleTurnBack = this.handleTurnBack.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }

    componentWillMount() {
        // 通过id获取商品详细信息
        this.setState({ id: this.props.match.params.id });


        if (this.props.location.state) {
            // 如果是从商品列表页跳转过来
            console.log(this.props.location.state.usePoint);
            this.setState({
                usePoint: this.props.location.state.usePoint
            }, () => {
                localStorage.setItem("usePoint", this.state.usePoint);
            })
        } else {
            // 如果是当前路由刷新则从localStorage中获取usePoint信息
            this.setState({ usePoint: localStorage.getItem("usePoint") });
        }

        console.log(this.props.location.state);
        // 获取商品详细信息
        getProduct(this.props.match.params.id).then(res => {
            if (res.status === 200) {
                console.log(res);
                if (res.data.detail.reward > 0) {
                    this.setState({ reward: res.data.detail.reward });
                }
                this.setState({
                    itemName: res.data.detail.name,
                    itemImage: res.data.detail.image,
                    itemInfo: res.data.detail.info,
                    itemPrice: res.data.detail.price
                })
            } else {
                console.log("请求出错！");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    handleTurnBack() {
        this.props.history.push('/person/consume');
    }

    handleBuy() {
        buyProduct(this.state.id).then(res => {
            console.log(res);
            if (res.status === 200) {
                if (res.data.success) {
                    console.log("购买成功");
                    this.setState({ show: true }, () => {
                        setTimeout(() => {
                            this.setState({ show: false });
                        }, 800)
                    })
                } else {
                    console.log(res.data.msg);
                    this.setState({
                        showMsg: true,
                        failMsg: res.data.msg
                    }, () => {
                        setTimeout(() => {
                            this.setState({ showMsg: false });
                        }, 800)
                    });
                }
            } else {
                console.log("请求失败！");
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const show = this.state.show;
        const showMsg = this.state.showMsg;

        return (
            <Container>
                {show ? <Alert message="购买成功！" type="success" showIcon style={{ position: 'fixed', top: 100, left: '50%' }} /> : null}
                {showMsg ? <Alert message={this.state.failMsg} type="error" showIcon style={{ position: 'fixed', top: 10, left: '50%'  }} /> : null}
                <Header>
                    <Turn onClick={this.handleTurnBack}>
                        <DoubleLeftOutlined />返回商品页
                    </Turn>
                </Header>
                <Content>
                    <Img>
                        <img src={this.state.itemImage} alt="" width={400} height={400} />
                    </Img>
                    <Desc>
                        <div style={{ fontSize: '30px', marginBottom: '60px' }}>
                            {this.state.itemName}
                        </div>
                        <div style={{ fontSize: '20px', marginBottom: '30px' }}>
                            商品简介：{this.state.itemInfo}
                        </div>
                        <div style={{ fontSize: '20px', marginBottom: '30px' }}>
                            价格：<Tag color="cyan" style={{ fontSize: '18px' }}>{this.state.itemPrice} {this.state.usePoint ? '积分' : '元'}</Tag>
                        </div>
                        {this.state.reward ?
                            <div style={{ fontSize: '16px', marginBottom: '30px' }}>
                                购买后可获得积分数： <Tag color="cyan">{this.state.reward}分</Tag>
                            </div> : null
                        }
                        <Button type="primary" onClick={this.handleBuy} style={{ width: '150px', position: 'absolute', bottom: '20px' }}>购买</Button>
                    </Desc>
                </Content>
            </Container>
        )
    }
}

export default withRouter(Item);