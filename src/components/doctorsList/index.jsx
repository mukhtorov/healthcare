import React from 'react'
import Card from "../doctorsCard";
import { DoctorsData } from "../../mock/doctors";
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
      {DoctorsData.map(createCard)}      
    </Container>
  );
}
