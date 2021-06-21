import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
display: flex;
align-items: center;
padding: 20px 250px;
background: linear-gradient(to right, #E95258 50%, white 50%);
width: 100%;
`

export const LogoWrapper = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`

LogoWrapper.Icon = styled.img`
width: 70px;
height: 45px;
margin-right: 20px;
`
LogoWrapper.Title = styled.div`
font-family: TT Hoves;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 30px;
color: #F9F9F9;
white-space: nowrap;

`

export const Menu = styled.div`
display: flex;
align-items: center;
margin-left: auto;
`

Menu.Item = styled(NavLink)`
font-family: TT Hoves;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
display: flex;
align-items: center;
color: #32495E;
cursor: pointer;
white-space: nowrap;
margin-left: 10px;
text-decoration: none;
   padding: 7px 14px;
transition: all .7s;
   border-radius: 12px;
`
export const activeStyle = {
    background: "#32495E",
    color: "white"
}