import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import { Title, Button, ButtonContainer } from './style'
import { Container } from './style.js'

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignIn() {
        this.props.handleSignIn();
    };

    handleSignUp() {
        this.props.handleSignUp();
    };

    render() {
        return (
            <ButtonContainer>
                <Button onClick={this.handleSignIn}>登陆</Button>
                <Button onClick={this.handleSignUp}>注册</Button>
            </ButtonContainer>
        )
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignIn() {
        this.props.history.push('/signin');
    };

    handleSignUp() {
        this.props.history.push('/signup');
    };

    render () {
        const { route } = this.props;

        return (
            <Container>
                <Title>
                    积分链商城
                </Title>
                <Buttons
                    handleSignIn={this.handleSignIn}
                    handleSignUp={this.handleSignUp}
                >
                </Buttons>
                <div style={{ zIndex: 10, position: 'fixed', top: 0 , left: 0, right: 0}}>
                    { renderRoutes(route.routes) }
                </div>
            </Container>
        )
    }
}

export default withRouter(Home)