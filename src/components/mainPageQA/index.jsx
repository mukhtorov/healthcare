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
<<<<<<< HEAD
                                    <Button  onClick={()=>setIsActive(item.id)}><LogoWrapper style={{backgroundColor: isActive === item.id && '#E95258'}} src={isActive === item.id ? arrowActive : arrow} /></Button>
=======
                                    <Button  onClick={()=>setIsActive(item.id)}>
                                        <LogoWrapper isActive = {isActive === item.id} src={isActive === item.id ? arrowActive : arrow} />
                                    </Button>
>>>>>>> e391c7aec9a55c3001e3a7a4b23471ad402e8300
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
                                <Paragraph> {item.desc} </Paragraph>
                            </div>
                         
                                )
                             })}
                </Description>
        </Title>
        </Container>
    )
}
