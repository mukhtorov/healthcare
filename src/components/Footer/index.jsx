import React from 'react'
import { Container, Img, Title, Wrapper } from './style'
import logo from '../../assets/imgs/footer-logo.png'
const Footer = () => {
    return (
        <Container>
            <Wrapper main>
                <Wrapper logoWrapper>
                    <Wrapper logo>
                        <Img src={logo} />
                        <Title logo>tulpar</Title>
                    </Wrapper>
                    <Title copyRight>© All rights reserved 2021 "WebBrain" </Title>
                </Wrapper>
                <Wrapper logoWrapper map>
                    fafaf
                </Wrapper>
                <Wrapper  >
                    fafaf
                </Wrapper>


            </Wrapper>
        </Container>
    )
}

export default Footer