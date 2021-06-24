import React,{useState} from 'react'
import { Container,Heading,Title,Name,Button,Ques,LogoWrapper,Description,Head,Paragraph,Answer } from './style'
import {questions} from '../../mock/questions'
import arrowActive from '../../assets/icons/arrowActive.svg'
import arrow from '../../assets/icons/arrow.svg'


export default (props) => {

    const [isActive,setIsActive]=useState(1)
    const [content,setContent]=useState("")
    return (
        <Container>
            
                <Heading>
                    Question & Answer
             </Heading>
            
            

            
            <Title>
                <Name>
                     {
                        questions.map(item => {
                             return (
                                 <Ques>
                                    <Head >{item.title}</Head>
                                    <Button  onClick={()=>setIsActive(item.id)}><LogoWrapper style={{backgroundColor: isActive === item.id && 'red'}} src={isActive === item.id ? arrowActive : arrow} /></Button>
                                </Ques>
                               
                                      )
                     })

                    }
                 </Name>

                 <Description>
                     {questions.filter((item)=>item.id === isActive).map((item)=>{
                        return (
                            <div>
                                <Answer>{item.answer}</Answer>
                                <Paragraph> {item.desc} <br/><br/> {item.desc} </Paragraph>
                            </div>
                         
                                )
                             })}
                </Description>
        </Title>
        </Container>
    )
}
