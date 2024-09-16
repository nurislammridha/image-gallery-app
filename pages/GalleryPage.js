import React from 'react'
import Gallery from '../components/Gallery'

const GalleryPage = ({ navigation, route }) => {
    return (
        <>
            <Gallery navigation={navigation} route={route} />
        </>
    )
}

export default GalleryPage