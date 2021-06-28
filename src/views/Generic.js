import React from 'react'
import List from '../components/DoctorsList'
import Recomadation from "../components/Recomadation" 
export default (props) => {
    return (
        <h1>
            <List />
            <Recomadation/>
            {/* Coming Soon {props.location.pathname } */}
        </h1>
    )
}