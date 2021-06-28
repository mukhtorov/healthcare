import React from 'react'
import { contacts } from '../../mock/contacts'
import { Container, Wrapper, Title, GoogleMap } from './style'
import GoogleMapReact from 'google-map-react';
const Contact = () => {
  return (
    <Container>
      <Title main>Contacts</Title>
      <GoogleMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBg33f-iEoZaA1wEVVqKiPquhdWacg3Dh0" }}
          defaultCenter={{ lat: 37.773972, lng: -122.431297 }}
          defaultZoom={12.5}>
        </GoogleMapReact>
      </GoogleMap>
      <Wrapper main>
        {contacts.map(({ id, title, address, phone, fax, email, gmail, tel, contact }) => {
          return (
            <Wrapper content key={id}>
              <Wrapper section>
                <Title title>{title}</Title>
                <Title desc>{address}</Title>
              </Wrapper>
              <Wrapper section>
                <Title title>{phone}</Title>
                <Title desc>{tel}</Title>
                <Title desc>{fax}</Title>
              </Wrapper>
              <Wrapper section>
                <Title title>{contact}</Title>
                <Title desc>{email}</Title>
                <Title desc>{gmail}</Title>
              </Wrapper>
            </Wrapper>
          )
        })}
      </Wrapper>
    </Container>
  )
}

export default Contact
