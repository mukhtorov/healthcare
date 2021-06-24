import React from 'react'
import {Header,Container,Box,Title,Price,Paragraph,Text,Button} from './style'
import {price} from '../../mock/price'


export default ()=> {
    return (
        <Header>
            <Text>Price List</Text>
            <Container>
                <Box>
                <Paragraph>Name of title</Paragraph>
                  {
                    price.map(({title, price})=>(
                        <div>
                          

                          <Price>{price } / hr</Price>
                        </div>

                    ))
                }
                </Box>
                <Box>

                </Box>
            </Container>
            <Button>All Price</Button>
        </Header>
    )
}

 
