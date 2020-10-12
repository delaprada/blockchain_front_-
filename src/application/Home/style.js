import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background: radial-gradient(ellipse farthest-side at 100% 100%, #F8FFF3 10%, #85D8CE 50%, #085078 120%);
    /* background-image: linear-gradient(to bottom right, rgb(46, 113, 138), rgb(90, 163, 171) ,  rgb(157, 218, 210)); */
`

export const Title = styled.div`
    width: 300px;
    position: relative;
    margin: 0 auto;
    top: 35%;
    transform: translateY(-50%);
    font-size: 60px;
    color: #fff;
    &:after {
        content: '';
        position: absolute;
        width: 140px;
        height: 2px;
        left: calc(50% - 70px);
        bottom: -15px;
        background: linear-gradient(to right, rgba(0,113,117,.3), rgba(0,143,135,.45));
        box-shadow: 0 1px 0 rgba(181,243,241,.07);
    }
`

export const ButtonContainer = styled.div`
    width: 480px;
    position: relative;
    top: 42%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`

export const Button = styled.div`
    width: 120px;
    height: 50px;
    display: inline-block;
    border-radius: 8px;
    background: linear-gradient(#fff, #ECF9F7 92%, #DEF4F1);
    box-shadow: 0 1px 2px rgba(0,91,103,.18);
    color: #2F858D;
    font-weight: 500;
    text-align: center;
    line-height: 50px;
    transition: .25s;
    cursor: pointer;
    &:hover {
        background: linear-gradient(#fff, #ECF9F7 40%, #DEF4F1);
    }
`