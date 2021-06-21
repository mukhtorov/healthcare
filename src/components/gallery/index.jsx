
 
 import React from 'react'
 import {Container,Image,Titel} from './style'
 
 export default (props) => {
     return (
         <Container>   
             <Image src={props.img} />
           <Titel>{props.Titel}</Titel>
         </Container>
     )
 }
 
 