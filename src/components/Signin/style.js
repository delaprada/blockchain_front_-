import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(241, 241, 241);
`

export const Content = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    height: 500px;
    width: 400px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const Title = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const FormContent = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Login = styled.div`
    display: inline-block;
    width: 80px;
    height: 30px;
    text-align: center;
    margin-right: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #13c2c2;
    border-bottom: 2px solid #13c2c2;
    cursor: pointer;
`

export const Register = styled.div`
    display: inline-block;
    width: 80px;
    height: 30px;
    text-align: center;
    margin-left: 20px;
    font-size: 20px;
    cursor: pointer;
`

export const Gap = styled.b`
    font-weight: 700;
    height: 30px;
    line-height: 30px;
`

