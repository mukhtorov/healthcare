import React from 'react'
import List from '../components/DoctorsList'
import PriceList from "../components/PriceList"

export default (props) => {
    return (
        <h1>
            <List />
            <PriceList/>
            {/* Coming Soon {props.location.pathname } */}
        </h1>
    )
}