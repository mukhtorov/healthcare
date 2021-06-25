import React from 'react'
import {Header, Container,Image,Title} from './style'
import ImageUk from '../../assets/imgs/rec-yuk.png'
import VillagePharmacy from '../../assets/imgs/rec-village-pharmacy.png'
import Plus from '../../assets/imgs/rec-plus.png'
import TeaPharmacy from '../../assets/imgs/rec-pharmacy.png'
import Drugsote from '../../assets/imgs/rec-drugstore.png'



export default  ()=>{
    return (
        <Header>
            <Title>
                We are Recommended
            </Title>
           <Container>
               <Image src={Drugsote}/>
               <Image src={ImageUk}/>
               <Image src={TeaPharmacy}/>
               <Image src={Plus}/>
               <Image src={VillagePharmacy}/>
            </Container> 
        </Header>
    )
}


