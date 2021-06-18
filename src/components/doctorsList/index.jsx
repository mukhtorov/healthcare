import React from 'react'
import Card from "../doctorsCard/index";
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
      <h1 className="heading"></h1>
      {doctorsData.map(createCard)}      
    </Container>
  );
}
