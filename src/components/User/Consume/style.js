import styled from 'styled-components'

export const Block = styled.div`
    width: 100%;
    border-radius: 4px;
    margin: 10px 0 20px 0;
    padding: 0 0 10px 0;
`

export const Title = styled.div`
    height: 80px;
    width: 100%;
    padding: 30px 0 0 10px;
    font-size: 24px;
    > span {
        margin-left: 10px;
        font-size: 14px;
    }
`
export const Gap = styled.div`
    display: inline-block;
    width: 4px;
`

export const Card = styled.div`
    display: inline-block;
    margin: 0 20px 20px 20px;
    border: 1px solid #f0f0f0;
    cursor: pointer;
    transition: box-shadow .3s,border-color .3s,-webkit-box-shadow .3s;
    &:hover{
        border: 1px solid rgba(0,0,0,.1);
        box-shadow: 0 0 8px rgba(0,0,0,.3);
    }
`

export const Desc = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
`