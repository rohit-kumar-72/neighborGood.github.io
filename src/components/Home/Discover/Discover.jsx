import React from "react"
import "./../../../App.css"
import Heading from "../../common/Heading"

const Discover = () => {
    const discover = [
        {
            src: "/discover/d1.jpg",
            title: "GAMES"
        },
        {
            src: "/discover/d2.jpg",
            title: "SPORTS"
        },
        {
            src: "/discover/d3.jpg",
            title: "HUMOUR"
        },
        {
            src: "/discover/d4.jpg",
            title: "GADGETS"
        },
        {
            src: "/discover/d5.jpg",
            title: "MOVIE"
        },
        {
            src: "/discover/d1.jpg",
            title: "NITENDO"
        },
    ]
    return (
        <>
            <section className='discover'>
                <div className='discoverContainer'>
                    <Heading title='Discover' color={"#fb4c35"} />
                    <div className='discoverContent'>
                        {discover.map((val, index) => {
                            return (
                                <div className='discoverBox' key={index}>
                                    <div className='discoverImg'>
                                        <img src={val.src} alt='' />
                                    </div>
                                    <h2 className='discoverTitle'>{val.title}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discover