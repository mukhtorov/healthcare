import React from 'react'
import {Container,Image,Name,Description} from './style'

export default (props) => {
    return (
        <Container>   
            <Image src={props.img} />
            <Name>{props.Name}</Name>
            <Description>{props.Description}</Description>
        </Container>
    )
}

