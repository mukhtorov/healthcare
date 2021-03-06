import React from 'react'
import Card from "../DoctorsCard";
import { doctorsData } from "../../mock/doctors";
import {Container} from './style'

function createCard(say) {
  return (
    <Card
      id={say.id}
      key={say.id}
      Name={say.name}
      img={say.img}
      Description={say.description}
      
    />
  );
}

export default () => {
  return (
    <Container>
      {doctorsData.map(createCard)}      
    </Container>
  );
}
