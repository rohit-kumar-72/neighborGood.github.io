import React from 'react'
import Heading from '../../common/Heading'
import Social from './Social'
import Subscribe from './Subscribe'
import Gallery from './Gallery'

function SideBar() {
    return (
        <div>
            <Heading title={"Stay Connected"} color={"#000"} />
            <Social />
            <Subscribe />
            <Gallery />
        </div>
    )
}

export default SideBar