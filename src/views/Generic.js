import React from 'react'
import List from '../components/DoctorsList'
import Price from '../components/Price'
import Recomadation from '../components/Recomadation'
export default (props) => {
    return (
        <h1>
            <List />
            <Price />
            <Recomadation/>
            Coming Soon {props.location.pathname }
        </h1>
    )
}