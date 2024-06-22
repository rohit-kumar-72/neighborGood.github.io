import React from 'react'
import Heading from '../../common/Heading'
import { FaPaperPlane } from "react-icons/fa";

function Subscribe() {
    return (
        <div>
            <Heading title={"Subscribe"} color={"#000"} />
            <section className='subscribe'>
                <h1 className='subscribeTitle'>Subscribe to our New Stories</h1>
                <form action=''>
                    <input type='email' placeholder='Email Address...' />
                    <button>
                        <FaPaperPlane style={{}} /> SUBMIT
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Subscribe