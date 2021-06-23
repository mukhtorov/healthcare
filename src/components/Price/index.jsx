import React from 'react'
import {Header,Container,Box,Title,Price,Paragraph,Text,Button} from './style'
import {price} from '../../mock/price'


export default ()=> {
    return (
        <Header>
            <Text>Price List</Text>
            <Container>
                <Box>
                  <Box.BoxL>
                  <Paragraph>Name of Title</Paragraph>
                  {
                    price.map(({title})=>(
                        <Title>{title }</Title>
                    ))
                }
                  </Box.BoxL> 
                  <Box.BoxR>
                      <Paragraph>Price</Paragraph>
                  {
                    price.map(({price})=>(
                        <Price>{price }</Price>
                    ))
                }
                  </Box.BoxR>
                </Box>
                <Box>
                  <Box.BoxL>
                  <Paragraph>Name of Title</Paragraph>
                  {
                    price.map(({title})=>(
                        <Title>{title }</Title>
                    ))
                }
                  </Box.BoxL> 
                  <Box.BoxR>
                      <Paragraph>Price</Paragraph>
                  {
                    price.map(({price})=>(
                        <Price>{price }</Price>
                    ))
                }
                  </Box.BoxR>
                </Box>
            </Container>
            <Button>All Price</Button>
        </Header>
    )
}

 
