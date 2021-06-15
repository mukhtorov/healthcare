import React from 'react'
import { Icon, Container, Img, Link, Links, Title, Wrapper } from './style'
// import { contact,view } from '../../mock/footerData'
const Footer = () => {
    return (
        <Container>
            <Wrapper main>
                <Wrapper logoWrapper>
                    <Wrapper logo>
                        <Icon.Footer />
                        <Title logo>tulpar</Title>
                    </Wrapper>
                    <Title copyRight copy>© All rights reserved 2021 "WebBrain" </Title>
                </Wrapper>
                <Wrapper logoWrapper map>
                    <Title links>Site Map</Title>
                    {/* {view.map((value)=>{
                        return(
                            <Links>{value.title}</Links>
                        )
                    })} */}
                </Wrapper>
                <Wrapper logoWrapper map >
                    <Title links>Contact us</Title>
                    {/* {contact.map((value)=>{
                        return(
                            <Title>{value.value}</Title>
                        )
                    })} */}
                </Wrapper>
                <Wrapper scroll>
                    <Link>
                        <Icon.Arrow />
                        <Icon.Arrow />
                        <Icon.Arrow />
                    </Link>
                    <Title copyRight rotate>Go Top</Title>
                </Wrapper>
            </Wrapper>
        </Container>
    )
}

export default Footer