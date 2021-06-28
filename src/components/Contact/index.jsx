import React from 'react'
import { contacts } from '../../mock/contacts'
import { Container, Wrapper, Title } from './style'

const Contact = () => {
    return (
        <Container>
            <Title>Contacts</Title>

            <Wrapper>
                {contacts.map((value) => {
                    return (
                        <Wrapper key={value.id}>
                            <Title>{value.title}</Title>
                        </Wrapper>
                    )
                })}
            </Wrapper>
        </Container>
    )
}

export default Contact
