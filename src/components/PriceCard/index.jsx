import React from 'react'
import {Header,Container,Card,ImgBox,Content,Image,Text,Paragraph} from './style'
import Sauna from '../../assets/imgs/sauna.png'



export default ()=> {
    return (
        <Header>
            <Container>
            <Card>
                    <ImgBox>
                        <Image src={Sauna} />
                    </ImgBox> 
                    <Card.Content>
                          <Text>
                           Click here to see more information ...   
                          </Text>  
                          <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id, officiis eaque, consectetur fugiat corporis dolorem, culpa tempora aspernatur</Paragraph>
                    </Card.Content>  
                </Card> 
            </Container>
        </Header>
    )
}

 
