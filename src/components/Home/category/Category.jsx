import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../../slices/newsSlice';
import Navbar from '../../common/Navbar';
import Heading from '../../common/Heading';
import { SlCalender } from 'react-icons/sl';
import SideBar from '../sidebar/SideBar';
import "../mainsection/style.css"
import { Link } from 'react-router-dom';

function Category({ allNews }) {
    const { loading } = useSelector((state) => state.news);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!allNews) {
            dispatch(setLoading(true));
        }
        else {
            dispatch(setLoading(false))
        }
    }, [allNews])
    console.log(allNews)
    return (
        <div>
            {
                loading
                    ? <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <img src={"/loader.gif"} alt="loader" width={"300px"} />
                        <h2 style={{ marginTop: "-50px" }}>Loading...</h2>
                    </div>
                    : <div>
                        <main>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap-reverse" }}>
                                <h1 style={{}} className='heading-name'>Neighbor <span className='heading-second'>Good</span></h1>
                                <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fd21112dc-736f-4db3-959a-6304909957dc%2FLogo_green_png.png?table=block&id=b12625b9-cb25-4feb-96fb-fe5162121c4d&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=250&userId=&cache=v2" style={{ border: "#fff", height: '150px' }} className="img-thumbnail" alt="..." />
                            </div>
                            <Navbar />
                            <div className="mainContainer">
                                <div className="rightContainer">
                                    <Heading title={"Popular"} color={"#fb4c35"} />
                                    <div className="popularContainer">
                                        {
                                            allNews?.map((news, index) => (
                                                <Link className="popularBox" key={index} to={news.url}>
                                                    <div className="popularImage">
                                                        <img src={news.urlToImage} alt="thumbnail" />
                                                    </div>
                                                    <div className="popularContent">
                                                        <div className='popularTitle'>
                                                            {news.category}
                                                        </div>
                                                        <div className="popularDescription">
                                                            {news.description + " ... "}<span className='readmore'>Read More</span>
                                                        </div>
                                                        <div className="popularTimeStamp">
                                                            {/* <SlCalender style={{ fontSize: "16px", color: "#e27839" }} /> */}
                                                            {news.name}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="leftContainer">
                                    <SideBar />
                                </div>
                            </div>
                        </main>
                    </div>
            }
        </div>
    )
}

export default Category