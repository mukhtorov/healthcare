import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Container, Link, Site, Title, Wrapper } from './style'
import { contact, view } from '../../mock/footerData'
const Footer = () => {

    const history = useHistory();
    const onPush = () => {
        history.push('/home');
    }
    return (
        <Container>
            <Wrapper main>
                <Wrapper logoWrapper>
                    <Wrapper logo>
                        <Icon.Footer />
                        <Title onClick={onPush} logo>tulpar</Title>
                    </Wrapper>
                    <Title copyRight copy>© All rights reserved 2021 "WebBrain" </Title>
                </Wrapper>
                <Wrapper logoWrapper map>
                    <Title links>Site Map</Title>
                    {view.map((value) => {
                        return (
                            <Site>{value.title}</Site>
                        )
                    })}
                </Wrapper>
                <Wrapper logoWrapper map >
                    <Title links>Contact us</Title>
                    {contact.map((value) => {
                        return (
                            <Wrapper>
                                <Site>{value.number}</Site>
                                <Site>{value.fax}</Site>
                                <Site>{value.email}</Site>
                                <Wrapper main>
                                    <Icon.Facebook />
                                    <Icon.Google />
                                    <Icon.Facebook />
                                    <Icon.Google />
                                </Wrapper>
                            </Wrapper>

                        )
                    })}
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