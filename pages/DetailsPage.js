import React from 'react'
import Details from '../components/Details'

const DetailsPage = ({ navigation, route }) => {
    return (
        <>
            <Details navigation={navigation} route={route} />
        </>
    )
}

export default DetailsPage