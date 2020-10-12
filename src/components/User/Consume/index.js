import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter, Redirect } from 'react-router-dom'
import { DollarCircleOutlined } from '@ant-design/icons';
import { getProductList, buyProductByCash, getBalance } from '../../../api/request'
import { Block, Title, Card, Desc, Gap } from './style'
import '../../../style/style.css'

class CardItem extends Component {

    handleClick(e, id, usePoint) {
        this.props.onClick(id, usePoint);
    }

    render() {
        const { url, name, id, usePoint } = this.props;
        return (
            <Card onClick={(e) => this.handleClick(e, id, usePoint)}>
                <img src={url} alt="" style={{ width: '12vw', height: '20vh' }} />
                <Desc>
                    <div>
                        {name}
                    </div>
                </Desc>
            </Card>
        )
    }
}


class Consume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            cashList: [],
            pointList: [],
            amount: null,
            redirect: false
        };
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    componentWillMount() {
        if (localStorage.getItem("userData")) {
            console.log("已经登陆过了");
        } else {
            this.setState({ redirect: true });
        }

        // 获取商品列表
        getProductList().then(res => {
            if (res.status === 200) {
                console.log(res);

                const cashTempList = [];
                const pointTempList = [];

                // 将获取到的商品列表分为使用现金支付的列表和使用积分支付的列表
                res.data.detail.forEach((item) => {
                    if (item.type === 0) {
                        cashTempList.push(item);
                    } else {
                        pointTempList.push(item);
                    }
                });

                this.setState({
                    cashList: cashTempList,
                    pointList: pointTempList
                })
            } else {
                console.log("请求出错！");
            }
        }).catch(err => {
            console.log(err);
        });

        // 获取用户积分数
        getBalance().then(res => {
            console.log(res);
            if (res.status === 200) {
                this.setState({ amount: res.data.detail });
            } else {
                console.log("请求出错!");
            }
        }).catch(err => {
            console.log(err);
        })
    }

    handleClickItem(id, usePoint) {
        // 跳转到商品详情页带上是否是使用积分消费的信息
        this.props.history.push({
            pathname: `/person/consume/${id}`,
            state: { usePoint: usePoint }
        })
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { route } = this.props;

        if (this.state.redirect) {
            return <Redirect to={'/signin'} />;
        }

        return (
            <div>
                <Title>
                    <DollarCircleOutlined style={{ fontSize: '24px' }} />
                    <Gap></Gap>
                    现金消费区
                </Title>
                <Block>
                    {this.state.cashList.map((item) =>
                        <CardItem
                            key={item.id}
                            url={item.image}
                            name={item.name}
                            id={item.id}
                            onClick={this.handleClickItem}
                            usePoint={false}
                        >
                        </CardItem>
                    )}
                </Block>

                <Title>
                    <DollarCircleOutlined style={{ fontSize: '24px' }} />
                    <Gap></Gap>
                    积分消费区
                    <span>用户现有积分为：{this.state.amount}</span>
                </Title>
                <Block>
                    {this.state.pointList.map((item) =>
                        <CardItem
                            key={item.id}
                            url={item.image}
                            name={item.name}
                            id={item.id}
                            onClick={this.handleClickItem}
                            usePoint={true}
                        >
                        </CardItem>
                    )}
                </Block>
                {renderRoutes(route.routes)}
            </div>
        )
    }
}

export default withRouter(Consume);