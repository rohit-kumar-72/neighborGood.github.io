import React from 'react';
import Heading from '../../common/Heading';

function Gallery() {
    return (
        <section className='gallery'>
            <Heading title='Gallery' color={"#000"} />
            <div className='img'>
                <img src={"/g1.jpg"} alt='galleryImage' />
            </div>
        </section>
    )
}

export default Gallery