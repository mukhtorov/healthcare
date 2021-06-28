import React from 'react'
import {news}  from '../../mock/news'
import { Container,Heading,Title,Image,Head,Paragraph,Text,Info,ButtonCon,Button } from './style'


export default () => {
    return (
        <Container>
            <Heading>Our News</Heading>
                <Info>
                {
                    news.map(value=>{
                        return (
                            <Title>
                                     <Image src={value.img}></Image>
                                     <Head>{value.title}</Head>
                                    <Paragraph>{value.parag}</Paragraph>
                                     <Text>{value.text}</Text>  
                            </Title>
                                
                              
                         
                        )
                    })
                }
                </Info>
                <ButtonCon>
                     <Button>All News</Button>
                </ButtonCon>
                
                
             
            
        </Container>
    )
}
