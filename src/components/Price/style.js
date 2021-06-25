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
    /* border: 1px solid blue; */
    margin-right: ${({left})=> left && '78px'};
`
Box.Left = styled.div `
    width: 80%;
`
Box.Right = styled.div `
    width: 20%;

`
export const Title = styled.div `
    font-family: TT Hoves;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;    
    line-height: 20px;
    color: #8093AC;
    padding:5px 0;
`
export const Price = styled.div `
    font-family: TT Hoves;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;    
    line-height: 20px;
    color: #0e2942;
    padding:5px 0;
`
export const Paragraph = styled.div `
    font-family: TT Hoves;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;    
    line-height: 20px;
    color: #0e2942;
    padding:5px 0;
`
export const Text = styled.div `
    font-family: TT Hoves;
    font-style: bold;
    font-weight: 900;
    font-size: 80px;    
    color: #0e2942;
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