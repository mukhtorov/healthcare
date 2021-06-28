import React from 'react'
import {Header,Container,Box,Title,Text,Button,Sidebar,Btn,Paragraph} from './style'
import {price} from '../../mock/price'


export default ()=> {
    return (
        <Header>
            <Text>Price List</Text>
            <Container>
                <Box right>
                  <Sidebar bottom>
                    <Paragraph>
                      Name of title 
                    </Paragraph>
                    <Paragraph>
                      Price list
                    </Paragraph>
                  </Sidebar>

                {
                    price.map(({title, price})=>(
                      <Sidebar>

                        <Title primary>{title }</Title>
                        <Title >{price }</Title>
                      </Sidebar>
                    ))
                }

                </Box>
                {/* 2 */}
                <Box>
                <Sidebar bottom>
                    <Paragraph>
                      Name of title 
                    </Paragraph>
                    <Paragraph>
                      Price list
                    </Paragraph>
                  </Sidebar>
                {
                    price.map(({title, price})=>(
                      <Sidebar>
                        <Title primary>{title }</Title>
                        <Title>{price }</Title>
                      </Sidebar>
                    ))
                }

                </Box>
            </Container>
            <Btn>
            <Button>All Price</Button>
            </Btn>
        </Header>
    )
}