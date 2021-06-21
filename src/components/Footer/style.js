import styled, {css} from "styled-components";
import {ReactComponent as TopArrow} from '../../assets/icons/top-arrow.svg';
import {ReactComponent as Footer} from '../../assets/icons/footer-logo.svg';
import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Google} from '../../assets/icons/google.svg';

export const Container = styled.div`
display: flex;
background: var(--bg-footer-color);
padding: 40px 250px;
`

const Main = css`
width: 100%;
user-select: none;
margin-top: 10px;
`
const LogoWrapper = css`
flex-direction: column;
margin-right:${({map})=>map ? '70px' : '140px'} ;
`
const Logo = css`
width: 206px;
justify-content: space-between;
align-items: center;
flex-direction:row;
`
const Scroll = css`
margin-left: auto;
display: flex;
flex-direction: column;
align-items: center;
position:relative;

`
export const Wrapper = styled.div`
display: flex;
flex-direction:${({main})=>!main && 'column'};
${({main})=>main && Main};
${({logoWrapper})=>logoWrapper && LogoWrapper};
${({logo})=>logo && Logo};
${({scroll})=>scroll && Scroll};
`

const LogoIcon = css`
font-family: TT Hoves;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 30px;
text-transform: uppercase;
cursor: pointer;
`

const CopyRight = css`
margin-top:${({copy})=>copy ? '160.13px' : '25px'} ;
transform:${({rotate})=>rotate && 'rotate(-90deg)'}; 
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
`

const Links = css`
font-weight: 800;
font-size: 16px;
line-height: 20px;
margin-bottom: 10px;
`
export const Title = styled.div`
${({logo})=>logo && LogoIcon};
${({copyRight})=>copyRight && CopyRight};
color: #F9F9F9;
${({links})=>links && Links};

`
export const Icon = styled.div`

`
Icon.Footer = styled(Footer)`
margin-right: 20px;
cursor: pointer;
:active{
transform:scale(1.1);
}

`
Icon.Arrow = styled(TopArrow)`
width: 34px;
height: 34px;   
`
Icon.Facebook = styled(Facebook)`
cursor:pointer;
margin-right: 7px;
:active{
   transform:scale(1.1);
 
}
`
Icon.Google = styled(Google)`
cursor:pointer;
:active{
   transform:scale(1.1);
}
margin-right: 7px;
`
const Contact = css`
display:flex;
flex-direction:column;
`
export const Site = styled.a`
color: var(--bg-color-light);
:hover{
    color:var(--bg-color-redbull);
}

margin-top:10px;
justify-content:space-between;
cursor: pointer;
${({contact})=>contact && Contact};
`
export const Link = styled.a`
cursor: pointer;
padding:7.97px;
display: flex;
background: var(--bg-color-redbull);
flex-direction: column;
width: 30px;
height: 30px;
justify-content: space-between;
align-items: center;
border-radius: 50%;
:hover{
    background-color: red;
}
:active{
    transform: scale(1.1) ;
   
}
`