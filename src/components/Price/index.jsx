import React from 'react'
import {Header,Container,Box,Title,Price,Paragraph,Text,Button} from './style'
import {price} from '../../mock/price'


export default ()=> {
    return (
        <Header>
            <Text>Price List</Text>
            <Container>
                <Box left>
                {
                    price.map(({title, price})=>(
                      <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Title>{title }</Title>
                        <Title>{price }</Title>
                      </div>
                    ))
                }
                  {/* <Box.Left>
                  <Paragraph>Name of Title</Paragraph>
                  {
                    price.map(({title})=>(
                        <Title>{title }</Title>
                    ))
                }
                  </Box.Left> 
                  <Box.Right>
                      <Paragraph>Price</Paragraph>
                  {
                    price.map(({price})=>(
                        <Price>{price } / hr</Price>
                    ))
                }
                  </Box.Right> */}
                </Box>
                {/* 2 */}
                <Box>
                {
                    price.map(({title, price})=>(
                      <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Title>{title }</Title>
                        <Title>{price }</Title>
                      </div>
                    ))
                }
                  {/* <Box.Left>
                  <Paragraph>Name of Title</Paragraph>
                  {
                    price.map(({title})=>(
                        <Title>{title }</Title>
                    ))
                }
                  </Box.Left> 
                  <Box.Right>
                      <Paragraph>Price</Paragraph>
                  {
                    price.map(({price})=>(
                        <Price>{price } / hr</Price>
                    ))
                }
                  </Box.Right> */}
                </Box>
            </Container>
            <Button>All Price</Button>
        </Header>
    )
}