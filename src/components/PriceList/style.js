import styled from 'styled-components'





export const Header = styled.div `
    padding: 0 250px;
    background-color: #f9f9f9;
`

export const Container = styled.div `
    width: 100%;
    display: flex;
`
export const Box = styled.div `
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 30px;
    justify-content: space-between;
    margin-right:${props => props.right ? "30px" : "0"};
`
export const Title = styled.div `
    font-family: TT Hoves;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;    
    line-height: 20px;
    color: ${props => props.primary ? "#8093AC" : "#32495E"};;
    padding:5px 0;
`
export const Text = styled.div `
    font-family: TT Hoves;
    font-style: bold;
    font-weight: 900;
    font-size: 80px;    
    color: #0e2942;
    margin-bottom: 20px;
`
export const Btn = styled.div `
    display: flex;
    justify-content: center;
`
export const Button = styled.button `
    padding: 10px 45px;
    border: 1px solid #0e2942;
    color: #0e2942;
    border-radius: 25px;
    background: none;
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;
`
export const Sidebar = styled.div `
    display: flex;
    justify-content: space-between;
    padding-bottom: ${props => props.bottom ? "17px" : "0"};
`
export const Paragraph = styled.p `
    font-family: TT Hoves;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #32495E;
`