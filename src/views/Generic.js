import React from 'react'
import List from '../components/DoctorsList'
import Price from '../components/Price'

export default (props) => {
    return (
        <h1>
            <List />
            <Price />
            Coming Soon {props.location.pathname }
        </h1>
    )
}