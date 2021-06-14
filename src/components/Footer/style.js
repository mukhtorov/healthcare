import styled, {css} from "styled-components";


export const Container = styled.div`
display: flex;
background: #333333;
height: 302px;
padding: 40px 115px;

`

const Main = css`
width: 100%;
background-color:red;
`
const LogoWrapper = css`
flex-direction: column;
margin-right:${({map})=>map ? '70px' : '140px'} ;
`
const Logo = css`
width: 206px;
justify-content: space-between;
align-items: center;
`
export const Wrapper = styled.div`
display: flex;
${({main})=>main && Main};
${({logoWrapper})=>logoWrapper && LogoWrapper};
${({logo})=>logo && Logo};
`

const LogoIcon = css`
font-family: TT Hoves;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 30px;
color: #F9F9F9;
text-transform: uppercase;
`

const CopyRight = css`
margin-top: 160.13px;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #F9F9F9;
`
export const Title = styled.div`
${({logo})=>logo && LogoIcon};
${({copyRight})=>copyRight && CopyRight};
`
export const Img = styled.img`
margin-right: 20px;
`