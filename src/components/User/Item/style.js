import styled from 'styled-components'

export const Container = styled.div`
    height: 110vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #fff;
`

export const Img = styled.div`
    width: 400px;
    height: 400px;
    /* border: 1px solid black; */
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    border-radius: 8px;
    margin: 0 100px 0 0;
`

export const Content = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Desc = styled.div`
    width: 400px;
    height: 400px;
    position: relative;
`

export const Turn = styled.div`
    width: 150px;
    height: 80px;
    padding: 30px 0 0 30px;
    margin-bottom: 100px;
    cursor: pointer;
    color: #fff;
    transition: font-size .3s;
    &:hover {
        font-size: 18px;
    }
`

export const Header = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.8);
`
