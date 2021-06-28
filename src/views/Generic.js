import React from 'react'
import List from '../components/DoctorsList'
import Ser from '../components/mainPageQA/index'
import News from '../components/mainPageNews/index'

export default (props) => {
    return (
        <h1>
            <Ser />
            <News />
            
            {/* Coming Soon {props.location.pathname } */}
        </h1>
    )
}