import React from 'react'
import List from '../components/DoctorsList'
import PriceCard from '../components/PriceCard'
export default (props) => {
    return (
        <h1>
            <PriceCard/>
            <List />
            {/* Coming Soon {props.location.pathname } */}
        </h1>
    )
}