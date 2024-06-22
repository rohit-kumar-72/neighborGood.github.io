import React from 'react'

function GridImage({ data }) {
    // console.log(data)
    return (
        <>
            <section className='hero'>
                <div className="container">
                    {
                        data.map((item, index) => (
                            <div className='box' key={index}>
                                <div className="image">
                                    <img src={item?.urlToImage} alt="" />
                                </div>
                                <div className="text">
                                    <span className='titleBg'>{item?.title}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default GridImage